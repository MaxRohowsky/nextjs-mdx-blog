'use client'
import { usePathname } from 'next/navigation'

export default function Sidebar() {


  const pathname = usePathname()
  const slug = pathname.split('/').pop()

  console.log("pathname", slug)


    return(

        <aside className='flex sticky top-11 '>
        <nav className=" ">
          <h2 className="uppercase">Table of Contents</h2>
          <ul className='list-none'>
            <li><a href='#'>First</a></li>
            <li><a href='#'>Second</a></li>
            <li><a href='#'>Third</a></li>
            <li><a href='#'>Fourth</a></li>
          </ul>
        </nav>

      </aside>


    )


}