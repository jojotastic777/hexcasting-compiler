import DICTIONARY from "./dictionary.js"

enum TokenType {
  Word = "WORD",
  NumberLiteral = "NUMBER",
  Mask = "MASK",
  FunctionStart = "FUNCSTART",
  FunctionEnd = "FUNCEND",
  Eof = "EOF"
}

type Token = { type: TokenType, symbol: string }

export const lexer = (input: string): Token[] => input
  .trim()
  .split("\n")
  .map(line => line.replace(/\/\/.*/g, "").trim())
  .filter(line => line.length > 0)
  .map(line => line.replace(/\s{2,}/g, " "))
  .flatMap(line => line.split(" "))
  .map(word => {
    if (/^\d+(\.\d+)?$/.test(word)) return { type: TokenType.NumberLiteral, symbol: word }
    if (word === "mask") return { type: TokenType.Mask, symbol: "" }
    if (word === ":") return { type: TokenType.FunctionStart, symbol: "" }
    if (word === ";") return { type: TokenType.FunctionEnd, symbol: "" }
    return { type: TokenType.Word, symbol: word }
  })
  .concat({ type: TokenType.Eof, symbol: "" })

enum ASTNodeType {
  Word = "WORD",
  Number = "NUMBER",
  Mask = "MASK",
  Function = "FUNCTION"
}

type ASTWordNode = { type: ASTNodeType.Word, value: string }
type ASTNumberNode = { type: ASTNodeType.Number, value: string }
type ASTMaskNode = { type: ASTNodeType.Mask, value: string }
type ASTFunctionNode = { type: ASTNodeType.Function, name: string, children: ASTNode[] }
type ASTNode = ASTWordNode | ASTNumberNode | ASTMaskNode | ASTFunctionNode

export const parser = (tokens: Token[], tree: ASTNode[] = []): ASTNode[] => {
  console.log(tokens, tree)

  if (tokens[0].type === TokenType.Eof) return tree
  if (tokens[0].type === TokenType.Word) return parser(tokens.slice(1), [ ...tree, { type: ASTNodeType.Word, value: tokens[0].symbol } ])
  if (tokens[0].type === TokenType.NumberLiteral) return parser(tokens.slice(1), [ ...tree, { type: ASTNodeType.Number, value: tokens[0].symbol } ])
  if (tokens[0].type === TokenType.Mask) {
    const bitmask = tree.slice(-1)[0]
    if (bitmask.type !== ASTNodeType.Number) throw new SyntaxError(`Bookkeeping must be immediately preceeded by a number literal.`)

    return parser(tokens.slice(1), [ ...tree.slice(0, -1), { type: ASTNodeType.Mask, value: bitmask.value } ])
  }
  if (tokens[0].type === TokenType.FunctionStart) {
    const functionEndIndex = tokens.findIndex(t => t.type === TokenType.FunctionEnd)
    const nextFunction = tokens.slice(1).findIndex(t => t.type === TokenType.FunctionStart)
    if (functionEndIndex === -1) throw new SyntaxError(`Function '${tokens[1].symbol}' does not end.`)
    if (nextFunction !== -1 && nextFunction < functionEndIndex) throw new SyntaxError(`Cannot have nested functions.`)
    return parser(tokens.slice(functionEndIndex + 1), [ ...tree, { type: ASTNodeType.Function, name: tokens[1].symbol, children: parser(tokens.slice(2)) } ])
  }
  if (tokens[0].type === TokenType.FunctionEnd) return tree
}

export const resolveFunctions = (tree: ASTNode[]): ASTNode[] => tree
  .filter(node => node.type !== ASTNodeType.Function)
  .flatMap(node => {
    if (node.type === ASTNodeType.Word) {
      const func = tree.find(e => e.type === ASTNodeType.Function && e.name === node.value) as ASTFunctionNode | undefined
      return func?.children ?? node
    }
    
    return node
  })

export const genCode = (tree: ASTNode[], dictionary: Map<string, string>): string => tree
  .filter(node => node.type !== ASTNodeType.Function)
  .map(node => {
    if (node.type === ASTNodeType.Word) {
      const translation = dictionary.get(node.value)
      if (translation !== undefined) return translation
      throw new SyntaxError(`Unknown Word: ${node.value}`)
    }

    if (node.type === ASTNodeType.Number) {
      return `Number Literal: ${node.value}`
    }

    if (node.type === ASTNodeType.Mask) {
      return `Bookkeeper's Gambit: ${node.value.replaceAll("0", "v").replaceAll("1", "-")}`
    }

    throw new Error(`AST Node Could Not Be Translated: ${JSON.stringify(node)}`)
  })
  .join("\n")

export const compile = (input: string): string => genCode(resolveFunctions(parser(lexer(input))), DICTIONARY)
