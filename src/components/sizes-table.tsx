type SizesTableProps = {
    previewImage: string,
    title: string,
  };

function SizesTable({previewImage, title}: SizesTableProps): JSX.Element {
    const showTable = () => {
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
        <article className="stuff__card" onClick={() => {showTable()}}>
            <div className="card__image-wrapper">
                <img className="card__image" src={'img/items/'+ previewImage} width="300"  alt="Place image" />
            </div>
            <div className="card__info">
                <h2 className="card__name">
                    {title}
                </h2>
            </div>
        </article>
    )
}

export default SizesTable