import Row from "../../../components/row";
import SizedBox from "../../../components/sized-box";
import CategoryList from "./categoriesList";

function Categories() {
    return ( 
        <div className="container">
              <Row justifyContent="space-between" alignItems="center">
            <div className="categories__title">Категории</div>

        </Row>
        <SizedBox height={17}></SizedBox>
        <CategoryList></CategoryList>
        </div>
      
     );
}

export default Categories;