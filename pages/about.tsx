import Head from 'next/head'
import Container from '@/layouts/index'

const about: React.FC = (): React.ReactElement => {
    return (
        <>
            <Head>
                <title>About - codeKin</title>
            </Head>
            <Container>
                <h1>About codeKin.tech</h1>
            </Container>
        </>
    )
}
