import React from 'react'
import { ThemeContextConsumer } from './themeContext'
import './style.css'

function Navbar() {
    return (
        <ThemeContextConsumer>
             {context => (
                <header className={`${context.theme}-theme`}>{context.theme === 'light' ? 'Light' : 'Dark'} Navbar</header>
            )}
        </ThemeContextConsumer>
    )
}

export default Navbar