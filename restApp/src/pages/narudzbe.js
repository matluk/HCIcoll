import React from 'react'
import Layout from '../components/layout'

export default function narudzbe() {
    return (
        <Layout>
            <div className='Narudzbe'>
                
                <form action='/'>
                    <input type="checkbox" name="order-1" value="" /> Spaghetti bolognese - Cijena: 45kn  - X1<br />
                    <input type="checkbox" name="order-1" value="" /> Tuna steak - Cijena: 90kn  - X1<br />
                    <input type="checkbox" name="order-1" value="" /> Cevapcici uz pomfrit - Cijena: 50kn  - X1<br />
                    Ukupno: 185HRK
                    <br />
                    <input type='button' value='<Back'></input>
                    <input type='button' value='Naruci'></input>
                </form>
            </div>
        </Layout>
    )
}
