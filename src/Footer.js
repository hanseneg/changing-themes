import React from 'react'
import {ThemeContextConsumer} from './themeContext'

function Footer() {
    return (
        <ThemeContextConsumer>
             {context => (
                <footer className={`${context.theme}-theme`}>{context.theme === 'light' ? 'Light' : 'Dark'} Footer</footer>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer