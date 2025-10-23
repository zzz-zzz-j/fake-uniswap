import React, { createContext, useContext, useState, useEffect } from 'react'
import { ethers } from 'ethers'

const WalletContext = createContext()

export const useWallet = () => {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider')
  }
  return context
}

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null)
  const [provider, setProvider] = useState(null)
  const [chainId, setChainId] = useState(null)
  const [isConnecting, setIsConnecting] = useState(false)

  // 检查钱包是否已连接
  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  // 监听账户和链变化
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged)
      window.ethereum.on('chainChanged', handleChainChanged)

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
        window.ethereum.removeListener('chainChanged', handleChainChanged)
      }
    }
  }, [])

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      // 用户断开了钱包
      disconnectWallet()
    } else if (accounts[0] !== account) {
      setAccount(accounts[0])
    }
  }

  const handleChainChanged = (chainId) => {
    // 链改变时重新加载页面
    window.location.reload()
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const accounts = await provider.listAccounts()
        
        if (accounts.length > 0) {
          const account = await accounts[0].getAddress()
          setAccount(account)
          setProvider(provider)
          const network = await provider.getNetwork()
          setChainId(Number(network.chainId))
        }
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error)
    }
  }

  const connectMetaMask = async () => {
    if (!window.ethereum) {
      alert('请安装 MetaMask!')
      window.open('https://metamask.io/download/', '_blank')
      return false
    }

    try {
      setIsConnecting(true)
      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await provider.send('eth_requestAccounts', [])
      
      const account = accounts[0]
      setAccount(account)
      setProvider(provider)
      
      const network = await provider.getNetwork()
      setChainId(Number(network.chainId))
      
      return true
    } catch (error) {
      console.error('MetaMask connection error:', error)
      if (error.code === 4001) {
        alert('用户拒绝了连接请求')
      } else {
        alert('连接失败: ' + error.message)
      }
      return false
    } finally {
      setIsConnecting(false)
    }
  }

  const connectPhantom = async () => {
    if (!window.phantom?.solana) {
      alert('请安装 Phantom 钱包!')
      window.open('https://phantom.app/', '_blank')
      return false
    }

    try {
      setIsConnecting(true)
      const resp = await window.phantom.solana.connect()
      const account = resp.publicKey.toString()
      setAccount(account)
      
      alert('Phantom 钱包连接成功!\n地址: ' + account.slice(0, 6) + '...' + account.slice(-4))
      return true
    } catch (error) {
      console.error('Phantom connection error:', error)
      alert('连接失败: ' + error.message)
      return false
    } finally {
      setIsConnecting(false)
    }
  }

  const connectOKX = async () => {
    if (!window.okxwallet) {
      alert('请安装 OKX 钱包!')
      window.open('https://www.okx.com/web3', '_blank')
      return false
    }

    try {
      setIsConnecting(true)
      const provider = new ethers.BrowserProvider(window.okxwallet)
      const accounts = await provider.send('eth_requestAccounts', [])
      
      const account = accounts[0]
      setAccount(account)
      setProvider(provider)
      
      const network = await provider.getNetwork()
      setChainId(Number(network.chainId))
      
      return true
    } catch (error) {
      console.error('OKX connection error:', error)
      if (error.code === 4001) {
        alert('用户拒绝了连接请求')
      } else {
        alert('连接失败: ' + error.message)
      }
      return false
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setAccount(null)
    setProvider(null)
    setChainId(null)
  }

  const formatAddress = (address) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const getChainName = (chainId) => {
    const chains = {
      1: 'Ethereum',
      5: 'Goerli',
      137: 'Polygon',
      56: 'BSC',
      42161: 'Arbitrum',
      10: 'Optimism',
    }
    return chains[chainId] || 'Unknown'
  }

  const value = {
    account,
    provider,
    chainId,
    isConnecting,
    connectMetaMask,
    connectPhantom,
    connectOKX,
    disconnectWallet,
    formatAddress,
    getChainName,
  }

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}

