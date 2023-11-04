import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'

export default function Root() {
  const navigation = useNavigation()

  return (
    <>
      <Header
        logo='..src/assets/react.svg'
        links={[
          { title: 'Home', route: '/' },
          { title: 'Shop', route: '/shop' },
          {
            title: <span className='material-symbols-outlined'>shopping_cart</span>,
            route: '/cart',
          },
        ]}
      />
      <div id='detail' className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </>
  )
}
