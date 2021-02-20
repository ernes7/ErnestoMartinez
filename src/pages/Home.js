import "../App.scss";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      Ernesto Martinez
      <Link to="/about">
        {" "}
        <Button title={"LinkedIn"} />
      </Link>
      <Footer />
    </div>
  );
}
export default Home;
