import { useNavigate } from 'react-router-dom';
import './directory-item.styles.jsx';
import { BackgroundImage, DirectoryBodyContainer, DirectoryContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryContainer className='category-container' onClick={onNavigateHandler}>
      <BackgroundImage
        className='background-image'
        imageUrl={imageUrl}
      />
      <DirectoryBodyContainer className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
