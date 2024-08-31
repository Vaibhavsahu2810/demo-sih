import Discover from "./components/discover";
import Encourage from "./components/encourage";
import { Goal } from "./components/goal";
import { Heade } from "./components/heade";
import { Hero } from "./components/hero";
import { Intro } from "./components/intro";
import Navbar from "./components/navbar";
import Newsteller from "./components/newsteller";
import Ratings from "./components/ratings";
import Roadmap from "./components/roadmap";
import { Services } from "./components/services";
import Team from "./components/Team";
export default function frontPage() {
  return (
    <>
      <Heade />
      <Hero />
      <Intro />
      <Goal />
      <Services />
      <Encourage />
      <Discover />
      <Ratings />
      <Newsteller />
      <Team />
      <Roadmap />
    </>
  );
}
