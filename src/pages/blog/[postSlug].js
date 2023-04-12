import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql } from "@apollo/client";
import { getApolloClient } from '../../components/client';
import Socials from '@/components/Socials';
import Sidebar from '@/components/Sidebar';



export default function Course({ post, site }) {
  console.log(post)
  console.log(site)
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`Read more about ${post.title} on ${site.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
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
