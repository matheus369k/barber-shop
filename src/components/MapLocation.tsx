'use client'

import maplibregl, { type LngLatLike } from 'maplibre-gl'
import { useEffect } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'

export function MapLocation() {
  useEffect(() => {
    const LngLat: LngLatLike = [-77.04, 38.907]
    const map = new maplibregl.Map({
      container: 'map',
      style: `https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_GEO_MAP_KEY}`,
      center: LngLat,
      zoom: 11.15,
      attributionControl: false,
    })

    const marker = new maplibregl.Marker().setLngLat(LngLat).addTo(map)
  }, [])

  return (
    <div
      id='map'
      className='h-[44rem] min-sm:h-[37.5rem] min-lg:h-[28.125rem] w-full'
    />
  )
}
