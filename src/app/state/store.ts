import { create, useStore } from "zustand";

type menuOpenStore = {
    menuOpen: boolean;
    handleMenuOpen: (menuOpen: boolean) => void;
};

type searchAreaOpenStore = {
    searchAreaOpen: boolean;
    handlesearchAreaOpen: (menuOpen: boolean) => void;
};

export const useMenuOpenStore = create<menuOpenStore>((set) => ({
    menuOpen: false,
    handleMenuOpen: (menuOpen) => set({
        menuOpen: !menuOpen
    }),
}));

export const usesearchAreaOpenStore = create<searchAreaOpenStore>((set) => ({
    searchAreaOpen: false,
    handlesearchAreaOpen: (searchAreaOpen) => set({
        searchAreaOpen: !searchAreaOpen
    }),
}));