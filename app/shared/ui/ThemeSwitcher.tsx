'use client'
import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@/app/shared/ui/Switch'
import { Moon, Sun } from 'lucide-react'
import Skeleton from './Skeleton'

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const handleChangeTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  if (!mounted) return <Skeleton className="h-11.5 w-49.25" />
  return (
    <div className="bg-card flex items-center gap-3 rounded-lg border p-3">
      <Sun className="h-4 w-4 text-yellow-500" />
      <Switch checked={theme === 'dark'} onCheckedChange={handleChangeTheme} />
      <Moon className="h-4 w-4 text-blue-500" />
      <span className="text-sm font-medium">{theme === 'dark' ? 'Dark' : 'Light'} Mode</span>
    </div>
  )
}

export default ThemeSwitcher
