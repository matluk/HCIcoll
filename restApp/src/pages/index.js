import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="indexPage">
      <div className="indexPageContent">
          <Link to="/ponuda"><button style={{backgroundColor: 'orange'}}>Naruči</button></Link>
          <Link to="/rezervacije"><button style={{backgroundColor: 'skyblue'}}>Rezerviraj</button></Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
