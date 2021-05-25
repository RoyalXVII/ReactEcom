import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Nothing interesting to see here...</p>
            <div>
                <Link to="/products" className="btn blue-gradient btn-md nav-item">
                <i className="fas fa-shopping-cart mr-2" ></i> Go to Products</Link>
            </div>
        </div>
    )
}
