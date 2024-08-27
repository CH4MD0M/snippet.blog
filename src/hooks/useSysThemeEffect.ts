import { useCallback, useEffect } from 'react';

import { useAppDispatch } from '@hooks/reduxHooks';
import { setTheme } from '@store/modules/darkMode';
import { getLocalStorage } from '@utils/storage';

export const useSysThemeEffect = () => {
  const dispatch = useAppDispatch();

  const updateTheme = useCallback(
    (isDarkMode: boolean) => {
      const systemTheme: ThemeMode = isDarkMode ? 'dark' : 'light';
      const savedTheme: ThemeMode = getLocalStorage('themeMode');
      const newTheme = savedTheme || systemTheme;

      dispatch(setTheme({ themeMode: newTheme, saveToLocalStorage: false }));
    },
    [dispatch],
  );

  useEffect(() => {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial theme
    updateTheme(colorSchemeQuery.matches);

    const handleThemeChange = (e: MediaQueryListEvent) =>
      updateTheme(e.matches);

    colorSchemeQuery.addEventListener('change', handleThemeChange);
    return () =>
      colorSchemeQuery.removeEventListener('change', handleThemeChange);
  }, [updateTheme]);
};
