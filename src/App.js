import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import PricingPage from "./Pricing/PricingPage";
import SolutionsPage from "./Solutions/SolutionsPage";
import PrivacyPolicy from "./PrivacyPolicy";
import IntegrationsPage from './Integrations/IntegrationsPage';
import BlogsPage from "./Blog/BlogPage";
import Blog from "./Blog/Blog";
import ContactUsPage from "./Contact/ContactUsPage";
import DemoCallPage from "./DemoCall/DemoCallPage";
import TermsAndConditions from "./TermsAndConditions";
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element ={<PricingPage/>} />
        <Route path="/solutions" element ={<SolutionsPage/>}/>
        <Route path="/privacy-policy" element ={<PrivacyPolicy/>}/>
        <Route path="/integration" element ={<IntegrationsPage/>}/>
        <Route path="/blog" element ={<BlogsPage/>}/>
        <Route path="/blog/:id" element={<Blog/>} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/demo" element={<DemoCallPage/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
