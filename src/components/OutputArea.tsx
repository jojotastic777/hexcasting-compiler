import React from "react"
import classes from "./OutputArea.module.css"

export const OutputArea: React.FC<{ children: string }> = ({ children }) => {
    return (<div className={classes.OutputArea}>
        { children }
    </div>)
}
