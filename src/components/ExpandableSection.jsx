import React from 'react'

function ExpandableSection({show, onClick, children}) {
  return (
    <div onClick={onClick} className=' overflow-hidden transition-all duration-500'>
        <div className={`relative ${show ? 'h-auto' : 'h-0'} transition-all duration-500`}>
            {children}
        </div>
    </div>
  )
}

export default ExpandableSection