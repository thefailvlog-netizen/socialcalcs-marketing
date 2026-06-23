import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

async function login(formData: FormData) {
  'use server'
  const password = formData.get('password') as string
  if (password === process.env.ADMIN_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set('admin_session', process.env.ADMIN_PASSWORD!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 8,
    })
  }
  redirect('/admin/copy')
}

async function saveCopy(formData: FormData) {
  'use server'
  const key = formData.get('key') as string
  const value = formData.get('value') as string

  await supabase
    .from('site_copy')
    .update({ value })
    .eq('key', key)

  revalidatePath('/')
  revalidatePath('/pricing')
  redirect('/admin/copy?saved=' + encodeURIComponent(key))
}

async function logout() {
  'use server'
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  redirect('/admin/copy')
}

export default async function AdminCopyPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>
}) {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  const isAuthed = session?.value === process.env.ADMIN_PASSWORD
  const { saved } = await searchParams

  if (!isAuthed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-sm">
          <h1 className="text-xl font-bold text-gray-900 mb-6">Admin — Copy Editor</h1>
          <form action={login} className="flex flex-col gap-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    )
  }

  const { data: rows } = await supabase
    .from('site_copy')
    .select('key, value')
    .order('key')

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Copy Editor</h1>
        <form action={logout}>
          <button type="submit" className="text-sm text-gray-400 hover:text-gray-600">
            Log out
          </button>
        </form>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm mb-6">
          Saved: <code className="font-mono">{saved}</code>. Live site updates within 60 seconds.
        </div>
      )}

      <div className="space-y-4">
        {(rows ?? []).map((row) => (
          <form key={row.key} action={saveCopy} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <input type="hidden" name="key" value={row.key} />
            <label className="block text-xs font-mono text-gray-400 mb-2">{row.key}</label>
            <textarea
              name="value"
              defaultValue={row.value}
              rows={row.value.length > 80 ? 3 : 1}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
            <button
              type="submit"
              className="mt-3 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
          </form>
        ))}
      </div>
    </div>
  )
}
