import supabase from '@/lib/supabase/private'

export async function POST(req) {
  const request = await req.json()

  let slug = request.slug
  console.log('request', slug)

  await supabase.rpc('view_increment', { page_slug: request.slug })

  return Response.json({ data: 'success' })
}