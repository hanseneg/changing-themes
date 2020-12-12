import React from 'react'
import {ThemeContextConsumer} from './themeContext'
import './style.css'

function Main() {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )
}

export default Main