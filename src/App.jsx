import Header from "./components/Header.jsx";
import LanguageSelector from "./components/LanguageSelector.jsx";
import ContactSection from "./pages/contact/ContactSection.jsx";
import PricingPage from "./pages/pricing/PricingPage.jsx";
import Home from "./pages/hero/Home.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {


    return (
        <div>
            <Header />
            <Home />
            <PricingPage/>
            <ContactSection/>
            <Footer/>
            <LanguageSelector/>
        </div>
    );
};

export default App;