import { Menu } from "lucide-react"
import useSidebarStore from "../../stores/sidebar.store"

export default function Header() {
  const toggle = useSidebarStore((state) => state.toggle);
  
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
        
        <button onClick={toggle}>
          <Menu />
        </button>

    </header>
  )
}
