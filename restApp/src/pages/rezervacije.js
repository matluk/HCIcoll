import React from 'react'
import Layout from '../components/layout'
import calendarIcon from '../images/svg_pics/calendar_today-24px.svg'
import watchIcon from '../images/svg_pics/access_time-24px_gray.svg'
import bookIcon from '../images/svg_pics/menu_book-24px_page_gray.svg'

export default function rezervacije() {
    return (
        <Layout>
            <div className='Rezervacije'>
                <img src={bookIcon} />
                <form>
                    <label>Datum:</label><input type='date' />
                    <img src={calendarIcon} />
                    <br />
                    <label>Vrijeme:</label><input type='text' placeholder='Unesite vrijeme' />
                    <img src={watchIcon} />
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
