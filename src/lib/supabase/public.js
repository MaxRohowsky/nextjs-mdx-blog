// Anon Key has less permissions than the service key
import { createClient } from '@supabase/supabase-js'

if (
  !process.env.SUPABASE_URL ||
  !process.env.SUPABASE_ANON_KEY
) {
  throw new Error('Missing env vars SUPABASE_URL or SUPABASE_ANON_KEY')
}

const publicClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default publicClient