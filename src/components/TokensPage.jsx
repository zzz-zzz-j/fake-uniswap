import React, { useState } from 'react'
import './TokensPage.css'

const TokensPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('All')

  const tokens = [
    { 
      name: 'Ethereum', 
      symbol: 'ETH', 
      price: '$2,045.32', 
      change: '+2.34%', 
      volume: '$12.5B', 
      tvl: '$45.2B', 
      positive: true,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png'
    },
    { 
      name: 'USD Coin', 
      symbol: 'USDC', 
      price: '$1.00', 
      change: '+0.01%', 
      volume: '$8.3B', 
      tvl: '$32.1B', 
      positive: true,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png'
    },
    { 
      name: 'Tether', 
      symbol: 'USDT', 
      price: '$1.00', 
      change: '-0.02%', 
      volume: '$15.2B', 
      tvl: '$38.5B', 
      positive: false,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png'
    },
    { 
      name: 'Wrapped Bitcoin', 
      symbol: 'WBTC', 
      price: '$43,250.00', 
      change: '+3.45%', 
      volume: '$2.1B', 
      tvl: '$8.4B', 
      positive: true,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png'
    },
    { 
      name: 'Dai', 
      symbol: 'DAI', 
      price: '$1.00', 
      change: '+0.00%', 
      volume: '$1.5B', 
      tvl: '$5.2B', 
      positive: true,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png'
    },
    { 
      name: 'Chainlink', 
      symbol: 'LINK', 
      price: '$15.42', 
      change: '-1.23%', 
      volume: '$850M', 
      tvl: '$3.1B', 
      positive: false,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png'
    },
    { 
      name: 'Uniswap', 
      symbol: 'UNI', 
      price: '$6.85', 
      change: '+5.67%', 
      volume: '$420M', 
      tvl: '$2.8B', 
      positive: true,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png'
    },
    { 
      name: 'Aave', 
      symbol: 'AAVE', 
      price: '$98.32', 
      change: '+2.11%', 
      volume: '$320M', 
      tvl: '$1.9B', 
      positive: true,
      logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9/logo.png'
    },
  ]

  const filters = ['All', 'DeFi', 'Stablecoins', 'Gaming', 'NFT']

  return (
    <div className="tokens-page">
      <div className="tokens-header">
        <div className="tokens-title-section">
          <h1 className="tokens-title">Top tokens on Ethereum</h1>
          <p className="tokens-subtitle">Trade tokens on Uniswap, the leading decentralized exchange</p>
        </div>
      </div>

      <div className="tokens-controls">
        <div className="search-bar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search tokens"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={selectedFilter === filter ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="tokens-table-container">
        <table className="tokens-table">
          <thead>
            <tr>
              <th className="text-left">#</th>
              <th className="text-left">Token name</th>
              <th className="text-right">Price</th>
              <th className="text-right">Change</th>
              <th className="text-right">Volume 24h</th>
              <th className="text-right">TVL</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, index) => (
              <tr key={token.symbol} className="token-row">
                <td className="text-left token-number">{index + 1}</td>
                <td className="text-left">
                  <div className="token-info">
                    <img 
                      src={token.logo} 
                      alt={token.symbol}
                      className="token-icon"
                    />
                    <div className="token-name-group">
                      <span className="token-name">{token.name}</span>
                      <span className="token-symbol">{token.symbol}</span>
                    </div>
                  </div>
                </td>
                <td className="text-right token-price">{token.price}</td>
                <td className="text-right">
                  <span className={token.positive ? 'change-positive' : 'change-negative'}>
                    {token.change}
                  </span>
                </td>
                <td className="text-right token-volume">{token.volume}</td>
                <td className="text-right token-tvl">{token.tvl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TokensPage

