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
          <button style={{backgroundColor: 'orange'}}>Naruči</button>
          <button style={{backgroundColor: 'skyblue'}}>Rezerviraj</button>
      </div>
    </div>
  </Layout>

)

export default IndexPage
