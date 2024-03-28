import React, { useState } from 'react'
import Modal from './Modal';
import ConnectWalletmodal from './ConnectWalletmodal';

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    const onConnectClick = () => {
        setOpen(true)
    }
    return (
        <div className='sticky top-0 h-[60px] text-2xl bg-primary text-tertiary1 flex items-center justify-center'>
            <Modal
                open={open}
                setOpen={setOpen}
                content={<ConnectWalletmodal />}
                title='Connect Wallet'
                size='h-[380px] w-[480px]'
            />
            <div className='flex-1 px-4'>
                Sepolia Assignment
            </div>
            <div className='text-white rounded-xl bg-secondary hover:bg-red-500 px-4 mx-4 py-1 text-[16px] cursor-pointer'
                onClick={onConnectClick}
            >
                Connect Wallet
            </div>
        </div>
    )
}

export default Header