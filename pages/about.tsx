import Head from 'next/head'
import Container from '@/layouts/index'

export default function about(): React.ReactElement {
    return (
        <>
            <Head>
                <title>About - codeKin</title>
            </Head>
            <Container>
                <h1 className=" text-xl mt-5 mb-5 text-center font-bold font-display dark:text-white">
                    About codeKin.tech
                </h1>
                <p className=" font-body mb-10 dark:text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod,
                    officiis laboriosam natus tenetur dolores, maxime consectetur, totam in maiores
                    reprehenderit dolore odio qui neque assumenda debitis suscipit. Consequatur,
                    nam.
                </p>

                <p className="dark:text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, molestiae
                    commodi quas ut earum quasi rem similique dolores, fugit eos repellat adipisci
                    corrupti ad sed totam minus reiciendis impedit deserunt.
                </p>
            </Container>
        </>
    )
}
