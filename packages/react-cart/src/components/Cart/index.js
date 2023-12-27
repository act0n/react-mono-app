import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import Count from '../Count'
import './index.scss'
import { clearCart, decreaseCount, increaseCount } from '../../store/modules/takeaway'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartList: cart } = useSelector((state) => state.foods)
  const enable = cart.length > 0
  const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0)

  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div className={classNames('cartOverlay')} />
      <div className="cart">
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        <div className={classNames('icon', enable && 'fill')}>
          {enable && <div className="cartCornerMark">{cart.length}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {totalPrice.toFixed(2)}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {enable ? <div className="goToPreview">去结算</div> : <div className="minFee">¥20起送</div>}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={classNames('cartPanel', enable && 'visible')}>
        <div className="header">
          <span className="text">购物车</span>
          <span className="clearCart" onClick={() => dispatch(clearCart())} >清空购物车</span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {cart.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    count={item.count}
                    onPlus={() => dispatch(increaseCount(item.id))}
                    onMinus={() => dispatch(decreaseCount(item.id))}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
