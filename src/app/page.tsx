import Banner from "@/components/Banner";
import CarouselReviews from "@/components/carousels/CarouselReviews";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ShowCase from "@/components/ShowCase";
import { Flex } from "antd";


export default function Home() {
  return (
    <Flex vertical gap={20}>
      <header className="w-full flex flex-col gap-5">
        <Banner />
        <Navbar />
      </header>
      <Hero />
      <ShowCase />
      <Categories />
      <CarouselReviews />
      <footer>
        <Footer />
      </footer>
    </Flex>
  );
}
