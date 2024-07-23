import Header from "../components/header";
import Footer from "../components/footer";
import Background from "../components/background";
import { Creators } from "../data";
import CreatorCard from "../components/creator-card";



function AuthorsPage(): JSX.Element {
    return (
        <>
            <Header />
            <section className="main__wrap authors__main__wrap">
                <div className="main main-authors-page">
                    <h2 className="page__header">CREATORS</h2>
                    <div className="autors-cards__wrapper">
                        {Creators.map(creator => <CreatorCard key={creator.name} name={creator.name} description={creator.description} img={creator.img} />)}
                    </div>
                </div>
                <Background firstColor={"rgba(255,255,255"} secondColor={"rgba(211,211,211"} thirdColor={"rgba(181,181,181"} />
            </section>
            <Footer/>
        </>
    );
}

export default AuthorsPage;