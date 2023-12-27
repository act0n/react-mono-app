import classNames from 'classnames'
import './index.scss'
import { setActiveIndex } from '../../store/modules/takeaway'
import { useDispatch, useSelector } from 'react-redux'

const Menu = ({ foodsList = [] }) => {
  const dispatch = useDispatch()
  const menus = foodsList.map((item) => ({ tag: item.tag, name: item.name }))
  const { activeIndex } = useSelector((state) => state.foods)
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            className={classNames('list-menu-item', activeIndex === index && 'active')}
            onClick={() => dispatch(setActiveIndex(index))}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
