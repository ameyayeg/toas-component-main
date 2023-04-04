import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

import { ToastContext } from '../ToastProvider'

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext)

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            id={toast.id}
          />
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
