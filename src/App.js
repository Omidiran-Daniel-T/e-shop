import "./App.css";
import Header from "./components/header";
import TopNav from "./components/top-navBar";

import ImageSlider from "./components/image-slider-carousel";

import PhoneImage from "./images/iPhone-11-PNG-Transparent-HD-Photo.png";
import BestSeller from "./components/bestSeller";
import Ads from "./components/ads";
import Services from "./components/services";
import Footer from "./components/footer";

function App() {
  const data = [
    { title: "IPHONES", imageSrc: PhoneImage },
    {
      title: "IPADS",
      imageSrc:
        "https://www.pngall.com/wp-content/uploads/5/Apple-iPad-PNG-Free-Download.png",
    },
    {
      title: "MACBOOKS",
      imageSrc: PhoneImage,
    },
    {
      title: "ACCESORIES",
      imageSrc:
        "https://www.pngall.com/wp-content/uploads/5/Apple-iPad-PNG-Free-Download.png",
    },
  ];
  return (
    <div className="App">
      <Header />
      <TopNav />
      <ImageSlider data={data} />
      <BestSeller />
      <Ads />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
