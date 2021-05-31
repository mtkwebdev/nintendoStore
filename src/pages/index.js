import React from 'react'
import '../static/styles/globalStyles.scss'
import Layout from '../Components/Layout/Layout'
import Hero from '../Components/Hero/Hero'
import MainPage from '../Components/Layout/Home/MainPage'

function index() {
  return (
    <div >
    <Layout>
    <Hero ></Hero>
    <MainPage></MainPage>
    </Layout>
    </div>
  )
}

export default index
