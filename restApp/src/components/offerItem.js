import React, { Component } from 'react'
import Img from 'gatsby-image'
import cartIcon from '../images/svg_pics/shopping-cart.svg'

export default class OfferItem extends Component {
    render() {
        return (
            <div className='OfferItem' key={this.props.key}>
                <Img fluid={this.props.imgFluid} />
                <div className='item-info'>

                    <h3>{this.props.title}</h3>
                    <br />
                    <br />
                    <b>Cijena: {this.props.price}</b>
                    <img src={cartIcon} style={{cursor: 'pointer'}}/>
                </div>
            </div>
        )
    }
}
