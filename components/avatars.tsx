import Image from 'next/image'

// Headshots are AI-generated (no real person, so no model release needed) and
// live in /public/headshots. Cropped from a single 2x2 grid supplied by Mike:
//   top-left  -> sarah    top-right    -> marcus
//   bottom-left -> denise  bottom-right -> arjun
export type PersonId = 'sarah' | 'denise' | 'marcus' | 'arjun'

export function Avatar({ person, size }: { person: PersonId; size: number }) {
  return (
    <Image
      src={`/headshots/${person}.jpg`}
      alt=""
      width={size}
      height={size}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  )
}
