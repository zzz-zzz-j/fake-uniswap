import React from 'react'
import { useWallet } from '../context/WalletContext'

const WalletModal = ({ isOpen, onClose }) => {
  const { connectMetaMask, connectPhantom, connectOKX, isConnecting } = useWallet()
  
  if (!isOpen) return null

  const handleWalletConnect = async (walletName, connectFunction) => {
    const success = await connectFunction()
    if (success) {
      onClose()
    }
  }

  const wallets = [
    {
      name: 'MetaMask',
      description: 'Connect to your MetaMask wallet',
      connectFunction: connectMetaMask,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#F6851B"/>
          <path d="M32 8L20 16L22 11L32 8Z" fill="#E2761B" stroke="#E2761B" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8L20 16L18 11L8 8Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 26L25 31L31 33L33 26H28Z" fill="#F6851B" stroke="#F6851B" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 26L9 33L15 31L12 26H7Z" fill="#F6851B" stroke="#F6851B" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 19L13 22L19 22.5L18.8 16L15 19Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25 19L21 16L21 22.5L27 22L25 19Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Phantom',
      description: 'Connect to your Phantom wallet',
      connectFunction: connectPhantom,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="url(#phantom-gradient)"/>
          <path d="M20 8C13.4 8 8 13.4 8 20C8 26.6 13.4 32 20 32C26.6 32 32 26.6 32 20C32 13.4 26.6 8 20 8ZM17 21C17 21.6 16.6 22 16 22C15.4 22 15 21.6 15 21V19C15 18.4 15.4 18 16 18C16.6 18 17 18.4 17 19V21ZM25 21C25 21.6 24.6 22 24 22C23.4 22 23 21.6 23 21V19C23 18.4 23.4 18 24 18C24.6 18 25 18.4 25 19V21Z" fill="white"/>
          <defs>
            <linearGradient id="phantom-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#AB9FF2"/>
              <stop offset="1" stopColor="#4E44CE"/>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: 'OKX Wallet',
      description: 'Connect to your OKX wallet',
      connectFunction: connectOKX,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="black"/>
          <rect x="10" y="10" width="7" height="7" fill="white"/>
          <rect x="23" y="10" width="7" height="7" fill="white"/>
          <rect x="10" y="23" width="7" height="7" fill="white"/>
          <rect x="23" y="23" width="7" height="7" fill="white"/>
        </svg>
      ),
    },
  ]

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Connect Wallet</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Wallet Options */}
        <div className="p-4 space-y-3">
          {wallets.map((wallet, index) => (
            <button
              key={wallet.name}
              className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-uniswap-pink/40 hover:bg-uniswap-pink/5 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => handleWalletConnect(wallet.name, wallet.connectFunction)}
              disabled={isConnecting}
            >
              <div className="flex-shrink-0">
                {wallet.icon}
              </div>
              <div className="flex-1 text-left">
                <div className="font-bold text-gray-900 text-lg">{wallet.name}</div>
                <div className="text-sm text-gray-500">{wallet.description}</div>
              </div>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 group-hover:text-uniswap-pink transition-colors duration-200"
              >
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100">
          <p className="text-sm text-center text-gray-500">
            By connecting a wallet, you agree to Uniswap's{' '}
            <a href="#" className="text-uniswap-pink hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default WalletModal

