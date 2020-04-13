import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDraw'

class Layout extends Component {
    state = {
        showSideDraw: true
    }
    sideDrawClosedHandler = () => {
        this.setState({
            showSideDraw: false
        })
    }

    render(){
        return (
            <Aux>
                <Toolbar />
                <SideDrawer 
                    open={this.state.showSideDraw} 
                    closed={this.sideDrawClosedHandler}/>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
            </Aux>
        )
    }
}

export default Layout
