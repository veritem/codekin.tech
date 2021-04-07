import Link from 'next/link'

export default function Footer() {
    const YEAR = new Date().getFullYear()
    return (
        <section className="mx-12 mb-8">
            <div className=" flex justify-between flex-col sm:flex-col md:flex-row gap-6 items-center">
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
