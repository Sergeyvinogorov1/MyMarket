import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import Form from './Form';


const PageProduct = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Breadcrumbs />
        <MainContent />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default PageProduct;