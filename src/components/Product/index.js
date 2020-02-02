import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({image, name, description, oldPrice, price, count, value}) => {
    
    description = description.length > 160 ? description.substr(0, 159) + '...' : description

    return <div className='product'>
        <img src={image} alt={`${name}`}></img>
        <p className='product-name'>{name}</p>
        <p className='product-description'>{description}</p>
        <p className='product-oldPrice'>De: R${oldPrice}</p>
        <p className='product-price'>Por: R${price}</p>
        <p className='product-installments'>ou: {count}x de R${value}</p>
        <Link to='/' className='buy-button'>Comprar</Link>
    </div>
}

export default Product