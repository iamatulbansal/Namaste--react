import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearItems,removeItem } from '../redux/cartSlice'
import { IMG_CDN_LINK } from '../constant'
import deleteIcon from '../assets/img/deleteIcon.png'

const Cart = ({ ...menuItem }) => {
    const dispatch = useDispatch()
    return <div className='cursor-pointer hover:w-55 m-2 font-bold bg-green-100 shadow-lg shadow-black-100 rounded-lg w-60 p-2'>
        <img className='w-100 h-auto ' alt='' src={IMG_CDN_LINK + menuItem?.imageId} />
        <p>Name:-{menuItem?.category}</p>
        <p>price:-{menuItem?.price}</p>
        <div className='flex justify-between items-center '>
            <p>Subname:-{menuItem?.name}</p>
            <img alt='' src={deleteIcon} className='w-8 float-right' onClick={() => {
                dispatch(removeItem(menuItem))
            }} />
        </div>

    </div>
}
const CartPage = () => {
    const cart = useSelector(state => state.cart.items) //Subscribe cart data
    const dispatch = useDispatch()

    if (cart.length === 0) return <h1>Don't Have any item in our card</h1>
    return (
        <div className='py-2 w-100 h-auto bg-slate-400'>
            <div className=' text-4xl font-bold text-gray-900  px-2'>Menu Card <button className='text-lg bg-red-500 rounded-lg p-2 ' onClick={() => dispatch(clearItems())}>Remove All Cart</button></div>
            <div className='flex flex-wrap justify-start items-center gap-5'>
                {cart?.map(menuItem => <Cart key={menuItem?.id} {...menuItem} />)}

            </div>
        </div>
    )
}

export default CartPage 