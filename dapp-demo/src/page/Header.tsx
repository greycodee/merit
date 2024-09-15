import React from 'react';
import { ConnectButton,useAutoConnectWallet} from '@mysten/dapp-kit';
import { Grid, Flex,Button } from '@radix-ui/themes';

import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const autoConnectionStatus = useAutoConnectWallet();


    const handleHomeClick = () => {
        navigate('/');
    };

    const handleAboutClick = () => {
        navigate('/about');
    };

    return (
        <Grid className='p-2 border-b border-slate-600' columns="2" gap="3" rows="64px">
            <Flex gap="4" align='center'>
                <Button className='cursor-pointer' color="orange" variant="soft" onClick={handleHomeClick}>积功德</Button>
                <Button className='cursor-pointer' color="cyan" variant="soft" onClick={handleAboutClick}>个人中心</Button>
            </Flex>
            <Flex id='right' className='p-2' justify="end">
                <ConnectButton />
                </Flex>
        </Grid>
    );
};

export default Header;