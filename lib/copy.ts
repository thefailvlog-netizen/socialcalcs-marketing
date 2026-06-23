import { supabase } from './supabase'

export async function getCopy(key: string, fallback: string): Promise<string> {
  try {
    const { data, error } = await supabase
      .from('site_copy')
      .select('value')
      .eq('key', key)
      .single()
    if (error) {
      console.warn(`[getCopy] Supabase error for key "${key}":`, error.message)
    }
    return data?.value ?? fallback
  } catch (err) {
    console.warn(`[getCopy] Unexpected error for key "${key}":`, err)
    return fallback
  }
}
