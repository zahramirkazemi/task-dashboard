export type ThemeStore = {
	isDarkTheme: boolean,
	changeTheme: () => void,
}

export type ThemeStoreSet =
	(partial:
		ThemeStore |
		Partial<ThemeStore> |
		((state: ThemeStore) => ThemeStore |
			Partial<ThemeStore>),
		replace?:
			boolean | undefined) => void