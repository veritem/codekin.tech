import Nav from '@/components/Nav'

const IndexLayout: React.FC = ({ children }): React.ReactElement => {
    return (
        <section className="bg-white dark:bg-primary-dark h-screen w-screen">
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
