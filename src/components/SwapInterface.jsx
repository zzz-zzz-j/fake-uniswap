import React, { useState } from 'react'

const SwapInterface = () => {
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [fromToken, setFromToken] = useState('ETH')
  const [toToken, setToToken] = useState('USDC')
  const [showDetails, setShowDetails] = useState(false)

  const handleSwap = () => {
    // Swap tokens
    const tempToken = fromToken
    setFromToken(toToken)
    setToToken(tempToken)
    
    const tempAmount = fromAmount
    setFromAmount(toAmount)
    setToAmount(tempAmount)
  }

  const handleMaxClick = () => {
    setFromAmount('0.0')
  }

  return (
    <div className="flex justify-center items-start p-10 md:p-20 w-full animate-fade-in">
      <div className="bg-white rounded-3xl p-3 w-full max-w-[480px] shadow-2xl border border-black/5 animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-2 px-2 pt-2">
          <div className="text-base font-medium text-gray-500">Swap</div>
          <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-black/5 hover:text-gray-900 transition-all duration-200">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="2" fill="currentColor"/>
              <circle cx="10" cy="4" r="2" fill="currentColor"/>
              <circle cx="10" cy="16" r="2" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* From Input */}
        <div className="bg-[#f7f8fa] rounded-[20px] p-4 mb-1 border-2 border-transparent hover:border-black/10 focus-within:border-uniswap-pink/40 focus-within:bg-white transition-all duration-200">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[13px] font-medium text-gray-500">You pay</span>
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-gray-500">Balance: 0</span>
              <button 
                onClick={handleMaxClick}
                className="bg-uniswap-pink text-white px-2 py-1 rounded-lg text-[11px] font-bold tracking-wide hover:bg-uniswap-pink-dark hover:scale-105 transition-all duration-200"
              >
                MAX
              </button>
            </div>
          </div>
          <div className="flex justify-between items-start gap-3">
            <div className="flex-1 flex flex-col gap-1">
              <input
                type="text"
                className="w-full bg-transparent text-4xl font-medium text-gray-900 outline-none placeholder:text-gray-300"
                placeholder="0"
                value={fromAmount}
                onChange={(e) => {
                  const value = e.target.value
                  if (value === '' || /^\d*\.?\d*$/.test(value)) {
                    setFromAmount(value)
                  }
                }}
              />
              <div className="text-sm text-gray-500 font-medium">
                {fromAmount ? `~$${(parseFloat(fromAmount) * 2000).toFixed(2)}` : ''}
              </div>
            </div>
            <button className="flex items-center gap-2 px-3 py-2 pl-2 bg-white rounded-2xl hover:bg-gray-100 transition-all duration-200 flex-shrink-0">
              <img 
                src={`https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/${fromToken === 'ETH' ? '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' : '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'}/logo.png`}
                alt={fromToken}
                className="w-6 h-6 rounded-full"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgZmlsbD0iI0U4RThFOCIvPjwvc3ZnPg=='
                }}
              />
              <span className="text-lg font-bold text-gray-900">{fromToken}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Swap Arrow */}
        <div className="flex justify-center -my-2 relative z-10">
          <button 
            onClick={handleSwap}
            className="w-10 h-10 rounded-xl border-4 border-white bg-[#f7f8fa] text-gray-500 hover:bg-gray-200 hover:text-gray-900 active:scale-90 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* To Input */}
        <div className="bg-[#f7f8fa] rounded-[20px] p-4 mb-1 border-2 border-transparent hover:border-black/10 focus-within:border-uniswap-pink/40 focus-within:bg-white transition-all duration-200">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[13px] font-medium text-gray-500">You receive</span>
            <span className="text-[13px] text-gray-500">Balance: 0</span>
          </div>
          <div className="flex justify-between items-start gap-3">
            <div className="flex-1 flex flex-col gap-1">
              <input
                type="text"
                className="w-full bg-transparent text-4xl font-medium text-gray-900 outline-none placeholder:text-gray-300"
                placeholder="0"
                value={toAmount}
                onChange={(e) => {
                  const value = e.target.value
                  if (value === '' || /^\d*\.?\d*$/.test(value)) {
                    setToAmount(value)
                  }
                }}
              />
              <div className="text-sm text-gray-500 font-medium">
                {toAmount ? `~$${parseFloat(toAmount).toFixed(2)}` : ''}
              </div>
            </div>
            <button className="flex items-center gap-2 px-3 py-2 pl-2 bg-white rounded-2xl hover:bg-gray-100 transition-all duration-200 flex-shrink-0">
              <img 
                src={`https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/${toToken === 'USDC' ? '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' : '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'}/logo.png`}
                alt={toToken}
                className="w-6 h-6 rounded-full"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgZmlsbD0iI0U4RTRFOCIvPjwvc3ZnPg=='
                }}
              />
              <span className="text-lg font-bold text-gray-900">{toToken}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Exchange Rate */}
        {fromAmount && toAmount && (
          <div className="flex justify-between items-center px-4 py-3 mt-2 animate-fade-in">
            <span className="text-sm text-gray-500 font-medium">
              1 {fromToken} = {(parseFloat(toAmount) / parseFloat(fromAmount)).toFixed(2)} {toToken}
            </span>
            <button className="text-gray-500 hover:text-gray-900 transition-colors duration-200 p-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 11V8M8 5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        )}

        {/* Swap Button */}
        <button 
          disabled={!fromAmount}
          className={`w-full py-5 mt-2 rounded-[20px] text-xl font-semibold transition-all duration-200 ${
            !fromAmount 
              ? 'bg-[#f7f8fa] text-gray-400 cursor-not-allowed' 
              : 'bg-uniswap-pink text-white hover:bg-uniswap-pink-dark hover:shadow-lg active:scale-[0.98]'
          }`}
        >
          {!fromAmount ? 'Enter an amount' : 'Connect Wallet'}
        </button>

        {/* Details */}
        {fromAmount && (
          <div className="mt-3 rounded-2xl overflow-hidden animate-slide-down">
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="w-full flex justify-between items-center px-4 py-3 hover:bg-black/5 transition-colors duration-200"
            >
              <span className="text-sm text-gray-500 font-medium">
                {fromAmount && toAmount ? `1 ${fromToken} = ${(parseFloat(toAmount) / parseFloat(fromAmount)).toFixed(4)} ${toToken}` : 'Show details'}
              </span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`text-gray-500 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
              >
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {showDetails && (
              <div className="px-4 pb-3 flex flex-col gap-3 animate-slide-down">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Expected output</span>
                  <span className="text-sm font-semibold text-gray-900">{toAmount ? `${toAmount} ${toToken}` : '-'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Price impact</span>
                  <span className="text-sm font-semibold text-green-600">&lt;0.01%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Minimum received</span>
                  <span className="text-sm font-semibold text-gray-900">{toAmount ? `${(parseFloat(toAmount) * 0.995).toFixed(4)} ${toToken}` : '-'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Network fee</span>
                  <span className="text-sm font-semibold text-gray-900">~$2.50</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SwapInterface



