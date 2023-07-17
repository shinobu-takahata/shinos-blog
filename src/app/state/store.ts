import { create, useStore } from "zustand";
import { Blog } from "../types/blog";

// ハンバーガーメニュー
type menuOpenStore = {
    menuOpen: boolean;
    handleMenuOpen: (menuOpen: boolean) => void;
};

// 検索メニュー
type searchAreaOpenStore = {
    searchAreaOpen: boolean;
    handlesearchAreaOpen: (searchAreaOpen: boolean) => void;
};

// 検索対象
type searchContentsStore = {
    searchContents: Blog[];
    handlesearchContents: (searchContents: Blog[]) => void;
};


export const useMenuOpenStore = create<menuOpenStore>((set) => ({
    menuOpen: false,
    handleMenuOpen: (menuOpen) => set({
        menuOpen: !menuOpen
    }),
}));

export const useSearchAreaOpenStore = create<searchAreaOpenStore>((set) => ({
    searchAreaOpen: false,
    handlesearchAreaOpen: (searchAreaOpen) => set({
        searchAreaOpen: !searchAreaOpen
    }),
}));

export const useSearchContentsStore = create<searchContentsStore>((set) => ({
    searchContents: [],
    handlesearchContents: (searchContents) => set({
        searchContents: searchContents
    }),
}));