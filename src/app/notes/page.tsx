import { createClient } from '@/app/lib/supabase';
import { cookies } from 'next/headers';

export default async function Notes() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: notes } = await supabase.from('notes').select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
