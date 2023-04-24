import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/images/logo.png'

import s from './Logo.module.scss'

const Logo = () => {
	return (
		<Link className={s.logo} href="/">
			<Image src={logo} width={70} height={70} alt="Logo" />
			<h2>Cinema Next</h2>
		</Link>
	)
}

export default Logo
