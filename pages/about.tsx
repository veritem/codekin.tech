import Container from '@/layouts/index'
import { NextSeo } from 'next-seo'

export default function about(): React.ReactElement {
    const SEO = {
        title: 'About codekin',
        description: 'why codekin'
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Container>
                <h1 className=" text-4xl mt-12 mb-12 text-center font-bold font-display dark:text-white">
                    About codeKin.tech
                </h1>
                <p className=" font-body mb-10 dark:text-white">
                    Codekin.tech is a website that was born due to love of coding and open source
                    software, this website serves as a side book for my notes while exploring what i
                    Love the most which is programing, i think you will get a ton of value into this
                    site
                </p>
                <p className="dark:text-white">
                    My Goals is simple, Explaining programming topics in way that make sense to any
                    one.
                </p>
            </Container>
        </>
    )
}
