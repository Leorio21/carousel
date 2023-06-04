import Image from 'next/image'
import styles from './page.module.css'
import Carousel from './Carousel/Carousel'

export default function Home() {

const data = [
  "/1.JPG",
  "/2.JPG",
  "/3.JPG",
  "/4.JPG",
  "/5.JPG",
  "/6.JPG",
  "/7.JPG"
]

  return (
    <>
    <Carousel inData={data}/>
    </>
  )
}
