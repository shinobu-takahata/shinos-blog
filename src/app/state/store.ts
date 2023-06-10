import { create, useStore } from "zustand";

type menuOpenStore = {
    menuOpen: boolean;
    handleMenuOpen: (menuOpen: boolean) => void;
};

export const useMenuOpenStore = create<menuOpenStore>((set) => ({
    menuOpen: false,
    handleMenuOpen: (menuOpen) => set({
        menuOpen: !menuOpen
    }),
}));