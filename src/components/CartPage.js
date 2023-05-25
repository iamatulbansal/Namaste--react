import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_LINK } from '../constant'

const Cart = ({ ...menuItem }) => {
    return <div className='cursor-pointer hover:w-55 m-2 font-bold bg-green-100 shadow-lg shadow-black-100 rounded-lg w-60 p-2'>
        <img className='w-100 h-auto ' alt='' src={IMG_CDN_LINK + menuItem?.imageId} />
        <p>Name:-{menuItem?.category}</p>
        <p>price:-{menuItem?.price}</p>
        <p>Subname:-{menuItem?.name}</p>
    </div>
}
const CartPage = () => {
    const cart = useSelector(state => state.cart) //Subscribe cart data
    console.log(cart)
    if (cart.length === 0) return <h1>Don't Have any item in our card</h1>
    return (
        <div className='py-2 w-100 h-auto bg-slate-400'>
            <h1 className='text-4xl font-bold text-gray-900  px-2'>Menu Card</h1>
            <div className='flex flex-wrap justify-start items-center gap-5'>
                {cart?.map(menuItem => <Cart key={menuItem?.id} {...menuItem} />)}

            </div>
        </div>
    )
}

export default CartPage 