import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Review from './Components/Review';
import MagicSection from './Components/MagicSection';
import Apply from './Components/Apply';
import PLugin from './Components/PLugin';
import Footer from './Components/Footer';
import Fluid from './Components/fluid';
import './assets/stylesheet/application.css'
function App() {
  return (
    <>
      {/* <Fluid></Fluid> */}
    <HomePage></HomePage>
    <Review></Review>
    <MagicSection></MagicSection>
    <Apply></Apply>
    <PLugin></PLugin>
    <Footer></Footer>
    </>
  );
}

export default App;
