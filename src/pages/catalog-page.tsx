import Footer from "../components/footer";
import Header from "../components/header";
import Item from "../components/item";
import { Items } from "../data";

function CatalogPage(): JSX.Element {
    return (
      <>
        <Header />
        <section className="main__wrap-catalog main__wrap">
            <div className="main">
                <h2 className="page__header catalog__header">CATALOG</h2>
                <ul className="catalog">
                    {Items.map((item) => (
                        <li key={item.article}>
                            <Item
                                previewImages={item.previewImages}
                                price={item.price}
                                article={item.article}
                                title={item.title}
                                type={item.type}
                                description={""} sizes={[]}  
                            />
                        </li>    
                    ))}
                </ul>
            </div>
        </section>
        <Footer/>
      </>
    );
}

export default CatalogPage;
