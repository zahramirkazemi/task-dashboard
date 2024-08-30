import { create } from 'zustand';
import { ThemeStore } from '../type';

const useThemeStore = create<ThemeStore>()((set) => ({
	isDarkTheme: false,
	changeTheme: () => set(state => ({ ...state, isDarkTheme: !state.isDarkTheme, }))
}))

export default useThemeStore;