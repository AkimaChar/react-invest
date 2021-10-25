import React from 'react'
import Footer from './components/Footer.jsx';
import SideMenu from './components/SideMenu.jsx';
import TrendingCoins from './pages/trendingCoins/TrendingCoins.jsx';
import './style/desktop/stylesheet.css'
import './style/mobile/style.css'

export default function App() {
	return (
		<div>
			<SideMenu />
			<TrendingCoins />
			<Footer />
		</div>
	)
}

