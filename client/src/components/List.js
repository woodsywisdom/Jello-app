import React from 'react'
import '../styles/List.css'

const List = ({isOver, children}) => {
    const className = isOver ? "highlight-region" : "";

    return (
        <div className={`${className}`}>
            {children}
        </div>
    )
}

export default List;