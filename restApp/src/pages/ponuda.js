import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import OfferItem from '../components/offerItem'
// import OrderPanel from '../components/orderPanel'

export default class ponuda extends Component {
    constructor(props) {
        super(props)
        this.state = {orderItems: [], searchValue: ''}
    }


    // gets orderObject from OfferItem component when clicked
    handleClick = orderObject =>{
        console.log(orderObject)
        const { orderItems } = this.state
        orderItems.push(orderObject)
        this.setState({orderItems})
    }

    handleSearchChange = event => {
        this.setState({ searchValue: event.target.value })
        this.searchOfferComponents()
    }

    searchOfferComponents = postsArr => {
        const regexString = new RegExp(`^${this.state.searchValue}.*$`, 'i')
        if (postsArr === undefined) return []
        const filteredPosts = postsArr.filter(post => {
            return post.node.frontmatter.title.search(regexString) !== -1
        })
        return filteredPosts
    }

    render() {
        const data = this.props.data.allMarkdownRemark.edges
        const postsArr = this.searchOfferComponents(data)        
        const { currentPage, numPages } = this.props.pageContext
        const { orderItems } = this.state
        return (
            <Layout>

            <div className='Ponuda'>
                <h1>Naša ponuda:</h1>
                <hr />
                <input 
                    id="search-field"
                    type="text"
                    placeholder="Pretraga..."
                    name="pretragaField"
                    value={this.state.searchValue}
                    onChange={this.handleSearchChange}
                />
                <div className='display'>
                    <ul id='fuckme'>
                        {orderItems.map(elem => {
                            console.log(elem)
                            return (
                                <li><h5>{elem.title}</h5>: {elem.price}</li>
                            )
                        })}
                    </ul>
                    <Link to='/narudzbe' state={{orderItems, from: '/ponuda'}}>Naruci</Link>

                    {postsArr.map(post => {
                        const id = post.node.id
                        const { title, path, price } = post.node.frontmatter
                        if (price < 0) return ''
                        const imgFluid = post.node.frontmatter.featuredImage.childImageSharp.fluid
                        
                        return (
                            <OfferItem
                                key={post.node.fields.slug || id}
                                id={id} 
                                title={title} 
                                price={price} 
                                postUrl={path || ''}
                                imgFluid={imgFluid}
                                handleClick={this.handleClick}/>
                        )
                    })}
                    <br />
                    <br />
                    {Array.from({ length: numPages }, (_, i) => (
                      <Link 
                        key={`pagination-number${i + 1}`} 
                        to={`ponuda/${i === 0 ? "/" : i + 1}`}
                        >
                        {i + 1}
                      </Link>
                    ))}
                </div>
            </div>
            
        </Layout>
        )
    }
}

export const pageQuery = graphql`
    query OfferIndexAndSearchQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title], order: DESC }
          limit: $limit
          skip: $skip
        ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  path
                  title
                  featuredImage {
                      childImageSharp {
                          fluid(maxWidth: 300) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  price
                }
              }
            }
          }
    }
`
