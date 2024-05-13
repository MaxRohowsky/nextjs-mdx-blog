/*
import supabase from '@/lib/supabase/private'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // `increment_views` is the name we assigned to the function in Supabase, and page_slug is the argument we defined.
    await supabase.rpc('view_increment', { page_slug: req.body.slug })
    return res.status(200).send('Success')
  } else {
    return res.status(400).send('Invalid request method')
  }
}

export default handler*/


import supabase from '@/lib/supabase/private'

export async function POST(req, res) {


  const request = await req.json()





  if (req.method === 'POST') {

    // `increment_views` is the name we assigned to the function in Supabase, and page_slug is the argument we defined.
    await supabase.rpc('view_increment', { page_slug: request.slug })
    //return res.status(200).send('Success')
  } else {
    return new Response("Hello world!");
    //return res.status(400).send('Invalid request method')
  }


  //return new Response("Hello world!");

  return new Response("Hello world!");
}

