import React, { Component } from 'react'

import axios from '../../axios-orders'
import Order from '../../components/Order/Order'
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount(){
        // To fetch the orders
        axios.get('orders.json')
        .then(res => {
            const fetchedOrders = []
            // convert object response into an array
            for(let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                })
            }
            this.setState({
                loading: false,
                orders: fetchedOrders
            })
        })
        .catch(err => {
            this.setState({
                loading: false
            })
        })
    }
    render(){
        return (
            <div>
                <Order />
                <Order />
            </div>
        )
    }
}

export default ErrorHandler(Orders, axios)