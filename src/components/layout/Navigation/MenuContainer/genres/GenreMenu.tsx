import { FC } from 'react'

import Menu from '../Menu'

import s from './GenreMenu.module.scss'
import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const { data, isLoading } = usePopularGenres()
	return isLoading ? (
		<div className={s.loader}>Loading...</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GenreMenu
