import Card from "@/components/Card"
import styles from '../styles/Courses.module.scss'
import { gql } from "@apollo/client";
import { getApolloClient } from '../components/client';

export default function Courses({ categories }) {
  
  var items = []
  
  // This for loop goes through all the categories
  for (var i = 0; i < categories.length; i++) {
    
    
    if(categories[i].node.contentNodes.nodes.length > 0 && !(categories[i].node.name=='Uncategorized') ){ // category > one child and not uncategorized -> create card.
      
     // Sort courses in category i by menuOrder -- improve by simply chosing 0.
      let courses = categories[i].node.contentNodes.nodes
      let coursesToSort = [...courses]
      let sortedCourses = coursesToSort.sort(function(a,b){
        return a.menuOrder - b.menuOrder
      })
      //console.log(courses)

    items.push(
      <Card
        title={categories[i].node.name}
        img={categories[i].node.categoryImages.categoryImage.sourceUrl}
        body={categories[i].node.description}
        link={sortedCourses[0].uri} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
      />)
    }

  }


  return (
    <>
      <h1 className={styles.title}> Courses </h1>
      <h4 className={styles.subtitle}>simple coding lessons and tutorials</h4>
      <hr className={styles.sepparator} />
      <div className={styles.cards}>
        {items}
      </div>

    </>

  );
}



export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
        query GetCategoryData{
          categories {
            edges {
              node {
                id
                name
                slug
                description

                contentNodes (where: {contentTypes: COURSES}){
                  nodes {
                    slug
                    ... on Course {
                      id
                      title
                      menuOrder
                      slug
                      link
                      uri
                    }
                  }
                }

                categoryImages {
                  categoryImage {
                    sourceUrl
                  }
                }

              }

            }
          }
        }
      `
  });


  const categories = data?.data.categories.edges
  //const content = data?.data.courses.edges[0].node.content;


  return {
    props: {
      categories
    }
  }
}



