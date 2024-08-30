import { create } from 'zustand';
import { ThemeStore } from '../type';

const useThemeStore = create<ThemeStore>()((set) => ({
	isDarkTheme: true,
	changeTheme: () => set(state => ({ ...state, isDarkTheme: !state.isDarkTheme, }))
}))

export default useThemeStore;