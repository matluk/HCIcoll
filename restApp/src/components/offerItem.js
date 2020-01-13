import React, { Component } from 'react'
import Img from 'gatsby-image'
import cartIcon from '../images/svg_pics/shopping-cart.svg'

export default class OfferItem extends Component {
    constructor(props) {
        super(props)
        this.state = {isActive: true}
    }

    orderClick(e) {
        const orderObject = {
            id: this.props.id,
            title: this.props.title,
            price: this.props.price
        }
        this.props.handleClick(orderObject)
    }

    render() {
        if (this.state.isActive) {
            return (
                <div className='OfferItem' key={this.props.key}>
                    {<Img fluid={this.props.imgFluid} /> || undefined}
                    <div className='item-info'>
                        <h3>{this.props.title}</h3>
                        <br />
                        <br />
                        <b>Cijena: {this.props.price}</b>
                        <img src={cartIcon} style={{cursor: 'pointer'}} onClick={this.orderClick.bind(this)} alt="Order button"/>
                    </div>
                </div>
        )} else {
            return (
                null
            )
        }

    }
}
