import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';


const PageProduct = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Breadcrumbs />
        <MainContent />
        <Footer />
      </div>
    </>
  );
};

export default PageProduct;