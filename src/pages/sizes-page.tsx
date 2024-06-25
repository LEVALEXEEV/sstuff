import Footer from "../components/footer";
import FullSizeTable from "../components/full-size-table";
import Header from "../components/header";
import SizesTable from "../components/sizes-table";
import { SizesTables } from "../data";

function SizesPage(): JSX.Element {
    return (
    <>
        <div className="sizes-page">
            <Header/>
            <section className="main__wrap-sizes">
                <ul className="catalog">
                    {SizesTables.map((item) => (
                        <li key={item.type}>
                            <SizesTable
                                previewImage={item.previewImage} 
                                title={item.type}
                            />
                        </li>    
                    ))}
                </ul>
            </section>
            <Footer/>
        </div>
        <FullSizeTable />
    </>
      
    );
}

export default SizesPage;
