 
import "@/styles/highlight-js/github-dark-dimmed.css";


export default async function MdxLayout({
  children
}: {
  children: React.ReactNode
}) {




    return(


    <>

      <div className='max-w-full flex flex-col  items-center '>


        <article className='text-pretty max-w-xl ' >
          {children}
        </article>



      </div>

    </>
  )
}
