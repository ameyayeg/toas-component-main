import React from 'react'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'

import { ToastContext } from '../ToastProvider'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ message, variant, id }) {
  const Icon = ICONS_BY_VARIANT[variant]

  const { handleDismiss } = React.useContext(ToastContext)

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}></div>
      <Icon size={24} />
      <p className={styles.content}>
        {message}
        <VisuallyHidden>{variant} -</VisuallyHidden>
      </p>
      <button
        onClick={() => handleDismiss(id)}
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  )
}

export default Toast
