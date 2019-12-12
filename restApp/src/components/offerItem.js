import React, { Component } from 'react'
import Img from 'gatsby-image'

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
                    <button>Dodaj u kosaricu</button>

                </div>
            </div>
        )
    }
}
