import React from 'react'
import Layout from '../components/layout'
// import Img from 'gatsby-image'
// import logo from '../images/svg_pics/naruci_icon_home.svg'

export default function login() {
    return (
        <Layout>
            <div className='Login'>
                <h2>LOGIN</h2>
                {/* <img src={logo} alt='user image' style={{color: 'black', backgroundColor: 'gray'}}/> */}
                <br />
                <br />

                <form action='/'>
                    <label>Username:</label> <input type='text' placeholder='Unesite ime' />
                    <br />
                    <label>Phone number:</label> <input type='text' placeholder='Unesite broj mobitela' />
                    <br />
                    <label>Password:</label> <input type='text' placeholder='Unesite lozinku' />
                    <br />
                    <br />
                    <br />
                    <br />
                    <a>CONFIRM</a>
                </form>
            </div>
        </Layout>
    )
}
