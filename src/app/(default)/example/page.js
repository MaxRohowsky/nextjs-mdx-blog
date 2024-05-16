
// https://www.youtube.com/watch?v=6Sb8R1PYhTY
import supabase from '@/lib/supabase/public'
import { createClient } from '@supabase/supabase-js'
import Client from './client.js'
//import {createBrowserClient}  from "@supabase/ssr";
//import { useEffect, useState } from 'react'

//import supabase from '@/lib/supabase/private'
export const revalidate = 5
// https://maxleiter.com/blog/supabase-next-analytics
export default async function Component() {
  // You may want to pass in an initial value for views if you're using getStaticPaths or similar.
  // That way, it won't start at 0 when the client loads.
  //const [views, setViews] = useState(0)

  // Subscribe to view updates.
  // Note that `id` is something I store manually on page creation so I can associate
  // each page with itself from the DB.
  // In practice, I recommend looking into subscribing to low level changes:
  // https://supabase.com/docs/reference/javascript/subscribe#listening-to-row-level-changes
  //const supabase = createBrowserClient("https://bekowpfzavpgpymlsdgp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJla293cGZ6YXZwZ3B5bWxzZGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NjAwOTUsImV4cCI6MjAzMTAzNjA5NX0.JWJWrKdA1o_1gcB4LZbqRid4nJjRrK_gGPJQjbuzqgA")
  //console.log("Supabase: ", supabase)


  // const supabase = createClient('https://bekowpfzavpgpymlsdgp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJla293cGZ6YXZwZ3B5bWxzZGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NjAwOTUsImV4cCI6MjAzMTAzNjA5NX0.JWJWrKdA1o_1gcB4LZbqRid4nJjRrK_gGPJQjbuzqgA')

  /*
  useEffect(() => {
    const chan =  supabase
    .channel('analytics')
    .on('postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'analytics'
      }, (payload) => console.log(payload))
    .subscribe()

    return () => {
      chan.unsubscribe()
    }

  }, [])*/


  //const {data2: analytics} = await supabase.from('analytics').select()

  //console.log("Data2: ", analytics)




  /*
  const { data, error } = await supabase
    .from('analytics')
    .select('slug')

  console.log("Error: ", error)
  console.log("Data: ", data)

  


  supabase
    .channel('analytics')
    .on('UPDATE', (payload) => {
      //console.log("Payload: ")
      //console.log("Payload: ", payload)
      //setViews(payload.new.views)

      console.log("Payload: ", payload)

    })*/

  //const { data: posts } = await supabase.from('posts').select()
  //console.log("Data: ", posts)

  //const { data: analytics2 } = await supabase.from('analytics').select()
  //console.log("Data: ", analytics2)


  let { data: ana, error } = await supabase
    .from('ana')
    .select('views')
    .eq('slug', '/example')

  //useEffect(() => {
    
  console.log(ana)
  console.log("Data: ", ana[0].views)

  //setViews(ana[0].views)

  

  //}
  
  //, [])


  


  /*
useEffect(() => {
  const getViews = async () => {
    const { data } = await supabase.from('analytics').select();
    setData(data)
  }
  getViews()
}, [])
<pre>{JSON.stringify(ana, null, 2)}</pre>  {views} {views.length === 1 ? 'view' : 'views'}


console.log("Data: ", data)*/



  return (
    <div>
      <Client />

      {/*  <pre>{JSON.stringify(posts, null, 2)}</pre>  {views} {views.length === 1 ? 'view' : 'views'}*/}
    </div>
  )
}
