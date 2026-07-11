import { create } from "zustand";

const useSidebarStore = create((set) => ({
    isCollapsed: false,
    isMobileOpen: false,

    toggleCollapsed: () => set((state) => ({
        isCollapsed: !state.isCollapsed
    })),

    openMobile: () => set({
        isMobileOpen: true
    }),

    closeMobile: () => set({
        isMobileOpen: false
    }),

    toggleMobile: () => set((state) => ({
        isMobileOpen: !state.isMobileOpen
    })),
}))

export default useSidebarStore;