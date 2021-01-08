import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Nav(): React.ReactElement {
    const [mounted, setMounted] = useState<boolean>(false)

    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    return (
        <nav className="flex justify-between items-center">
            <div>
                <h2>CodeKin.tech</h2>
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
