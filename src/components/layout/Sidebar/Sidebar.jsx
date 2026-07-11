import useSidebarStore from "../../../stores/sidebar.store";


export default function Sidebar() {
  const {isCollapsed, isMobileOpen, closeMobile} = useSidebarStore();

  return(
    <>
      {/* Desktop Sidebar */}

      {/* Mobile Sidebar */}

      {/* Overlay */}

    </>
  )
}













// import { NavLink } from "react-router-dom";
// import navigation from "../../config/navigation";
// import useSidebarStore from "../../stores/sidebar.store";

// export default function Sidebar() {
//   const { isMobileOpen, isCollapsed, closeMobile } = useSidebarStore();

//   const sidebarContent = (
//     <nav className="flex flex-col space-y-2">
//       {navigation.map((item) => {
//         const Icon = item.icon;

//         return (
//           <NavLink
//             key={item.id}
//             to={item.path}
//             onClick={closeMobile}
//             className={({ isActive }) =>
//               `flex items-center gap-3 rounded-md px-3 py-2 transition ${
//                 isActive
//                   ? "bg-blue-100 text-blue-600"
//                   : "hover:bg-gray-100"
//               }`
//             }
//           >
//             <Icon className="h-5 w-5 shrink-0" />

//             <span
//               className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
//                 isCollapsed
//                   ? "max-w-0 opacity-0"
//                   : "max-w-xs opacity-100"
//               }`}
//             >
//               {item.label}
//             </span>
//           </NavLink>
//         );
//       })}
//     </nav>
//   );

//   return (
//     <>
//       <aside
//         className={`hidden lg:flex flex-col h-screen bg-white border-r p-3 transition-all duration-300 ${
//           isCollapsed ? "w-20" : "w-64"
//         }`}
//       >
//         {sidebarContent}
//       </aside>
    

//       {isMobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/70 lg:hidden"
//           onClick={closeMobile}
//         />
//       )}

//       <aside
//         className={`fixed lg:hidden top-0 left-0 h-full w-64 bg-white shadow-lg p-3 transition-transform duration-300 ${
//           isMobileOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {sidebarContent}
//       </aside>
//     </>
//   );
// }
