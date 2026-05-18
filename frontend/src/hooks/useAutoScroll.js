/**
 * hooks/useAutoScroll.js
 * Automatically scrolls a ref'd element to the bottom whenever `deps` change.
 */

import { useEffect, useRef } from 'react'

export function useAutoScroll(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
