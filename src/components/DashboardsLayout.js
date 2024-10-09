import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import DashboardContent from './DashboardContent';


import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PinIcon from '@mui/icons-material/Pin';


import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

const NAVIGATION = [
    {
        segment: 'counter',
        title: 'Counter',
        icon: <PointOfSaleRoundedIcon />,
    },
    {
        segment: 'items',
        title: 'Items',
        icon: <ListOutlinedIcon />,
    },
    {
        segment: 'today',
        title: 'Today',
        icon: <MonetizationOnRoundedIcon />,
    },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <AutoGraphRoundedIcon />,
    },
    {
        segment: 'more',
        title: 'More',
        icon: <DashboardIcon />,
    }
];


function ToolbarIcons() {
    return (
        <React.Fragment>

            <Tooltip title="Chat" enterDelay={1000}>
                <IconButton
                    type="button"
                    aria-label="chat"
                    sx={{
                        display: { xs: 'inline', md: 'inline-block' },
                        mr: 1,
                    }}
                >
                    <PinIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Help" enterDelay={1000}>
                <IconButton
                    type="button"
                    aria-label="help"
                    sx={{
                        display: { xs: 'inline', md: 'inline-block' },
                        mr: 1,
                    }}
                >
                    <HelpIcon />
                </IconButton>
            </Tooltip>


            <Tooltip title="Profile" enterDelay={1000}>
                <IconButton
                    type="button"
                    aria-label="help"
                    sx={{
                        display: { xs: 'inline', md: 'inline-block' },
                        mr: 1,
                    }}
                >
                    <PersonAddIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Cloud Status" enterDelay={1000}>
                <IconButton
                    type="button"
                    aria-label="cloud"
                    sx={{
                        display: { xs: 'inline', md: 'inline-block' },
                        mr: 1,
                    }}
                >
                    <CloudDoneIcon />
                </IconButton>
            </Tooltip>
        </React.Fragment>
    );
}

const demoTheme = createTheme({
    palette: {
        mode: 'light', 
        primary: {
            main: '#2853d8', // AppBar background color (blue)
            contrastText: '#ffffff', // Text and button color (white)
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2853d8', // Explicitly set AppBar background color to blue
                    color: '#ffffff', // Text color in the AppBar (white)
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#ffffff', // Set icon color in AppBar to white
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#ffffff', // Button text color (white)
                },
            },
        },
    },
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});


function DashboardsLayout(props) {
    const { window } = props;

    const [pathname, setPathname] = React.useState('/counter');

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    const demoWindow = window !== undefined ? window() : undefined;

    return (
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
                title: 'MUI',
            }}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout slots={{ toolbarActions: ToolbarIcons }}>
                <DashboardContent pathname={pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}

DashboardsLayout.propTypes = {
    window: PropTypes.func,
};

export default DashboardsLayout;
