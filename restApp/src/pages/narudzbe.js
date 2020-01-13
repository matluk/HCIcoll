import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default function narudzbe({ location }) {
    console.log(location.state.from)
    const { orderItems } = location.state
    let totalPrice = 0
    if (!!orderItems) {
        return (
            <Layout>
                <div className='Narudzbe'>

                    <ol className="items">
                    {
                        orderItems.map((val, i) => {
                        totalPrice += parseInt(val.price)
                        return (
                            <li>{` ${val.title} - Cijena: ${val.price}`}</li>
                        )})
                    }
                    </ol>
                    <br />
                    <br />
                    Ukupno: <b>{totalPrice} HRK</b>
                    <br />
                    <button>
                        <Link to="/" style={{textDecoration: "none", color: "black"}}>{"< Natrag"}</Link>
                    </button>
                    <button>
                        <Link to="/" style={{textDecoration: "none", color: "blue"}}>{"Naruci"} </Link>
                    </button>
                    
                </div>
            </Layout>
        )
    } else {
        return (
            <Layout>
                <div className='Narudzbe'>
                    <h4>Vasa kosarica je prazna!</h4>
                    <Link to='/'>{"< Natrag"}</Link>
                </div>

            </Layout>
        )
    }
}
