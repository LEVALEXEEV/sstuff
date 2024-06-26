import Footer from "../components/footer";
import FullSizeTable from "../components/full-size-table";
import Header from "../components/header";
import SizesTable from "../components/sizes-table";
import { SizesTables } from "../data";

function SizesPage(): JSX.Element {
    const showTable = (evt: React.MouseEvent) => {

        const element = document.getElementById('sizes-table-full-image__show');
        if (element) {
            element.classList.add('sizes-table-full-image__show');
        }
        const body = document.getElementsByTagName('body');
        if (body) {
            body[0].classList.add('body_overflow__hidden');
        }
    }
    return (
    <>
        <div className="sizes-page">
            <Header/>
            <section className="main__wrap-sizes">
                <ul className="catalog">
                    {SizesTables.map((item) => (
                        <li key={item.type} onClick={(evt) => {showTable(evt)}}>
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
