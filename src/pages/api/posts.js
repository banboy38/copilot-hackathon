// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ipddesjrbptlujlftfln.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwZGRlc2pyYnB0bHVqbGZ0ZmxuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzUyODUwMywiZXhwIjoyMDQzMTA0NTAzfQ.BQY-wSAfMwWfw9WpQzOnB9Q9MShgzoI9KlM4kzFij_E')

export default async function handler(req, res) {
  // console.log(req.body);

  let proposals = await supabase.from('Proposals').select()  
  console.log(proposals);
  console.log(Date.UTC());
  
  
  res.status(200).json({data: proposals})
}
