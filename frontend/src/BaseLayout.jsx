import { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    NavLink,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import App from './App';

function BaseLayOut() {
    const navigate = useNavigate();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false)
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }}>
                    <NavLink label="Home" onClick={() => { navigate('/'); }} />
                    <NavLink label="Products" onClick={() => { navigate('/products'); }} />
                    <NavLink label="Sales" onClick={() => { navigate('/sales'); }} />
                    <NavLink label="Analytics" onClick={() => { navigate('/analytics'); }} />
                </Navbar>
            }
            header={
                <Header height={{ base: 50, md: 60 }} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header</Text>
                    </div>
                </Header>
            }
        >
            <App />
        </AppShell>
    );
}

export default BaseLayOut;