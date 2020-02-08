import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.css'

import naruci_img from '../images/svg_pics/naruci_icon_home_page_white.svg'
import rezerviraj_img from '../images/svg_pics/rezerviraj_icon_home.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="indexPage">
      <div className="indexPageContent">
          <Link to="/ponuda"><button style={{backgroundColor : '#FB902D'}}><img src={naruci_img}/><p>Naruči</p></button></Link>
          <Link to="/rezervacije"><button style={{backgroundColor : '#499FEE'}}><img src={rezerviraj_img}/><p>Rezerviraj</p></button></Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
