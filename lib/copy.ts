import { supabase } from './supabase'

export async function getCopy(key: string, fallback: string): Promise<string> {
  try {
    const { data } = await supabase
      .from('site_copy')
      .select('value')
      .eq('key', key)
      .single()
    return data?.value ?? fallback
  } catch {
    return fallback
  }
}
