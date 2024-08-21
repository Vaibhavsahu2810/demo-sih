import Discover from "./components/discover";
import Encourage from "./components/encourage";
import Footer from "./components/footer";
import { Goal } from "./components/goal";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Intro } from "./components/intro";
import Navbar from "./components/navbar";
import Newsteller from "./components/newsteller";
import Ratings from "./components/ratings";
import Roadmap from "./components/roadmap";
import { Services } from "./components/services";

export default function frontPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Intro />
      <Goal />
      <Services />
      <Encourage />
      <Discover />
      <Ratings />
      <Newsteller />
      <Roadmap />
      <Footer/>
    </>
  );
}
