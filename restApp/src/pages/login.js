import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
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
                    <label for = 'name'>Username:</label> <input name='name' type='text' placeholder='Unesite ime' />
                    <br />
                    <label for = 'phone'>Phone number:</label> <input name = 'phone' type='text' placeholder='Unesite broj mobitela' />
                    <br />
                    <label for = 'password'>Password:</label> <input name= 'password' type='text' placeholder='Unesite lozinku' />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Link to='/'>CONFIRM</Link>
                </form>
            </div>
        </Layout>
    )
}
