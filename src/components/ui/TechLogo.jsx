import React from 'react'
import { TECH_ICONS } from '../../data/skills'

export default function TechLogo({ name, className = 'w-6 h-6' }) {
  const key = Object.keys(TECH_ICONS).find(k => name.includes(k) || k.includes(name))
  const iconUrl = key ? TECH_ICONS[key] : null
  if (iconUrl) {
    return <img src={iconUrl} alt={name} className={`${className} object-contain`} title={name} />
  }
  return null
}
