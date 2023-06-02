import './CartWidget.css'
import cart from './img/cart.png'
import { useContext } from 'react' 
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom' 


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return (
        <Link to='/cart' className='Cartwidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img className='CartImg' src={cart} alt='cart-wdiget'/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;