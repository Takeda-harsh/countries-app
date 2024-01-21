/* eslint-disable no-unused-vars */
import React from 'react'


function Header() {
   const toggleTheme = () => {
    const theme = document.querySelector('.theme')
    const header = document.querySelector('header')
    const input = document.querySelector('input')
    const select = document.querySelector('select')
    const details = document.querySelectorAll('.details')

    theme.addEventListener('click', () => {
        document.body.classList.toggle('light-mode')
        header.classList.toggle('light-mode')
        input.classList.toggle('light-mode')
        select.classList.toggle('light-mode')

        details.forEach((detail) => {
            detail.classList.toggle('light-mode')
        })
    })
   }
    return (
        <>
            <header>
                <div>
                    <h1>Where in the world?</h1>
                </div>
                <div className='theme' onClick={() => toggleTheme()}>
                    <i className="fas fa-moon"></i> Dark Mode
                </div>
                
            </header>
        </>
    )
}

export default Header