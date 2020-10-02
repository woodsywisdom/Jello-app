import React from 'react'
import {useDrop} from "react-dnd"
import {ITEM_TYPE} from "./Card"


const DropWrapper = ({ onDrop, children, listId}) => {
    const [{isOver}, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            return true
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, listId);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })

    return(
        <div ref={drop} className={"drop-wrapper"}>
            {React.cloneElement(children,{isOver})}
        </div>
    )
}

export default DropWrapper
