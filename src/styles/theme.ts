import { PaletteMode } from '@mui/material';
import { createTheme, createMuiTheme } from '@mui/material/styles';
import { tokens } from './themeVariables';
import { createContext, useState, useMemo } from 'react';

export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens();
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
          ? {
            // palette values for light mode
            primary: {
              main: colors.dark['arrowPlay'],
            },
              secondary: {
                main: colors.dark['slider'],
              },
            background: {
                default: colors.dark['backgroundDark'],
                paper: colors.dark['bgSwitcher'],
            },
            text: {
              primary: colors.dark['textPrimary'],
              secondary: colors.dark['textSecondary'],
            },
              info: {
                  main: colors.dark['underPlateManage'],
              }

          }
          : {
            // palette values for dark mode
            primary: {
              main: colors.light['arrowPlay'],
            },
              secondary: {
                  main: colors.light['slider'],
              },
            background: {
                default: colors.light['backgroundLight'],
                paper: colors.light['bgSwitcher'],
            },
            text: {
              primary: colors.light['textPrimary'],
              secondary: colors.light['textSecondary'],
            },
              info: {
                  main: colors.light['underPlateManage'],
              }

          }),
    },
  };
};

type ColorModeContextType = {
    useToggleModeColor: (m: 'light' | 'dark') => void;
    mode: 'light' | 'dark';
};

export const ColorModeContext = createContext<ColorModeContextType>(null);

