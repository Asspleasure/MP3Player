import * as React from 'react';
import './style.css';
import { PlayerCard } from './components/PlayerCard';
import { Box } from '@mui/material';
import {MUITheme} from './components/MUITheme';
import {ColorModeContext} from './styles/theme';
import {stylesComponents} from './styles/stylesVariablesComponents';



export default function App() {

    return (
        <MUITheme>
            <Box sx={{
                height: '100vh',
                bgcolor: 'background.default',
                display: 'flex',
                transition: 'background-color 200ms ease-in-out',
                position: 'relative',
            }}>
                {/*<a
                    href="https://www.figma.com/file/i9nWRlDrDbqruPpyaXhy8W/player-card?node-id=2%3A5665"
                    target="_blank"
                >
                    <h1>MUI II. Layout and theme</h1>
                </a>*/}
                <PlayerCard />
            </Box>
        </MUITheme>
    );
}
