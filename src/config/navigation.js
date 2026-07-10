import { LayoutDashboard, FolderKanban, SquareCheckBig, User  } from "lucide-react";

const navigation = [
    {
        id: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: "projects",
        label: "Projects",
        path: "/projects",
        icon: FolderKanban,

        showinSidebar: true,

        roles: ["admin", "user"],
    },
    {
        id: "tasks",
        label: "Tasks",
        path: "/tasks",
        icon: SquareCheckBig,
    },
    {
        id: "profile",
        label: "Profile",
        path: "/profile",
        icon: User,
    },
];

export default navigation;