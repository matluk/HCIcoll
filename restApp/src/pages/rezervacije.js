import React from 'react'
import Layout from '../components/layout'

export default function rezervacije() {
    return (
        <Layout>
            <div className='Rezervacije'>
                <form>
                    <label>Datum:</label><input type='date' />
                    <br />
                    <label>Vrijeme:</label><input type='text' placeholder='Unesite vrijeme' />
                    <br />
                    <br />
                    <label>Broj osoba:</label>
                    <br />
                    <input type='range' min='1' max='10' className='slider'/>
                    <br />
                    <br />
                    <label>Dodatni zahtjevi:</label>
                    <br />
                    <input type='text' placeholder='Unesite tekst' />
                    <br />
                    <br />
                    <button>Back</button>
                    <button>Rezerviraj</button>
                </form>
            </div>
        </Layout>
    )
}
