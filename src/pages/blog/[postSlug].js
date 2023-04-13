import Head from 'next/head'
import Link from 'next/link'
import { gql } from "@apollo/client";
import { getApolloClient } from '../../components/client';
//import Socials from '@/components/Socials';
import styles from '../../styles/Blog.module.scss'



export default function Course({ post, site }) {

  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`Read more about ${post.title} on ${site.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {post.title}
        </h1>

        <div>
          <div dangerouslySetInnerHTML={{
            __html: post.content
          }} />
        </div>

        <p>
          <Link href="/">
              Back to home
          </Link>
        </p>
      </main>
    </div>
  )
}


export async function getStaticProps({ params = {} } = {}) {
  const { postSlug } = params; // the params contains the slug and since the page is called [course] the const here needs to be called course too.
  const apolloClient = getApolloClient();



  const data = await apolloClient.query({
    /* Remember that name = slug */
    query: gql`
      query PostBySlug($slug: String!) {
        generalSettings {
          title
        }
        postBy(slug: $slug) {
          id
          content
          title
          slug
      }
    }`,
    variables: {
      slug: postSlug
    }
  });

  const post = data?.data.postBy;

  if (!post) {
    return {
      props: {},
      notFound: true
    }
  }

  const site = {
    ...data?.data.generalSettings
  }

  return {
    props: {
      post,
      site
    }
  }


}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
