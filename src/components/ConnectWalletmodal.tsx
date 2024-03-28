import React from 'react'

import metamask from '../assets/metamask.svg'
import trust from '../assets/trust.svg'
import bitkeep from '../assets/bitkeep.svg'
import walletConnect from '../assets/walletconnect.svg'

const ConnectWalletmodal = () => {
  return (
    <div className='grid grid-cols-2 w-full px-4 gap-4'>
      <div className='hover:scale-[1.05] w-full flex items-center justify-center'
        onClick={() => { }}>
        <img
          src={metamask}
          alt='Metamask Wallet'
          className='w-[120px] h-[120px] cursor-pointer '
        />
      </div>
      <div className='hover:scale-[1.05] w-full flex items-center justify-center'
        onClick={() => { }}>
        <img
          src={trust}
          alt='Trust Wallet'
          className='w-[120px] h-[120px] cursor-pointer '
        />
      </div>

      <div className='hover:scale-[1.05] w-full flex items-center justify-center'
        onClick={() => { }}>
        <img
          src={bitkeep}
          alt='BitKeep Wallet'
          className='w-[120px] h-[120px] cursor-pointer '
        />
      </div>
      <div className='hover:scale-[1.05] w-full flex items-center justify-center'
        onClick={() => { }}>
        <img
          src={walletConnect}
          alt='Wallet Connect Wallet'
          className='w-[120px] h-[120px] cursor-pointer '
        />
      </div>
    </div>

  )
}

export default ConnectWalletmodal