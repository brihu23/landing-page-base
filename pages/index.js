import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/home/header.tsx'
import Features from '../components/home/features.tsx'
import Benefits from '../components/home/benefits.tsx'
import Faqs from '../components/home/faqs.tsx'
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
