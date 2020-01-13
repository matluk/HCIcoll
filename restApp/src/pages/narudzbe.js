import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { element } from 'prop-types'

export default function narudzbe({ location }) {
    const { orderItems } = location.state
    let totalPrice = 0
    if (!!orderItems) {
        // izracunaj frekvencije svakog elementa narudzbe
        const countOrders = countElements(orderItems)
        return (
            <Layout>
                <div className='Narudzbe'>

                    <ol className="items">
                    {
                        // kreira pojedine narudzbe i ispisuje njihovo ime, cijenu i koliko komada narudzbe
                        Object.keys(countOrders).map(key => {
                            const countPrice = parseFloat(countOrders[key].price) * parseFloat(countOrders[key].count)
                            const price = countOrders[key].price
                            totalPrice += countPrice
                            return (
                                <li>{` ${key} - Cijena: ${price} - X ${countOrders[key].count}`}</li>
                            )
                        })
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

function countElements(array) {
    const result = {}
    for(let i=0; i < array.length; ++i) {
        const { title, price } = array[i]
        if (!result[title]) {
            result[title] = { price, count: 1}
        } else {
            result[title].count += 1
        }
    }

    return result
}
