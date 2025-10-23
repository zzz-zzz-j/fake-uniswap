import React, { useState } from 'react'
import './NFTsPage.css'

const NFTsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Trending')

  const nfts = [
    { id: 1, name: 'Bored Ape #7890', collection: 'Bored Ape Yacht Club', price: '45.2 ETH', change: '+12.5%', positive: true },
    { id: 2, name: 'CryptoPunk #1234', collection: 'CryptoPunks', price: '67.8 ETH', change: '+8.3%', positive: true },
    { id: 3, name: 'Azuki #5678', collection: 'Azuki', price: '12.5 ETH', change: '-3.2%', positive: false },
    { id: 4, name: 'Doodle #3456', collection: 'Doodles', price: '8.9 ETH', change: '+15.7%', positive: true },
    { id: 5, name: 'Moonbird #8901', collection: 'Moonbirds', price: '18.3 ETH', change: '+5.4%', positive: true },
    { id: 6, name: 'Clone X #2345', collection: 'CloneX', price: '14.7 ETH', change: '-2.1%', positive: false },
  ]

  const categories = ['Trending', 'Top', 'Art', 'Gaming', 'Music', 'Photography']

  return (
    <div className="nfts-page">
      <div className="nfts-header">
        <div className="nfts-title-section">
          <h1 className="nfts-title">Explore NFTs on Uniswap</h1>
          <p className="nfts-subtitle">Discover, collect, and trade extraordinary NFTs</p>
        </div>
      </div>

      <div className="nfts-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'category-btn active' : 'category-btn'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="nfts-grid">
        {nfts.map((nft) => (
          <div key={nft.id} className="nft-card">
            <div className="nft-image-container">
              <div className="nft-image-placeholder">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="60" rx="8" fill="url(#gradient)" />
                  <path d="M30 20L35 30H25L30 20Z" fill="white" opacity="0.3"/>
                  <circle cx="30" cy="38" r="5" fill="white" opacity="0.3"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF007A"/>
                      <stop offset="1" stopColor="#7B3FE4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="nft-info">
              <div className="nft-collection">{nft.collection}</div>
              <div className="nft-name">{nft.name}</div>
              <div className="nft-price-row">
                <div className="nft-price">
                  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99219 0L5.875 0.398438V13.6797L5.99219 13.7969L11.9844 10.2969L5.99219 0Z" fill="#7d7d7d"/>
                    <path d="M5.99219 0L0 10.2969L5.99219 13.7969V7.39844V0Z" fill="#7d7d7d"/>
                    <path d="M5.99219 14.9297L5.92188 15.0156V19.6484L5.99219 19.8594L12 11.4297L5.99219 14.9297Z" fill="#7d7d7d"/>
                    <path d="M5.99219 19.8594V14.9297L0 11.4297L5.99219 19.8594Z" fill="#7d7d7d"/>
                  </svg>
                  {nft.price}
                </div>
                <span className={nft.positive ? 'nft-change positive' : 'nft-change negative'}>
                  {nft.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="nfts-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="#FF007A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-value">$2.5B</div>
            <div className="stat-label">Total Volume</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#FF007A" strokeWidth="2"/>
              <path d="M9 9h6v6H9V9z" fill="#FF007A"/>
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-value">142K</div>
            <div className="stat-label">Collections</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="#FF007A" strokeWidth="2"/>
              <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" stroke="#FF007A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-value">890K</div>
            <div className="stat-label">Active Users</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTsPage

