import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/CleverProgrammerr/&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="100%"
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
                title='cp' />
        </div>
    )
}

export default Widgets
