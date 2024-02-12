import React, { useState } from 'react'

function Sidebarmenu({item}) {
    
    const [open, setOpen] = useState(false);

    if(item.options){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                <a href="#" class="sidebar-link">
                        { item.icon && <img src={item.icon} width={25} /> }
                        <span>{item.title}</span>
                    </a>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    { item.options.map((child, index) => <Sidebarmenu key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <div className="sidebar-title">
            <a href={item.path || "#"} className="sidebar-link">
                { item.icon && <img src={item.icon} width={25} /> }
                <span>{item.title}</span>
            </a>
            </div>
        )
    }
    
}

export default Sidebarmenu