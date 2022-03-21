import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/home/Header.tsx'
import Features from '../components/home/Features.tsx'
import Benefits from '../components/home/Benefits.tsx'
import Faqs from '../components/home/Faqs.tsx'
import Testimonials from '../components/home/Testimonials.tsx'

export default function Home() {
  return (
    <>
    <Header />
    <Benefits />
    <Features />
    <Faqs />
    <Testimonials />
    </>
  )
}
