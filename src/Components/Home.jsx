import React from 'react'
import Hero from './Hero'
import { Research } from './Research'
import { RecentSum } from './RecentSum'
import { Pricing } from './Pricing'
import { Features } from './Features'
import CTA from './CTA'


export const Home = () => {
  return (
    <div>
        <Hero/>
        <Research/>
        <RecentSum/>
        <Features/>    
        <Pricing/>
        <CTA/>
    </div>
  )
}
