import HeroSection from "../Components/Goodness/HeroSection";
import TrustBar from "../Components/Goodness/TrustBar";
import ProductList from "../Components/Goodness/ProductList";
import Process from "../Components/Goodness/Process";
import Story from "../Components/Goodness/Story";
import NewsLetter from "../Components/Goodness/NewsLetter";

const GoodnessPage = () => {
  return (
    <main className="overflow-hidden bg-[#FFF8EB]">
      <HeroSection />
      <TrustBar />
      <ProductList />
      <Process />
      <Story />
      <NewsLetter />
    </main>
  );
};

export default GoodnessPage;
