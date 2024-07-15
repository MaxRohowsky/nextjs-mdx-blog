import Client from './client';
import { projects } from '@/components/projects';
import Link from 'next/link';

export const metadata = {
  title: "Projects",
  description: "Portfolio Projects by Max on Tech"
}

// https://codepen.io/creativeocean/pen/JjemXGY

async function getCourses() {
  const response = await fetch(process.env.WORDPRESS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query getPosts($before: String, $after: String, $first: Int = null, $last: Int = null) {
          category(id: "dGVybToxNw=") {
            name
            children (first: $first, last: $last, before: $before, after: $after){
              nodes {
                name
                slug
                id
                description
                categoryImages {
                  categoryImage {
                    sourceUrl
                  }
                }
                courses(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 1) {
                  edges {
                    node {
                      id
                      uri
                      title
                      slug
                      menuOrder
                      link
                    }
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }
        }
      `,
      variables: {
        first: 18, // Use the updated first value for pagination
        after: null, // Use the updated after value for pagination
      },
    }),
  });

  const data = await response.json();

  const courses = data?.data?.category?.children?.nodes;
  const pageInfo = data?.data?.category?.children?.pageInfo;

  return { courses, pageInfo };
}


export default async function Courses() {

  const { courses, pageInfo } = await getCourses();

  return (


    <div className='grid gap-1 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] '>
      {projects.map((project) => (

        <div key={project.slug} className=" p-2 rounded-xl  w-full h-full bg-white dark:bg-slate-800">
          <Link href={`/blg/${project.slug}`} className="flex flex-col justify-between border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 p-6 w-full h-full">
            <h3 className="font-bold text-xl mb-2">{project.meta.title}</h3>
            <p className="text-sm text-gray-500">{project.meta.publishedOn}</p>
            <p className="py-4">{project.meta.abstract}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {project.meta.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer">Read more →</p>
          </Link>
        </div>

      ))}

    </div>



  );
}


