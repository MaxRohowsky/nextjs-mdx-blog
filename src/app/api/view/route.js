import supabase from '@/lib/supabase/private'

export async function POST(req, res) {
  const request = await req.json()

  if (req.method === 'POST') {
    // Call the stored procedure to increment the view count
    await supabase.rpc('view_increment', { page_slug: request.slug })
  }
}