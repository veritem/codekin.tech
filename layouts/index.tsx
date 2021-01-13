import Nav from '@/components/Nav'

const IndexLayout: React.FC = ({ children }): React.ReactElement => {
    return (
        <section className=" max-h-screen max-w-full">
            <Nav />
            <div className=" w-2/3 m-auto">
                <main className=" flex justify-center content-start mt-20 flex-col">
                    {children}
                </main>
            </div>
        </section>
    )
}

export default IndexLayout
