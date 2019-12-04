import React from 'react'
import Link from 'gatsby-link'

class Menu extends React.Component {
    state = { activeItem: 'home'}
    menuNames = ['Home', 'Login', 'Ponuda', 'Narudzbe', 'Rezervacije', 'Blog']

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <div className="menu">
            <ul>
                <li style={{
                    marginRight: '70px',
                    backgroundColor: 'rgb(165, 99, 44)',
                    padding: '5px',
                }}>
                        <Link to="/">RestApp</Link>
                </li>

                <li style={{backgroundColor: 'skyblue'}}><Link to="/login">Login</Link></li>
                <li><Link to="/ponuda">Ponuda</Link></li>
                <li><Link to="/narudzbe">Narudzbe</Link></li>
                <li><Link to="/rezervacije">Rezervacije</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    )}
}

class MenuItem extends React.Component {

}

export default Menu
