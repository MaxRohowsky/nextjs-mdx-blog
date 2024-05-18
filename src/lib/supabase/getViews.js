'use server'
import supabase from '@/lib/supabase/public'

export default async function getViews() {
    let { data: views, error } = await supabase
      .from('ana')
      .select('slug, views', { 'cache': false });
  
    if (error) {
      views = [];
    }

    return views;
  }