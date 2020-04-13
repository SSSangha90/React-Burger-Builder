import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDraw.css'

const sideDraw = (props) => {
    // ... animations
    return(
        <div className={classes.SideDraw}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDraw