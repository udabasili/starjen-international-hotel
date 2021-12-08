import { useEffect } from "react";
import Head from 'next/head'
import AboutSection from '../components/homepage/about-section.component'
import GallerySection from '../components/homepage/gallery-section.component'
import Header from '../components/homepage/header.component'
import ReviewSection from '../components/homepage/review-section.component'
import RoomSection from '../components/homepage/room-section.component'
import ServiceSection from '../components/homepage/service-section.component'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <title>Home</title>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
                    <meta name="description" content="We welcome you to an oasis of luxury strategically located in the heart of Lagos financial hub, STARJEN – a unique brand with impeccable services and facilities that gives laudable comfort to you and your guests. Starjen hotels has cozy suites strategically positioned to meet your needs for lodging. Located along Lagos – Badagry Expressway"></meta>
                    <meta name="keywords" content="Starjen Hotels, Starjen International Hotel, Great Lagos Hotel, Good Lagos Hotel. Badagary Express"></meta>
                    <meta name="author" content="Starjen International Hotel"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Righteous&display=swap" rel="stylesheet"/>       
      </Head>
      <div className="content content--homepage">
        <Header/>
        <AboutSection/>
        <RoomSection/>
        <ServiceSection/>
        {/* <ReviewSection/> */}
        <GallerySection/>
      </div>
    </>
  )
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
