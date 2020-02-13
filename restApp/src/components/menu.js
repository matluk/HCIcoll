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
                    padding: '5px',
                    color: 'black',
                }}>
                        <Link to="/"><p2>RestApp</p2></Link>
                </li>

                <li onClick={ this.handleMenuItemClick } id={ this.state.activeItem === 'Home' ? 'selected' : ''}>        <Link to='/'><img src={homeIcon} alt='home icon'/></Link></li>
                <li onClick={ this.handleMenuItemClick } id={ this.state.activeItem === 'Login' ? 'selected' : ''}>       <Link to="/login"><p1 className = 'hov'>Login</p1></Link></li>
                <li onClick={ this.handleMenuItemClick } id={ this.state.activeItem === 'Ponuda' ? 'selected' : ''}>      <Link to="/ponuda"><p1 className = 'hov'>Ponuda</p1></Link></li>
                <li onClick={ this.handleMenuItemClick } id={ this.state.activeItem === 'Narudzbe' ? 'selected' : ''}>    <Link to="/narudzbe"><p1 className = 'hov'>Narudzbe</p1></Link></li>
                <li onClick={ this.handleMenuItemClick } id={ this.state.activeItem === 'Rezervacije' ? 'selected' : ''}> <Link to="/rezervacije"><p1 className = 'hov'>Rezervacije</p1></Link></li>
            </ul>
        </div>
    )}
}

export default Menu
