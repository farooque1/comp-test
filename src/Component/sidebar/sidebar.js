// Sidebar.js
import React from "react";
import SidebarItem from "./sidebaritem";
import items from "./data.json";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            {items.map((item, index) => (
                <SidebarItem key={index} item={item} />
            ))}
        </div>
    );
}
