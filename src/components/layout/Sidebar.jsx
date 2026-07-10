import { NavLink } from "react-router-dom";
import navigation from "../../config/navigation";
import useSidebarStore from "../../stores/sidebar.store";

export default function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <aside className={`border-r transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      <nav className="space-y-2">
        {(navigation).map((item) => {
          const Icon = item.icon;

          return(
            <NavLink 
              key={item.id} 
              to={item.path} 
              className={ ({ isActive }) => `flex items-center gap-3 rounded-md px-3 py-2 
              ${isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}` }
            >
              
              <Icon className="h-5 w-5" />
              
              <span 
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
              >
                {item.label}
              </span>

            </NavLink>
          );
        })}
      </nav>
    </aside>
  )
}
