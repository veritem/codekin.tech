import Link from 'next/link'

export default function Nav(): React.ReactElement {
    return (
        <nav className="fixed pl-20 bg-white top-0 z-10 w-full py-4 bg-white border-b border-gray-400 dark:border-opacity-10 border-opacity-20 md:bg-opacity-70 dark:bg-primary dark:bg-opacity-40 filter-blur">
            <Link href="/">
                <a className="pl-8 text-xl font-bold text-gray-900 md:pl-80 sm:pl-8 dark:text-white font-display">
                    codekin
                </a>
            </Link>
        </nav>
    )
}
