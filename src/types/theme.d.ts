type ThemeMode = 'dark' | 'light';

interface DarkModeState {
  themeMode: ThemeMode;
}

interface SetThemePayload {
  themeMode: ThemeMode;
  saveToLocalStorage: boolean;
}
