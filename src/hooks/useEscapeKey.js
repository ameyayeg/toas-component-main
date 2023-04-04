import React from 'react'

const useEscapeKey = (key, callback) => {
  React.useEffect(() => {
    function escapeKey() {
      if (key === 'Escape') {
        callback()
      }
    }

    window.addEventListener('keydown', escapeKey)

    return () => {
      window.removeEventListener('keydown', escapeKey)
    }
  }, [key, callback])
}

export default useEscapeKey
