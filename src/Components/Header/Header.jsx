import React from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.css'

const Header = () => {
  const auth = localStorage.getItem('auth');

  return (
    <div className={s.header}>
 <Link className={s.header__item} to={'/'}>На главную</Link>
 <Link className={s.header__item} to={'/news'}>Новости</Link>
 <Link className={s.header__item} to={auth !== null ?'/profile':'/login'}>Профиль</Link>

    </div>
  )
}

export default Header;