import { Link } from 'react-router-dom';
import { IProduct } from '../../../../types/types';
import img from '../../assets/orange-1.png';
import styles from './ProductCard.module.scss';

export function ProductCard(props: { product: IProduct }): React.ReactElement {
  const { product } = props;
  const { name, category, price, tm } = product;
  return (
    <Link to={`/catalog/category/subcategory/${name.toLowerCase()}`}>
      <div className={styles.card}>
        <img src={img} className={styles.image} alt="product" />
        <div className={styles.description}>
          <div className={styles.product_info}>
            <strong className={styles.price}>${price}</strong>
            <p className={styles.name}>{name}</p>
            <p className={styles.category}>Category:{category}</p>
            <p className={styles.tm}>TM:{tm}</p>
          </div>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={(e): void => e.preventDefault()}
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
}
