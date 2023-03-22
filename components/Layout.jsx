import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from './header/Header'
import Footer from './footer/Footer'
import * as consult from './../services/ConsultServices'
import LoadingMain from './loading/LoadingMain'
import WhatsappMessage from './contact/WhatsappMessage'

const Layout = ({ children }) => {
    const [dataCompany, setDataCompany] = useState({})
    const [loadDataCompany, setLoadDataCompany] = useState(true)

    useEffect(() => {
        let isSubscribed = true
        const getDataCompany = async () => {
            try {
                const res = await consult.getAllData('empresa')
                if (res.status === 200) {
                    setDataCompany(res.data.data.attributes)
                }
            } catch (error) {
                console.log(error)
            }
            setLoadDataCompany(false)
        }

        if (isSubscribed) {
            setLoadDataCompany(true)
            getDataCompany()
        }

        return () => {
            isSubscribed = false
        }
    }, [])

    return (
        <>
            <Head>
                <title>Epic Travel Bolivia</title>
                {/* <!-- Primary Meta Tags --> */}
                <meta name="title" content="Epic Travel Bolivia" />
                <meta name="description" content="We are a company dedicated professionally and commercially exclusively to the exercise of mediation and/or organization of tourist services, using our own means to provide them" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.epicbolivia.travel/%22%3E" />
                <meta property="og:title" content="Epic Travel Bolivia" />
                <meta property="og:description" content="We are a company dedicated professionally and commercially exclusively to the exercise of mediation and/or organization of tourist services, using our own means to provide them" />
                <meta property="og:image" content="" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.epicbolivia.travel/%22%3E" />
                <meta property="twitter:title" content="Epic Travel Bolivia" />
                <meta property="twitter:description" content="We are a company dedicated professionally and commercially exclusively to the exercise of mediation and/or organization of tourist services, using our own means to provide them" />
                <meta property="twitter:image" content=""></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                loadDataCompany ? <LoadingMain /> : <>
                    <WhatsappMessage
                        dataCompany={{ state: dataCompany }}
                    />
                    <Header
                        dataCompany={{ state: dataCompany }}
                    />
                    {{ ...children, props: { ...children.props, dataCompany } }}
                    <Footer
                        dataCompany={{ state: dataCompany }}
                    />
                </>
            }
        </>
    )
}

export default Layout
