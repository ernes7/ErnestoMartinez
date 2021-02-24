import "../App.scss";
import Top from "../components/Title";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import CompaniesSection from "../sections/CompaniesSection";
import CareerHighlights from "../sections/CareerHighlights";

function Home() {
  return (
    <div className="App">
      <Top />
      <CompaniesSection />
      <ProjectsSection />
      <CareerHighlights />
      <Footer />
    </div>
  );
}
export default Home;
