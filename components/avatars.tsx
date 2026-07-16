// Placeholder headshots for the demo personas.
// To swap in real photos, replace the <svg> body of a component with:
//   <img src="/headshots/<name>.jpg" alt="" width={68} height={68}
//        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
// Photos must be licensed for commercial use with a model release — the personas
// are fictional, so an unreleased stock face would be depicting a real person as
// a licensed broker they are not.

export function AvatarSarah() {
  return (
    <svg viewBox="0 0 68 68" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="34" cy="34" r="34" fill="#E8EDF8" />
      <ellipse cx="34" cy="20" rx="16" ry="14" fill="#7B4F2E" />
      <rect x="18" y="24" width="4" height="18" rx="2" fill="#7B4F2E" />
      <rect x="46" y="24" width="4" height="18" rx="2" fill="#7B4F2E" />
      <ellipse cx="34" cy="30" rx="13" ry="14" fill="#F5C9A0" />
      <ellipse cx="29" cy="28" rx="2" ry="2.2" fill="#3B2314" />
      <ellipse cx="39" cy="28" rx="2" ry="2.2" fill="#3B2314" />
      <path d="M29 35 Q34 39 39 35" stroke="#C47A5A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <ellipse cx="34" cy="62" rx="18" ry="10" fill="#2952CC" />
    </svg>
  )
}

export function AvatarMarcus() {
  return (
    <svg viewBox="0 0 68 68" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="34" cy="34" r="34" fill="#EAF0F8" />
      <ellipse cx="34" cy="19" rx="14" ry="11" fill="#1A1A1A" />
      <ellipse cx="34" cy="31" rx="13" ry="14" fill="#8D5524" />
      <ellipse cx="29.5" cy="28.5" rx="1.8" ry="2" fill="#1A1A1A" />
      <ellipse cx="38.5" cy="28.5" rx="1.8" ry="2" fill="#1A1A1A" />
      <path d="M29 36 Q34 40 39 36" stroke="#6B3A1F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <ellipse cx="34" cy="62" rx="18" ry="10" fill="#6E4FE0" />
    </svg>
  )
}

export function AvatarPriya() {
  return (
    <svg viewBox="0 0 68 68" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="34" cy="34" r="34" fill="#F5EEF8" />
      <ellipse cx="34" cy="19" rx="15" ry="13" fill="#1C1008" />
      <rect x="17" y="22" width="4" height="22" rx="2" fill="#1C1008" />
      <rect x="47" y="22" width="4" height="22" rx="2" fill="#1C1008" />
      <ellipse cx="34" cy="31" rx="13" ry="13.5" fill="#C68642" />
      <ellipse cx="29.5" cy="28.5" rx="1.8" ry="2" fill="#1C1008" />
      <ellipse cx="38.5" cy="28.5" rx="1.8" ry="2" fill="#1C1008" />
      <path d="M29 36 Q34 40 39 36" stroke="#A0522D" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <ellipse cx="34" cy="62" rx="18" ry="10" fill="#0E7C86" />
    </svg>
  )
}
