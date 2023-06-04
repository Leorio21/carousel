import Image from 'next/image'
import styles from './page.module.css'
import Carousel from './Carousel/Carousel'

export default function Home() {

const data = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg"
]

  return (
    <>
    <Carousel inData={data}/>
    </>
  )
}
