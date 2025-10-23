import React, { useState } from 'react'
import './PoolPage.css'

const PoolPage = () => {
  const [activeTab, setActiveTab] = useState('Pools')

  const pools = [
    { token1: 'ETH', token2: 'USDC', tvl: '$1.2B', volume24h: '$145M', apr: '12.5%', fees: '0.3%' },
    { token1: 'ETH', token2: 'USDT', tvl: '$890M', volume24h: '$98M', apr: '10.8%', fees: '0.3%' },
    { token1: 'WBTC', token2: 'ETH', tvl: '$456M', volume24h: '$52M', apr: '15.2%', fees: '0.3%' },
    { token1: 'DAI', token2: 'USDC', tvl: '$234M', volume24h: '$28M', apr: '8.3%', fees: '0.01%' },
    { token1: 'UNI', token2: 'ETH', tvl: '$189M', volume24h: '$24M', apr: '18.7%', fees: '0.3%' },
    { token1: 'LINK', token2: 'ETH', tvl: '$156M', volume24h: '$19M', apr: '14.5%', fees: '0.3%' },
  ]

  return (
    <div className="pool-page">
      <div className="pool-header">
        <div className="pool-title-section">
          <h1 className="pool-title">Pools</h1>
          <p className="pool-subtitle">Provide liquidity to earn fees on trades</p>
        </div>
        <button className="new-position-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          New Position
        </button>
      </div>

      <div className="pool-tabs">
        <button
          className={activeTab === 'Pools' ? 'pool-tab active' : 'pool-tab'}
          onClick={() => setActiveTab('Pools')}
        >
          Pools
        </button>
        <button
          className={activeTab === 'Positions' ? 'pool-tab active' : 'pool-tab'}
          onClick={() => setActiveTab('Positions')}
        >
          Positions
        </button>
      </div>

      {activeTab === 'Pools' && (
        <>
          <div className="pool-stats-grid">
            <div className="pool-stat-card">
              <div className="pool-stat-label">Total Value Locked</div>
              <div className="pool-stat-value">$3.2B</div>
              <div className="pool-stat-change positive">+5.2%</div>
            </div>
            <div className="pool-stat-card">
              <div className="pool-stat-label">24h Volume</div>
              <div className="pool-stat-value">$366M</div>
              <div className="pool-stat-change positive">+12.8%</div>
            </div>
            <div className="pool-stat-card">
              <div className="pool-stat-label">24h Fees</div>
              <div className="pool-stat-value">$1.1M</div>
              <div className="pool-stat-change positive">+8.4%</div>
            </div>
          </div>

          <div className="pools-table-container">
            <table className="pools-table">
              <thead>
                <tr>
                  <th className="text-left">Pool</th>
                  <th className="text-right">TVL</th>
                  <th className="text-right">Volume 24h</th>
                  <th className="text-right">APR</th>
                  <th className="text-right">Fees</th>
                </tr>
              </thead>
              <tbody>
                {pools.map((pool, index) => (
                  <tr key={index} className="pool-row">
                    <td className="text-left">
                      <div className="pool-tokens">
                        <div className="pool-token-icons">
                          <div className="pool-token-icon primary">{pool.token1.charAt(0)}</div>
                          <div className="pool-token-icon secondary">{pool.token2.charAt(0)}</div>
                        </div>
                        <span className="pool-token-pair">{pool.token1}/{pool.token2}</span>
                        <span className="pool-fee-badge">{pool.fees}</span>
                      </div>
                    </td>
                    <td className="text-right pool-tvl">{pool.tvl}</td>
                    <td className="text-right pool-volume">{pool.volume24h}</td>
                    <td className="text-right pool-apr">{pool.apr}</td>
                    <td className="text-right pool-fees">{pool.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {activeTab === 'Positions' && (
        <div className="empty-positions">
          <div className="empty-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" stroke="#e8e8e8" strokeWidth="4"/>
              <path d="M40 25v30M25 40h30" stroke="#e8e8e8" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="empty-title">No positions yet</h3>
          <p className="empty-description">Create a position to start earning fees on your liquidity</p>
          <button className="create-position-button">Create Position</button>
        </div>
      )}
    </div>
  )
}

export default PoolPage

