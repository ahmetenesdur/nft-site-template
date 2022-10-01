import type { NextPage } from "next"
import React from "react"
import FAQ from "../components/FAQ"
import Feature from "../components/Feature"
import FeatureReverse from "../components/FeatureReverse"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import RoadMap from "../components/RoadMap"
import Team from "../components/Team"
import { features } from "../constants/constants"

const Home: NextPage = () => {
  return (
    <main className="w-full pt-24">
      <Hero />
      <Gallery />
    </main>
  )
}

export default Home
