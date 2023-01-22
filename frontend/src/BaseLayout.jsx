import { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    useMantineTheme,
    NavLink,
    Flex,
    ActionIcon,
    MediaQuery,
    Burger,
} from '@mantine/core';
import { IconLogin } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import App from './App';

function BaseLayOut() {
    const navigate = useNavigate();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    //const [LoginModal, setLoginModal] = useState(false);

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
                    <NavLink label="users" onClick={() => { navigate('/users'); }} />
                    <NavLink label="Sales" onClick={() => { navigate('/sales'); }} />
                </Navbar>
            }
            header={
                <Header height={{ base: 50, md: 60 }} p="md">
                    <Flex justify={'space-between'} align="center" style={{ height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        <h3>My Dashboard</h3>
                        <ActionIcon variant="outline" ><IconLogin size={16} /></ActionIcon>
                    </Flex>
                </Header>
            }
        >
            <App />
        </AppShell>
    );
}

export default BaseLayOut;