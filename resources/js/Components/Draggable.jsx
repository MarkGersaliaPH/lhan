
import React from 'react'
import { useDrag } from 'react-dnd' 

/**
 * Your Component
 */
export default function Dragabble({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({ 
        type:"ITEM",
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}