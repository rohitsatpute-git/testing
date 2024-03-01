import React from 'react'
import './Products.css'
function Products() {
  return (
    <div className='pcontainer'>
        <div className='product'>
            <img></img>
            <div className='p-detail'>
                <div className='name'>Product Name</div>
                <div className='price'>80</div>
            </div>
        </div>
        <div className='product'>
        <img></img>
            <div className='p-detail'>
                <div className='name'>Product Name</div>
                <div className='price'>80</div>
            </div>
        </div>
        <div className='product'>
        <img></img>
            <div className='p-detail'>
                <div className='name'>Product Name</div>
                <div className='price'>80</div>
            </div>
        </div>
        <div className='product'>
        <img></img>
            <div className='p-detail'>
                <div className='name'>Product Name</div>
                <div className='price'>80</div>
            </div>
        </div>
        <div className='product' id='last'>
        <img></img>
            <div className='p-detail'>
                <div className='name'>Product Name</div>
                <div className='price'>80</div>
            </div>
        </div>
    </div>
  )
}

export default Products
