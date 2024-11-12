import Banner from "@/components/Banner";
import CarouselReviews from "@/components/CarouselReviews";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import ShowCase from "@/components/ShowCase";


export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <Partners />
      {/* <ShowCase /> */}
      {/* <ShowCase /> */}
      {/* <Categories /> */}
      <CarouselReviews />
      {/* <Footer /> */}

    </div>
  );
}
