import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate();

    const goToCategory = () => {
        navigate('/' + title)
    }
    
    return (
        <div className='category-preview-container'>
            <h2>
                <span onClick={goToCategory} className='title'>{title}</span>
            </h2>
            <div className='preview'>
                {
                    products
                        .slice(0, 4)
                        .map((product) => (
                            <ProductCard product={product} />
                        ))
                }
            </div>

        </div>
    )
}

export default CategoryPreview;