import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return <header className='header'>
        <div className='headers-container'>
            <p className='firstH'>uma seleção de produtos</p>
            <p className='secondH'>especial para você</p>
        </div>
        <p className='paragraph'>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
        <nav className='navigation'>
            <Link to='/' className='nav-button'>Conheça a Linx</Link>
            <Link to='/' className='nav-button'>Ajude o algoritmo</Link>
            <Link to='/' className='nav-button'>Seus produtos</Link>
            <Link to='/' className='nav-button'>Compartilhe</Link>
        </nav>
    </header>
}

export default Header