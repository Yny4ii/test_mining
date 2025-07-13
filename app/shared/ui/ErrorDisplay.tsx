import React from 'react'
import { AlertTriangle } from 'lucide-react'

interface ErrorDisplayProps {
  title?: string
  message: string
  description?: string
  variant?: 'default' | 'destructive'
}

const ErrorDisplay = ({
  title = 'Error',
  message,
  description,
  variant = 'destructive',
}: ErrorDisplayProps) => {
  const isDestructive = variant === 'destructive'

  return (
    <div
      className={`flex items-start gap-3 rounded-lg border p-4 ${
        isDestructive ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'
      }`}
    >
      <AlertTriangle
        className={`mt-0.5 h-5 w-5 ${isDestructive ? 'text-red-500' : 'text-gray-500'}`}
      />
      <div className="flex-1">
        <h3 className={`mb-2 font-medium ${isDestructive ? 'text-red-800' : 'text-gray-800'}`}>
          {title}
        </h3>
        <p className={`mb-2 text-sm ${isDestructive ? 'text-red-700' : 'text-gray-700'}`}>
          {message}
        </p>
        {description && (
          <p className={`text-xs ${isDestructive ? 'text-red-600' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default ErrorDisplay
