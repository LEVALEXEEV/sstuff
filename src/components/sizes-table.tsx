type SizesTableProps = {
    previewImage: string,
    title: string,
  };

function SizesTable({previewImage, title}: SizesTableProps): JSX.Element {
    return (
        <article className="stuff__card glass_clr">
            <div className="card__image-wrapper">
                <img className={'card__image card__image__' + title} src={'/sstuff/img/items/'+ previewImage} width="300"  alt="Place image" />
            </div>
            <div className={"card__info card__image__" + title}>
                <h2 className={"card__name card__image__" + title}>
                    {title}
                </h2>
            </div>
        </article>
    )
}

export default SizesTable