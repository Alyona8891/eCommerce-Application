import { BsCart3 } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { IItemData } from '../../../../types/types';
import { CartItem } from '../CartItem/CartItem';
import styles from './NotEmptyBasketContent.module.scss';

// eslint-disable-next-line max-lines-per-function
export function NotEmptyBasketContent(props: {
  cartItemsData: IItemData[];
}): React.ReactElement {
  const { cartItemsData } = props;
  const cartList = cartItemsData.map((cartItemData) => (
    <li key={cartItemData.id} className={styles.item}>
      <CartItem itemData={cartItemData} />
    </li>
  ));
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <BsCart3 className={styles.title_icon} />
          <h3 className={styles.page_title}>My Cart</h3>
        </div>
        <button className={styles.clear_button} type="button">
          <AiOutlineDelete className={styles.button_icon} />
          Clear Cart
        </button>
        <div className={styles.header}>
          <div className={styles.header_title}>PRODUCT</div>
          <div className={styles.header_title}>QUANTITY</div>
          <div className={styles.header_title}>UNIT PRICE</div>
          <div className={styles.header_title}>TOTAL PRICE</div>
        </div>
        <ul className={styles.list}>{cartList}</ul>
        <div className={styles.promocode_block}>
          <input
            className={styles.input}
            onBlur={(event): void => console.log(event.target.value)}
            type="text"
          />
          <button className={styles.input_button} type="button">
            APPLY PROMO CODE
          </button>
        </div>
        <div className={styles.subtotal}>
          <div className={styles.subtotal_title}>SUBTOTAL</div>
          <div className={styles.prices_container}>
            <div className={styles.price_new}>$ 72</div>
            <div className={styles.price_old}>$ 52</div>
          </div>
        </div>
      </div>
    </main>
  );
}
