import Footer from "../components/footer";
import Header from "../components/header";
import Item from "../components/item";
import { Items } from "../data";

function CatalogPage(): JSX.Element {
    return (
      <>
        <Header/>
        <section className="main__wrap-catalog">
            <ul className="catalog">
                {Items.map((item) => (
                    <li key={item.id}>
                        <Item
                            previewImage={item.previewImages[0]} 
                            price={item.price} 
                            id={item.id} 
                            title={item.title} 
                            type={item.type} 
                        />
                    </li>    
                ))}
            </ul>
        </section>
        <Footer/>
      </>
    );
}

export default CatalogPage;
