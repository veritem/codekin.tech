import Nav from '@/components/Nav'
import { NextPage } from 'next'

const IndexLayout: NextPage = ({ children }) => {
    return (
        <section className="max-h-screen max-w-full">
            <Nav />
            <div className="w-full sm:w-full md:w-2/3 m-auto relative">
                <main className="flex px-6 md:px-0 sm:px-8 justify-center content-start mt-20 mb-8 flex-col">
                    {children}
                </main>
            </div>
        </section>
    )
}

export default IndexLayout
