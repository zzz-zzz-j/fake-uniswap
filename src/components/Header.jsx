import React from 'react'
import './Header.css'

const Header = ({ activePage, setActivePage }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo" onClick={() => setActivePage('Swap')}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 20C12.5 15.8579 15.8579 12.5 20 12.5C24.1421 12.5 27.5 15.8579 27.5 20C27.5 24.1421 24.1421 27.5 20 27.5C15.8579 27.5 12.5 24.1421 12.5 20Z" fill="#FF007A"/>
              <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 32.5C13.0964 32.5 7.5 26.9036 7.5 20C7.5 13.0964 13.0964 7.5 20 7.5C26.9036 7.5 32.5 13.0964 32.5 20C32.5 26.9036 26.9036 32.5 20 32.5Z" fill="#FF007A"/>
            </svg>
          </div>
          <nav className="nav-menu">
            <button 
              className={activePage === 'Swap' ? 'nav-item active' : 'nav-item'}
              onClick={() => setActivePage('Swap')}
            >
              Swap
            </button>
            <button 
              className={activePage === 'Tokens' ? 'nav-item active' : 'nav-item'}
              onClick={() => setActivePage('Tokens')}
            >
              Tokens
            </button>
            <button 
              className={activePage === 'NFTs' ? 'nav-item active' : 'nav-item'}
              onClick={() => setActivePage('NFTs')}
            >
              NFTs
            </button>
            <button 
              className={activePage === 'Pool' ? 'nav-item active' : 'nav-item'}
              onClick={() => setActivePage('Pool')}
            >
              Pool
            </button>
          </nav>
        </div>
        
        <div className="header-right">
          <button className="search-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="icon-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="icon-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          <button className="connect-wallet-button">
            Connect
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header



