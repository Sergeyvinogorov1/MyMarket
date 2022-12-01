import Breadcrumbs from './Breadcrumbs';
import MainContent from './MainContent';
import ReviewSection from './MainComponents/Reviews';


const PageProduct = () => {
  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <MainContent />
        <ReviewSection />
      </div>
    </>
  );
};

export default PageProduct;