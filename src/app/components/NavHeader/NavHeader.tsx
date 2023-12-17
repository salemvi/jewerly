
'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navHeader.module.scss';
import cn from 'classnames';

export const NavHeader = () => {
    const pathname = usePathname();

    const navigation = [
        {
            name: 'Shop',
            href: '/shop'
        },
        {
            name: 'Blog',
            href: '/blog'
        },
        {
            name: 'Our Story',
            href: '/story'
        },
    ];

    return (
        <>
            {navigation.map((item, i) => (
                <Link
                href={item.href}
                key={i}
                className={cn(styles.link, 
                    pathname.includes(item.href) ? styles.selected : ''
                    )}
                >
                {item.name}
                </Link>
            ))}
        </>
    );
}