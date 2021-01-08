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
            <div className=" flex justify-between gap-4 items-center">
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
                            // stroke="currentColor"
                            className="text-gray-800 dark:text-gray-200">
                            {theme === 'dark' ? (
                                <>
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                                </>
                            ) : (
                                <>
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
                                </>
                            )}
                        </svg>
                    </button>
                )}
            </div>
        </nav>
    )
}
