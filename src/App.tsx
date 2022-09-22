import React, { useState } from "react"
import classes from "./App.module.css"
import { CodeInputBox } from "./components/CodeInputBox"
import { OutputArea } from "./components/OutputArea"
import { compile } from "./lib/compiler"


export const App: React.FC = () => {
    const [code, setCode] = useState("")

    const codeUpdate = (value: string) => {
        let compiled = "Failed to compile.";

        try {
            compiled = compile(value)
        } catch(e) {
            compiled = e.toString()
        }

        setCode(compiled)
    }

    return (<div className={classes.App}>
        <CodeInputBox onChange={codeUpdate} />
        <OutputArea>{code}</OutputArea>
    </div>)
}
