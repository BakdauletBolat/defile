import Row from "../../../components/row";
import SizedBox from "../../../components/sized-box";
import { useStoreContext } from "../../../hooks/useContext";
import ProductsList from "./productsList";
import { observer } from 'mobx-react-lite';

function Products() {
    const { product } = useStoreContext();
    return (
        <div className="container">
            {product?.categories.map(category => {

                if (category.products.length <= 0) {
                    return <div key={category.id}></div>
                }

                return (
                    <div key={category.id}>
                        <Row justifyContent="space-between" alignItems="center">
                            <div className="categories__title">{category.name}</div>
                            {/* <Row>
                        <div className="categories__item categories__item--active">Все</div>
                        <div className="categories__item">Мужской</div>
                        <div className="categories__item">Женский</div>
                    </Row> */}
                        </Row>
                        <SizedBox height={17}></SizedBox>
                        <ProductsList products={category.products}></ProductsList>
                    </div>
                )
            })}

        </div>

    );
}

export default observer(Products);