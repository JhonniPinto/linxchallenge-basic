import React, { useState } from 'react'
import './Products.css'

import Product from '../Product'
import Loading from '../Loading'

import { useGet } from '../../rest/products'
import fixValue from './utils/fixValue'

const baseURL = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page='

const Products = () => {
    const [page, setPage] = useState(2)
    const [data, load] = useGet(baseURL)

    const moreProducts = () => {
        load(page)
        setPage(page + 1)
    }

    return <section className='products-container'>
        <h3 className='products-header'>Sua seleção especial</h3>
        <div className='products'>
            { data.products.map(product => {
                return <Product key={product.id}
                    image={product.image}
                    name={product.name} 
                    description={product.description}
                    oldPrice={fixValue(product.oldPrice)}
                    price={fixValue(product.price)}
                    count={product.installments.count}
                    value={fixValue(product.installments.value)}
                />
            }) }
        </div>
        {data.loading ? (
            <Loading />
        ) : (
            <span>
                <small className='load-products-error'>{data.err && 'Erro ao carregar os produtos!'}</small>
                <button onClick={moreProducts} className='more-products'>Ainda mais produtos aqui!</button>
            </span>
        )}
    </section>
}

export default Products