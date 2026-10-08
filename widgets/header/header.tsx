"use client"

import styles from "./header.module.css"
import Link from "next/link";

export const Header = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href="/" className={styles.link}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link href="/profile" className={styles.link}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/profile/123" className={styles.link}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}