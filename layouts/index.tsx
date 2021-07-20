import Nav from '@/components/Nav'
import { NextPage } from 'next'

const IndexLayout: NextPage = ({ children }) => {
    return (
        <section className="max-h-screen max-w-full">
            <Nav />
            <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 m-auto relative">
                <main className="flex flex-col content-center justify-center px-8 mt-20 mb-8 md:px-36 sm:px-8 sm:pr-8">
                    {children}
                </main>
            </div>
        </section>
    )
}

export default IndexLayout
