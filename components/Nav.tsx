import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav(): React.ReactElement {
    const [mounted, setMounted] = useState<boolean>(false)

    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    return (
        <nav className="sticky-nav flex dark:bg-primary-dark bg-opacity-60  justify-around items-center pt-2 pb-2">
            <div>
                <Link href="/">
                    <a className=" dark:text-white font-display capitalize font-bold text-xl">
                        codeKin.tech
                    </a>
                </Link>
            </div>
            <div className=" flex justify-between gap-10 items-center">
                <Link href="/">
                    <a className=" font-display dark:text-white text-primary">Home</a>
                </Link>

                <Link href="/about">
                    <a className=" font-display dark:text-white text-primary">About</a>
                </Link>

                {mounted && (
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="bg-gray-200 dark:bg-gray-800 rounded px-2 py-1 h-10 w-10 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="text-gray-800 dark:text-gray-200">
                            {theme === 'dark' ? (
                                <>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </>
                            ) : (
                                <>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </>
                            )}
                        </svg>
                    </button>
                )}
            </div>
        </nav>
    )
}
