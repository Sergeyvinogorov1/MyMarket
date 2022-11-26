import useImportScript from "./hooks/useImportScript";
import PageProduct from "./components/PageProduct";

function App () {
    useImportScript("./page-product.js");

    return (
        <div className="font">
            <PageProduct />
        </div>
    );
}

export default App;