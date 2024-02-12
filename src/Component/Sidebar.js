import React, { useState } from "react";
import { dashboard } from "../Component/Jsondata";
import Vector from "../logo.svg"; // Import the SVG icon
import Sidebarmenu from "./Sidebarmenu";
import dash from '../Component/image/Dashboard Icn.png'


function Sidepanel() {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleSidebar = () => {
    setIsExpanded((prevState) => !prevState);
  };
  

  return (
    <>
      <aside id="sidebar" className={`bg ${isExpanded ? "expand" : ""}`}>
        <div className="d-flex">
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <i className="lni lni-grid-alt"></i>
          </button>
          <div className="sidebar-logo">
            <a href="#">Dashboard</a>
          </div>
        </div>
        {dashboard.Sidebar.map((item, index) => ( 
        <Sidebarmenu key={index} item={item}  />
        ))}
      </aside>
    </>
  );
}

export default Sidepanel;


// import React, { useState } from 'react';
// import Main from './Main';

// function Sidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const toggleSidebar = () => {
//     setIsExpanded(prevState => !prevState);
//   };

//   return (
//     <>
//       <aside id="sidebar" className={`bg-dark ${isExpanded ? 'expand' : ''}`}>
//         <div className="d-flex">
//           <button className="toggle-btn" type="button" onClick={toggleSidebar}>
//             <i className="lni lni-grid-alt"></i>
//           </button>
//           <div className="sidebar-logo">
//             <a href="#">Code</a>
//           </div>
//         </div>
//         <ul class="sidebar-nav">
//                 <li class="sidebar-item">
//                     <a href="#" class="sidebar-link">
//                         <i class="lni lni-user"></i>
//                         <span>Profile</span>
//                     </a>
//                 </li>
//                 <li class="sidebar-item">
//                     <a href="#" class="sidebar-link">
//                         <i class="lni lni-agenda"></i>
//                         <span>Task</span>
//                     </a>
//                 </li>
//                 <li class="sidebar-item">
//                     <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
//                         data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
//                         <i class="lni lni-protection"></i>
//                         <span>Auth</span>
//                     </a>
//                     <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
//                         <li class="sidebar-item">
//                             <a href="#" class="sidebar-link">Login</a>
//                         </li>
//                         <li class="sidebar-item">
//                             <a href="#" class="sidebar-link">Register</a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li class="sidebar-item">
//                     <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
//                         data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
//                         <i class="lni lni-layout"></i>
//                         <span>Multi Level</span>
//                     </a>
//                     <ul id="multi" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
//                         <li class="sidebar-item">
//                             <a href="#" class="sidebar-link collapsed" data-bs-toggle="collapse"
//                                 data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
//                                 Two Links
//                             </a>
//                             <ul id="multi-two" class="sidebar-dropdown list-unstyled collapse">
//                                 <li class="sidebar-item">
//                                     <a href="#" class="sidebar-link">Link 1</a>
//                                 </li>
//                                 <li class="sidebar-item">
//                                     <a href="#" class="sidebar-link">Link 2</a>
//                                 </li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
//                 <li class="sidebar-item">
//                     <a href="#" class="sidebar-link">
//                         <i class="lni lni-popup"></i>
//                         <span>Notification</span>
//                     </a>
//                 </li>
//                 <li class="sidebar-item">
//                     <a href="#" class="sidebar-link">
//                         <i class="lni lni-cog"></i>
//                         <span>Setting</span>
//                     </a>
//                 </li>
//             </ul>
//         <div className="sidebar-footer">
//           <a href="#" className="sidebar-link">
//             <i className="lni lni-exit"></i>
//             <span>Logout</span>
//           </a>
//         </div>
//       </aside>
//     </>
//   );
// }

// export default Sidebar;
