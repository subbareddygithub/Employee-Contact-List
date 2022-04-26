import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import JobInformation from "./components/JobInformation";
import PersonalInformationComponent from "./components/PersonalInformationComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div>
        <JobInformation />
      </div>
      <div>
        <PersonalInformationComponent />
      </div>
      <div>
        <br />
      </div>
      
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
