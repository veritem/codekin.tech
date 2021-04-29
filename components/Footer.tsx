import Link from 'next/link'

export default function Footer() {
    const YEAR = new Date().getFullYear()
    return (
        <section className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:grid-cols-2 flex-wrap">
                <p className="text-gray-800 dark:text-gray-200">
                    <Link href="https://github.com/codekinHQ">
                        <a>Github</a>
                    </Link>
                </p>
                <p className="text-gray-800 dark:text-gray-200">About</p>
                <p className="text-gray-800 dark:text-gray-200">Contact</p>
                <p className="text-gray-800 dark:text-gray-200">&copy; {YEAR}</p>
            </div>
        </section>
    )
}
