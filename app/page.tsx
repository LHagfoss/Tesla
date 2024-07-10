import Navbar from "@components/Navbar"
import SectionOne from "@sections/SectionOne"
import SectionTwo from "@sections/SectionTwo"
import SectionThree from "@sections/SectionThree"
import Cybertruck from "@sections/Cybertruck";
import Panel from "@sections/Panel";
import SolarRoof from "@sections/SolarRoof";
import Powerwall from "@sections/Powerwall";
import Accessories from "@sections/Accessories";
import Footer from "@sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Cybertruck />
      <Panel />
      <SolarRoof />
      <Powerwall />
      <Accessories />
      <Footer />
    </>
  );
}
