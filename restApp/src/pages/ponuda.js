import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import OfferItem from '../components/offerItem'

export default class ponuda extends Component {
    constructor(props) {
        super(props)
        this.state = {orderItems: [], searchValue: ''}
    }

    handleClick = (titleOfItem) =>{
        console.log(titleOfItem)
        const { orderItems } = this.state.orderItems
        orderItems.push(titleOfItem)
        this.setState({
            orderItems: orderItems
        })
        console.log(this.state.orderItems)
    }

    handleSearchChange = event => {
        this.setState({searchValue: event.target.value})
    }

    searchOfferComponents = postsArr => {
        const regexString = new RegExp(`^${this.state.searchValue}.*$`, 'i')
        const filteredPosts = postsArr.filter(post => {
            return post.node.frontmatter.title.search(regexString) !== -1
        })
        return filteredPosts
    }

    render() {
        const { data } = this.props
        const postsArr = this.searchOfferComponents(data.allMarkdownRemark.edges)
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

                    {postsArr.map(post => {
                        const { id } = post.node.id
                        const { title, path, price } = post.node.frontmatter
                        const imgFluid = post.node.frontmatter.featuredImage.childImageSharp.fluid
                        
                        return (
                            <OfferItem 
                                key={id} 
                                title={title} 
                                price={price} 
                                postUrl={path}
                                imgFluid={imgFluid}
                                handleClick={this.handleClick}/>
                        )
                    })}

                </div>
            </div>
        </Layout>
        )
    }
}

export const pageQuery = graphql`
    query OfferIndexAndSearchQuery {
        allMarkdownRemark {
            edges {
              node {
                id
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
