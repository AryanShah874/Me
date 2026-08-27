import { useEffect, useRef, useState } from 'react'
import { tsParticles } from '@tsparticles/engine'
import { loadStarsPreset } from '@tsparticles/preset-stars'

// Registering the preset is idempotent-safe to call more than once, but we
// only need to do it the first time — cached at module scope.
let presetReady = null
const ensureStarsPreset = () => {
  if (!presetReady) {
    presetReady = loadStarsPreset(tsParticles).catch((err) => {
      presetReady = null
      throw err
    })
  }
  return presetReady
}

const DARK_OPTIONS = {
  preset: 'stars',
  fullScreen: { enable: false },
  background: { color: '#030308' },
  particles: {
    number: { value: 160 },
    paint: {
      fill: {
        // Weighted toward white, like real starlight — the rarer hot/cool
        // stars use the site's actual accent colors instead of generic tints.
        color: {
          value: [
            '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',
            '#0F94CD', '#0F94CD',
            '#FE5A10',
          ],
        },
      },
    },
    opacity: { value: { min: 0.2, max: 1 } },
  },
  detectRetina: true,
}

const LIGHT_OPTIONS = {
  preset: 'stars',
  fullScreen: { enable: false },
  // Transparent — the page's own gradient-mesh background shows through underneath.
  background: { color: 'transparent' },
  particles: {
    number: { value: 150 },
    paint: {
      fill: {
        // White would be invisible on a light background, so this leans on
        // the same two accent colors instead.
        color: { value: ['#0F94CD', '#FE5A10'] },
      },
    },
    opacity: { value: { min: 0.45, max: 0.9 } },
    size: { value: { min: 2, max: 4 } },
  },
  detectRetina: true,
}

const useIsDarkMode = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const target = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(target.classList.contains('dark'))
    })
    observer.observe(target, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return isDark
}

const Starfield = () => {
  const isDark = useIsDarkMode()
  const containerRef = useRef(null)

  useEffect(() => {
    let container
    let cancelled = false

    ensureStarsPreset()
      .then(() => {
        if (cancelled || !containerRef.current) return null
        return tsParticles.load({
          id: 'starfield',
          element: containerRef.current,
          options: isDark ? DARK_OPTIONS : LIGHT_OPTIONS,
        })
      })
      .then((loaded) => {
        if (cancelled) {
          loaded?.destroy()
        } else {
          container = loaded
        }
      })

    return () => {
      cancelled = true
      container?.destroy()
    }
  }, [isDark])

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" />
}

export default Starfield
