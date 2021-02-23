import "../App.scss";
import Top from '../components/Title'
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";


function Home() {
  return (
    <div className="App">
      <Top/>
      <ProjectsSection/>
      <Footer />
    </div>
  );
}
export default Home;
