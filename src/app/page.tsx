import HeroSection from "@/components/HeroSection"
import ProductCard from "./flavors/page"
import About from "./about/page"
import Contact from "./contact/page"

export default function Home(){
  return(
    <div>
      <HeroSection/>
      <ProductCard/>
      <About/>
      <Contact/>
    </div>
  )
}