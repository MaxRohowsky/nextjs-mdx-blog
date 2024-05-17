
import supabase from '@/lib/supabase/public'
import Client from './client.js'

export const revalidate = 60

export default async function Component() {


  let { data: ana, error } = await supabase
    .from('ana')
    .select('views')
    .eq('slug', '/example')

    
  //console.log(ana)
  //console.log("Data: ", ana[0].views)

  
  return (
    <div>
      <Client/>
 

      {/*  <pre>{JSON.stringify(posts, null, 2)}</pre>  {views} {views.length === 1 ? 'view' : 'views'}*/}
    </div>
  )
}
