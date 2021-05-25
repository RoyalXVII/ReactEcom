import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCatalog } from '../../store/actions/productCatalogActions'
import ProductCard from './ProductCard'

export default function ProductCardDeck() {
    const dispatch = useDispatch()
    const productCatalog = useSelector(state => state.productCatalog)

    useEffect(() => {
        dispatch(getProductCatalog())
    },[dispatch])

    return (
        <div className="row row-cols-1 row-cols-md-3">
        {
            productCatalog.map(product => {
                return <ProductCard key={product._id} product={product} />
            })
        }
    </div>
    )
}



