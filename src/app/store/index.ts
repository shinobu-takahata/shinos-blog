import { create } from 'zustand';

type MenuOpen = boolean

type State = {
    menuOpen: MenuOpen
    handleMenuOpen: () => void
};

const useStore = create<State>((set) => ({
    menuOpen: false,
    handleMenuOpen: () => set((state) => {
        state.menuOpen = !state.menuOpen;
        console.log(state);
        
        return state;
    }),
}));

export default useStore;