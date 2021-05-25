import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/actions/cartActions'
import { useDispatch } from 'react-redux'

export default function ProductCard({product}) {

    const dispatch = useDispatch()
    const add = () => {    

        dispatch(addToCart(product))
    } 


    return (
        <div className="col mb-4">
            <div className="card">
                <div className="view overlay">
                    <img className="card-img-top" src={ product.image } alt="Product Image" />
                    <Link to={`/products/details/${product._id}`}>
                    <div className="mask rgba-white-slight"></div>
                    </Link>
                </div>

                <div className="card-body">
                    <h4 className="card-title"> { product.name } </h4>

                    <p className="card-text">{ product.shortDescription }</p>
                    <p className="card-text">{ product.price } SEK</p>

                    <Link to={`/products/details/${product._id}`} className="btn btn-green btn-md blue-gradient">Visa Produkt</Link>
                    <button className="btn btn-black btn-md" onClick={add}>
                    <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i>KÖP</button>
                </div>
            </div>
        </div>
    )
}
