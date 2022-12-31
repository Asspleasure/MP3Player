import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import '../../style.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import {stylesComponents} from '../../styles/stylesVariablesComponents';
import {
    ButtonGroup,
    Button,
    Switch,
    Typography,
    Slider,
    IconButton,
    Popover,
    Stack,
    Box,
    Container,
} from '@mui/material';

import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {ColorModeContext} from "../../styles/theme";

import { AlbumImage } from '../styles';
import { Controls } from '../Controls';
import {bgcolor} from "@mui/system";




//const ColorModeContext = React.createContext({ useToggleModeColor: () => {} });

export const PlayerCard = () => {
    const duration = 260; // seconds
    const colorMode = React.useContext(ColorModeContext);
    console.log(`PlayCard${colorMode}`);
    const [position, setPosition] = useState(0);
    const [isLiked, setLiked] = useState<boolean | null>(null);
    const [typeMode, setTypeMode] = useState('light');

    const formatDuration = (value: number) => {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    };

    /*const handleChangeTypeBooking = (type: any) => {
        setTypeMode(type);
    };*/

    /*const upcomingStyle =
        typeMode === 'light' ? stylesToggle(colorMode.mode).switcher.switcherBlock : '';
    const previousStyle =
        typeMode === 'dark' ? stylesToggle(colorMode.mode).switcher.switcherBlock : '';*/

    return (
        <Container
            sx={{
                margin: '10em auto',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '100%',
            }}
        >
            <Box sx={stylesComponents(colorMode.mode).switcher}>
                <Typography
                    role="button"
                    component="span"
                    variant="body2"
                    sx={{
                        ...stylesComponents(colorMode.mode).switcher.switcherBlock,
                        color: 'white',
                        //...upcomingStyle,
                        fontFamily: 'Poppins, sans-serif',
                    }}
                    onClick={() => {
                        //handleChangeTypeBooking('light');
                        colorMode.useToggleModeColor('light');
                    }}
                >
                    <WbSunnyOutlinedIcon sx={stylesComponents(colorMode.mode).switcher.switcherIcon} />

                    Light
                </Typography>
                <Typography
                    role="button"
                    component="span"
                    variant="body2"
                    sx={{
                        ...stylesComponents(colorMode.mode).switcher.switcherBlock,
                        color: '#7C83AF',
                        //...previousStyle,
                        fontFamily: 'Poppins, sans-serif',
                    }}
                    onClick={() => {
                        //handleChangeTypeBooking('dark');
                        colorMode.useToggleModeColor('dark');
                    }}
                >
                    <DarkModeOutlinedIcon sx={stylesComponents(colorMode.mode).switcher.switcherIcon} />

                    Dark
                </Typography>
            </Box>

            <AlbumImage src="https://via.ritzau.dk/data/images/00180/311cc18f-3372-4bbd-b50f-d4a253bfb755-w_960.jpg" />
            <Box sx={{ flexDirection: 'column', display: 'flex',  margin: '30px 0' }}>
                <Box
                    sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center', mb: '5px' }}
                >
                    <IconButton
                        color="info"
                        component="label"
                        onClick={() => {
                            setLiked(isLiked === false ? null : false);
                        }}
                    >
                        {isLiked === false ? <ThumbDownIcon /> : <ThumbDownOffAltIcon />}
                    </IconButton>
                    <Typography variant="h6" component="h5" color="text.primary" sx={{margin: 'auto 40px', fontFamily: 'Poppins, sans-serif',}}>
                        Maniac
                    </Typography>
                    <IconButton
                        color="info"
                        component="label"
                        onClick={() => {
                            setLiked(isLiked ? null : true);
                        }}
                    >
                        {isLiked === true ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
                    </IconButton>
                </Box>
                <Typography component="span" color="text.secondary" sx={{textAlign: 'center', fontFamily: 'Poppins, sans-serif',}}>Michael Sambello</Typography>
            </Box>

            <Slider
                sx={{ maxWidth: 408, mb: '50px',
                    '& .MuiSlider-markLabel[data-index="0"]': {
                        transform: "translateX(0%)"
                    },
                    '& .MuiSlider-markLabel[data-index="1"]': {
                        transform: "translateX(-100%)"
                    } }}
                color="secondary"
                aria-label="Custom marks"
                defaultValue={20}
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value: any) => setPosition(value)}
                marks={[
                    {
                        value: 0,
                        label: formatDuration(position),
                    },
                    {
                        value: duration,
                        label: formatDuration(duration),
                    },
                ]}
            />

            <Controls />
        </Container>
    );
};
