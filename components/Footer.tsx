export default function Footer() {
    const YEAR = new Date().getFullYear()
    return (
        <>
            <div className="border-gray-100 dark:border-gray-800"></div>
            <div className=" flex justify-between">
                <p className="text-gray-800 dark:text-gray-200">Github</p>
                <p className="text-gray-800 dark:text-gray-200">About</p>
                <p className="text-gray-800 dark:text-gray-200">Contact</p>
                <p className="text-gray-800 dark:text-gray-200">&copy; {YEAR}</p>
            </div>
        </>
    )
}
