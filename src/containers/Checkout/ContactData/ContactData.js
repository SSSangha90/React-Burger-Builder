import React, { Component } from 'react'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postcode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Sukhi Sangha',
                address: {
                    street: 'Test Road',
                    postCode: 'SL1',
                    country: 'UK'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'Prime'
        }
        axios.post('/orders.json', order)
        .then(res => {
            this.setState({ loading: false })
            this.props.history.push('/')
        })
        .catch(err => this.setState({ loading: false }))
    }

    render (){
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="text" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postcode" placeholder="Postcode" />
                <Button 
                    clicked={this.orderHandler}
                    btnType="Success"
                    >ORDER
                </Button>
            </form>
        )
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact details</h4>
                {form}
            </div>
        )
    }
}

export default ContactData