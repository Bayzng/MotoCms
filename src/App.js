import './App.css';
import Navbar from './Component/NAVBAR/Navbar';
import Intro from './Component/INTRO/Intro';
import SectionOne from './Component/SECTION/SectionOne';
import Newsletter from './Component/NEWSLETTER/Newsletter';
import Mypost from './Component/MYPOST/Mypost';
import SectionTwo from './Component/SECTION/SectionTwo';
import SectionThree from './Component/SECTION/SectionThree';
import Footer from './Component/FOOTER/Footer';
import Basic from './Component/BASIC/Basic';



function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <SectionOne/>
      <Newsletter/>
      <Mypost/>
      <SectionTwo/>
      <SectionThree/>
      <Basic/>
      <Footer/>
    </>
  );
}

export default App;
