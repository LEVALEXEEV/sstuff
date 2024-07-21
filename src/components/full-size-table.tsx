type FullSizeTableProps = {
    img: string | undefined
}

function FullSizeTable({img}: FullSizeTableProps): JSX.Element {
    const hideTable = () => {
        const element = document.getElementById('show-full');
        if (element) {
            element.classList.remove('show-full');
        }
        const body = document.getElementsByTagName('body');
        if (body) {
            body[0].classList.remove('body_overflow__hidden');
        }
    }
    return (
        <div id="show-full" className="hide-full" onClick={() => hideTable()}>
            <div className="sizes-table-img">
                <img className="body-img__hide" src={'/sstuff/img/items/sizes-tables/' + img} alt="" width="85vmin"/>
            </div>
        </div>
    );
}

export default FullSizeTable;
