import React from 'react'
import useEscapeKey from '../../hooks/useEscapeKey'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Oh no!',
      variant: 'error',
    },
    {
      id: crypto.randomUUID(),
      message: 'Logged in',
      variant: 'success',
    },
  ])

  function createToast(message, variant, setMessage, setVariant, e) {
    e.preventDefault()
    const newToast = {
      message,
      variant,
      id: crypto.randomUUID(),
    }

    setToasts((currentToasts) => [...currentToasts, newToast])

    setMessage('')
    setVariant('notice')
  }

  function handleDismiss(id) {
    setToasts((currentVal) => currentVal.filter((val) => val.id !== id))
  }

  useEscapeKey('Escape', () => {
    setToasts([])
  })

  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, createToast, handleDismiss }}
      r
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
