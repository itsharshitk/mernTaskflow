import { Menu, PanelLeft } from "lucide-react"
import useSidebarStore from "../../stores/sidebar.store"

export default function Header() {
  const toggleCollapsed = useSidebarStore((state) => state.toggleCollapsed);
  const toggleMobile = useSidebarStore((state) => state.toggleMobile);
  
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
        
        <button className="hidden lg:block" onClick={toggleCollapsed}>
          <PanelLeft />
        </button>

        <button className="lg:hidden" onClick={toggleMobile}>
          <Menu />
        </button>

    </header>
  )
}
