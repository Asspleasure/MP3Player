import { createContext, useState, useMemo } from 'react';
import { createTheme, Theme } from '@mui/material/styles';
import {themeSettings} from '../styles/theme'

export const useToggleColorMode = ():[Theme, { useToggleModeColor: (m: 'light' | 'dark') => void, mode:'light' | 'dark'}] => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    const colorMode = useMemo(
        () => ({
            useToggleModeColor: (m: 'light' | 'dark') => {
                setMode(m);
            },
            mode,
        }),
        [mode]
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};