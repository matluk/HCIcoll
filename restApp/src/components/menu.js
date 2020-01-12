import React from 'react'
import Link from 'gatsby-link'
import homeIcon from '../images/svg_pics/icon.svg'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeItem: ''}
    }

    handleMenuItemClick = event => {
        this.setState({ activeItem: event.target.innerHTML})
    }

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

                <li onClick={ this.handleMenuItemClick } id={ this.state.activeItem === 'Home' ? 'selected' : ''}>        <Link to='/'><img src={homeIcon} alt='home icon'/></Link></li>
                <li onClick={ this.handleMenuItemClick } id={ this.state.activeItem === 'Login' ? 'selected' : ''}>       <Link to="/login">Login</Link></li>
                <li onClick={ this.handleMenuItemClick } id={ this.state.activeItem === 'Ponuda' ? 'selected' : ''}>      <Link to="/ponuda">Ponuda</Link></li>
                <li onClick={ this.handleMenuItemClick } id={ this.state.activeItem === 'Narudzbe' ? 'selected' : ''}>    <Link to="/narudzbe">Narudzbe</Link></li>
                <li onClick={ this.handleMenuItemClick } id={ this.state.activeItem === 'Rezervacije' ? 'selected' : ''}> <Link to="/rezervacije">Rezervacije</Link></li>
            </ul>
        </div>
    )}
}

export default Menu
