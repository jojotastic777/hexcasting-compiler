import React from "react"
import classes from "./CodeInputBox.module.css"

export const CodeInputBox: React.FC<{ onChange: (value: string) => void }> = (props) => {
    return (<textarea className={classes.CodeInputBox} spellCheck="false" onChange={event => props.onChange(event.target.value)}></textarea>)
}
