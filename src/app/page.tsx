import CarouselReviews from "@/components/carousels/CarouselReviews";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import ShowCaseCarouselsContainer from "@/components/ShowCaseCarouselsContainer";
import { Flex } from "antd";


export default function Home() {
  return (
    <Flex vertical gap={20}>
      <Hero />
      <ShowCaseCarouselsContainer />
      <Categories />
      <CarouselReviews />
    </Flex>
  );
}
