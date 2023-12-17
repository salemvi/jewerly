import Image from 'next/image';
import Link from 'next/link';
import {NavHeader} from '../NavHeader/NavHeader';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <Link href='/'>
                <h1 className={styles.logo}>
                    <span>J</span>EWERLY
                </h1>
            </Link>
            <div className={styles.menuWrapper}>
                <NavHeader/>
                <div className={styles.line}></div>
                <Link href='/' className={styles.navIcon}>
                    <Image src='/image/search.svg' width={19} height={19} alt='search' />
                </Link>
                <Link href='/' className={styles.navIcon}>
                    <Image src='/image/cart.svg' width={19} height={19} alt='basket of goods' />
                </Link>
                <Link href='/' className={styles.navIcon}>
                    <Image src='/image/user.svg' width={19} height={19} alt='user page' />
                </Link>
            </div>
        </header>
    );
}
export default Header
