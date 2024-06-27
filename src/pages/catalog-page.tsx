import Footer from "../components/footer";
import Header from "../components/header";
import Item from "../components/item";
import { Items } from "../data";

function CatalogPage(): JSX.Element {
    return (
      <>
        <Header />
        <section className="main__wrap-catalog main__wrap">
            <ul className="catalog">
                <h2 className="catalog__header">CATALOG</h2>
                {Items.map((item) => (
                    <li key={item.id}>
                        <Item
                            previewImages={item.previewImages}
                            price={item.price}
                            id={item.id}
                            title={item.title}
                            type={item.type}
                            description={""} sizes={[]}  
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
