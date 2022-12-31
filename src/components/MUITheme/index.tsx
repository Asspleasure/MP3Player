import React, {ReactNode} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ColorModeContext} from '../../styles/theme';
import { useToggleColorMode } from '../../hooks'

export const MUITheme = ({children} : { children:ReactNode }) => {
    const [theme, colorMode] = useToggleColorMode();

    return(
        <ColorModeContext.Provider value={{useToggleModeColor: colorMode.useToggleModeColor, mode:colorMode.mode}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
};