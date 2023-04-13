import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import localFont from "@next/font/local"
import "@fortawesome/fontawesome-free/css/all.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../styles/style.css"
import "./../styles/Loading.css"
import "./../styles/HeaderNavbar.css"
import "./../styles/HeaderMedia.css"
import "./../styles/Services.css"
import "./../styles/Tours.css"
import "./../styles/Blog.css"
import "./../styles/KnowUs.css"
import "./../styles/Contact.css"
import "./../styles/Reviews.css"
import "./../styles/Footer.css"
import "react-datetime/css/react-datetime.css"
import Layout from "./../components/Layout"
import Script from "next/script"

const myFont = localFont({
	src: [
		{
			path: "./../public/fonts/GinóraSansRegular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./../public/fonts/GinóraSansOblique.otf",
			weight: "400",
			style: "oblique",
		},
		{
			path: "./../public/fonts/GinóraSansBold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./../public/fonts/GinóraSansBoldOblique.otf",
			weight: "700",
			style: "oblique",
		},
	],
})
// console.log(myFont)

export default function App({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js")
		const languaje = localStorage.getItem("lan_w")
		if (!languaje) {
			const languaje_str = navigator.language || navigator.userLanguage
			const languaje_use = languaje_str.substring(0, 2)
			localStorage.setItem("lan_w", languaje_use)
		}
	}, [])

	return (
		<>
			<main className={myFont.className}>
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-VX4443RDJP"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VX4443RDJP');
        `}
				</Script>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</>
	)
}
