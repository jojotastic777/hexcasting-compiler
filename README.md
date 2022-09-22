# "I Can't Believe It's Not FORTH" -> Hexcasting Compiler
Over the course of an afternoon, I've hacked out a proof-of-concept compiler for translating something vaguely resembing FORTH into Hexes for the Minecraft mod [Hex Casting](https://github.com/gamma-delta/HexMod). Surprisingly, this isn't the *worst* thing I've ever written. Still pretty bad, though.

There are a *number* of problems with this compiler, including but not limited to the fact that the code is entirely uncommented as well as being a *total and utter mess,* the fact that the whole "webapp" thing was tacked on at the very end of the process, and that the very few error messages I've included in the compiler are extremely cryptic and lack line numbers of any kind.

*Most* of these issues are a result of the fact that I have *never written a compiler before.*

Seriously, I have no idea what I'm doing. Send help.

If, despite all those issues, you *still* want to use this, there are a couple of things you should know:
- A list of words which compile to Hex Patterns can be found [here](src/lib/dictionary.ts).
    - Ideally, there would be more documentation than this regarding things. There *isn't*, and this iteration of things isn't likely to get any.
- In order to use the "Bookkeeper's Gambit", make a number literal as a bitmask followed by `mask`.
    - For example, `1010 mask` compiles to `Bookkeeper's Gambit: -v-v`.
- Functions look like `: function-name some words go here ;`.
