import Nav from '@/components/Nav'

const IndexLayout: React.FC = ({ children }): React.ReactElement => {
    return (
        <section className="bg-white dark:bg-primary-dark">
            <Nav />
            <main>{children}</main>
        </section>
    )
}

export default IndexLayout
