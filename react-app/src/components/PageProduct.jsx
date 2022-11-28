import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import ReviewSection from './MainComponents/Reviews';


const PageProduct = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Breadcrumbs />
        <MainContent />
        <ReviewSection />
        <Footer />
      </div>
    </>
  );
};

export default PageProduct;