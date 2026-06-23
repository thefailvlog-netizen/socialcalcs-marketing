import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the supabase module before importing copy.ts
vi.mock('./supabase', () => ({
  supabase: {
    from: vi.fn(),
  },
}))

import { getCopy } from './copy'
import { supabase } from './supabase'

describe('getCopy', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns the value from Supabase when key exists', async () => {
    const mockFrom = {
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: { value: 'Hello world' }, error: null }),
    }
    vi.mocked(supabase.from).mockReturnValue(mockFrom as any)

    const result = await getCopy('hero.headline', 'Fallback text')
    expect(result).toBe('Hello world')
  })

  it('returns the fallback when key does not exist', async () => {
    const mockFrom = {
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: null, error: { message: 'Not found' } }),
    }
    vi.mocked(supabase.from).mockReturnValue(mockFrom as any)

    const result = await getCopy('hero.headline', 'Fallback text')
    expect(result).toBe('Fallback text')
  })

  it('returns the fallback when Supabase throws', async () => {
    const mockFrom = {
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockRejectedValue(new Error('Network error')),
    }
    vi.mocked(supabase.from).mockReturnValue(mockFrom as any)

    const result = await getCopy('hero.headline', 'Fallback text')
    expect(result).toBe('Fallback text')
  })
})
