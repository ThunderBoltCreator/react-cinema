import Logo from './Logo/Logo'
import MenuContainer from './MenuContainer/MenuContainer'
import s from './Navigation.module.scss'

const Navigation = () => {
	return (
		<div className={s.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
