import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import OfferItem from '../components/offerItem'

export default function ponuda( { data } ) {
    return (
        <Layout>
            <div className='Ponuda'>
                <h1>Naša ponuda:</h1>
                <hr />
                <div className='display'>

                    {data.allMarkdownRemark.edges.map(post => {
                        const { id } = post.node.id
                        const { title, path, price } = post.node.frontmatter
                        const imgFluid = post.node.frontmatter.featuredImage.childImageSharp.fluid
                        
                        return (
                            <OfferItem 
                                key={id} 
                                title={title} 
                                price={price} 
                                postUrl={path}
                                imgFluid={imgFluid}/>
                        )
                    })}

                </div>
            </div>
        </Layout>
    )
}


export const pageQuery = graphql`
    query OfferIndexQuery {
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