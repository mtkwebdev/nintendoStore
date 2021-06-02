import React from 'react'
import '../static/styles/globalStyles.scss'
import Layout from '../Components/Layout/AllPages/Layout'
import Hero from '../Components/Layout/Main/Hero/Hero'
import MainPage from '../Components/Layout/Main/MainPage'

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
