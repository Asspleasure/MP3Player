export const stylesComponents = (mode: 'light' | 'dark') => ({
    switcher: {
        display: 'flex',
        height: '42px',
        marginBottom: '40px',
        lineHeight: '24px',
        backgroundColor: `${mode === 'light' ? 'rgba(209, 214, 246, 1)' : 'rgba(24, 33, 87, 1)'}`,
        fontWeight: 500,
        borderRadius: '51px',
        alignItems: 'center',
        position: 'relative',
        width: '176px',
        transition: 'all 200ms ease-in-out',

        '&:before': {
            transition: 'transform 200ms ease-in-out',
            content: '""',
            left: 0,
            position: 'absolute',
            borderRadius: '51px',
            backgroundColor: `${mode === 'light' ? '#BBC2EE' : '#313A75'}`,
            height: '42px',
            width: '88px',
            transform: `translateX(${mode === 'light' ? '0px' : '88px'})`,
        },

        switcherBlock: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '9px 10px',
            position: 'relative',
            borderRadius: '51px',
            WebkitTapHighlightColor: 'transparent',

        },

        switcherIcon: {
            fontSize: '24px',
            marginRight: '9px',
        },
    },

    bg: {
        height: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        transition: 'background-color 200ms ease-in-out',
        position: 'relative',
    },
})