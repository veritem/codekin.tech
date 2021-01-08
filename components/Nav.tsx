import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav(): React.ReactElement {
    const [mounted, setMounted] = useState<boolean>(false)

    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    return (
        <nav className=" sticky z-10 top-0 flex dark:bg-primary-dark bg-opacity-60  justify-between items-center">
            <div>
                <Link href="/">
                    <a className=" dark:text-white">codeKin.tech</a>
                </Link>
            </div>
            <div className=" flex justify-between items-center">
                {mounted && (
                    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {theme === 'dark' ? 'change to light theme' : 'change to dark theme'}
                    </button>
                )}
                <p>theme</p>

                <p>About us</p>
            </div>
        </nav>
    )
}
