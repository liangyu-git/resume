/**
 * Theme System Provider
 * Enhanced theme provider with configuration support
 */

'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemeProvider, type ThemeProviderProps } from 'next-themes'
import { getThemeConfig, getEnvironmentConfig } from './config'
import type { ThemeConfig } from './types'

interface EnhancedThemeContextType {
  config: ThemeConfig
   
  updateConfig: (updates: Partial<ThemeConfig>) => void
  resetConfig: () => void
}

const EnhancedThemeContext = createContext<EnhancedThemeContextType | undefined>(undefined)

interface EnhancedThemeProviderProps extends Omit<ThemeProviderProps, 'children'> {
  children: React.ReactNode
  initialConfig?: Partial<ThemeConfig>
}

/**
 * Enhanced theme provider with configuration management
 */
export function EnhancedThemeProvider({
  children,
  initialConfig,
  ...themeProviderProps
}: EnhancedThemeProviderProps) {
  const [config, setConfig] = useState<ThemeConfig>(() => {
    const envConfig = getEnvironmentConfig()
    return getThemeConfig({ ...envConfig, ...initialConfig })
  })

  const updateConfig = (updates: Partial<ThemeConfig>) => {
    setConfig(prevConfig => getThemeConfig({ ...prevConfig, ...updates }))
  }

  const resetConfig = () => {
    const envConfig = getEnvironmentConfig()
    setConfig(getThemeConfig(envConfig))
  }

  // Update config when environment changes
  useEffect(() => {
    const handleResize = () => {
      const envConfig = getEnvironmentConfig()
      updateConfig(envConfig)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const contextValue: EnhancedThemeContextType = {
    config,
    updateConfig,
    resetConfig,
  }

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={config.performance.reducedMotion}
      {...themeProviderProps}
    >
      <EnhancedThemeContext.Provider value={contextValue}>
        {children}
      </EnhancedThemeContext.Provider>
    </NextThemeProvider>
  )
}

/**
 * Hook to access enhanced theme configuration
 */
export function useThemeConfig() {
  const context = useContext(EnhancedThemeContext)
  
  if (context === undefined) {
    throw new Error('useThemeConfig must be used within an EnhancedThemeProvider')
  }
  
  return context
}

/**
 * Simple theme provider for basic usage
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemeProvider>
  )
}