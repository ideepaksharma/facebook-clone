import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarRow.css"

function SidebarRow({ src, Icon, title }) { //Icon is component, thus Icon and not icon
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
