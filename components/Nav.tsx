import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav(): React.ReactElement {
    const [mounted, setMounted] = useState<boolean>(false)

    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    return (
        <div className="fixed inset-x-0 top-0 h-16">
            <nav className="w-full flex  bg-opacity-80 justify-around items-center pt-2 pb-2">
                <div>
                    <Link href="/">
                        <a className=" dark:text-white font-display capitalize font-bold text-xl">
                            codekin.tech
                        </a>
                    </Link>
                </div>
                <div className=" flex justify-between gap-10 items-center">
                    {mounted && (
                        <button
                            aria-label="Left Align"
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
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
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
        </div>
    )
}
