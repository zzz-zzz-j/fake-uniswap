import React, { useState } from 'react'
import Header from './components/Header'
import SwapInterface from './components/SwapInterface'
import TokensPage from './components/TokensPage'
import NFTsPage from './components/NFTsPage'
import PoolPage from './components/PoolPage'
import { WalletProvider } from './context/WalletContext'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Swap')

  const renderPage = () => {
    switch (activePage) {
      case 'Swap':
        return <SwapInterface />
      case 'Tokens':
        return <TokensPage />
      case 'NFTs':
        return <NFTsPage />
      case 'Pool':
        return <PoolPage />
      default:
        return <SwapInterface />
    }
  }

  return (
    <WalletProvider>
      <div className="app">
        <Header activePage={activePage} setActivePage={setActivePage} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </WalletProvider>
  )
}

export default App



