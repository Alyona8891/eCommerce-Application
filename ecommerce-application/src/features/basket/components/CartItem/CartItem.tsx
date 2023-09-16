import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';
import { LineItem } from '@commercetools/platform-sdk';
import styles from './CartItem.module.scss';

// eslint-disable-next-line max-lines-per-function
export function CartItem(props: { itemData: LineItem }): React.ReactElement {
  const { itemData } = props;
  const validPrice = itemData.variant.prices
    ? itemData.variant.prices[0].value.centAmount / 100
    : null;
  const validDiscountedPrice =
    itemData.variant.prices && itemData.variant.prices[0].discounted
      ? itemData.variant.prices[0].discounted.value.centAmount / 100
      : null;
  const validTotalPrice = itemData.totalPrice.centAmount / 100;
  const validTotalDiscountedPrice = itemData.totalPrice.centAmount / 100;
  const imageSrc = itemData.variant.images
    ? itemData.variant.images[0].url
    : '';

  const [currentQuantity, setCurrentQuantity] = useState(itemData.quantity);

  const increaseQuantity = (): void => {
    const increasedСurrentQuantity = currentQuantity + 1;
    setCurrentQuantity(increasedСurrentQuantity);
  };

  const decreaseQuantity = (): void => {
    const decreasedСurrentQuantity = currentQuantity - 1;
    if (decreasedСurrentQuantity >= 1) {
      setCurrentQuantity(decreasedСurrentQuantity);
    }
  };

  return (
    <>
      <div className={styles.product_block}>
        <img src={imageSrc} className={styles.image} alt="product" />
        <p className={styles.name}>{itemData.name.en}</p>
      </div>
      <div className={styles.quantity_block}>
        <button
          className={styles.quantity_button}
          onClick={decreaseQuantity}
          type="button"
        >
          -
        </button>
        <p className={styles.quantity}>{currentQuantity}</p>
        <button
          className={styles.quantity_button}
          onClick={increaseQuantity}
          type="button"
        >
          +
        </button>
      </div>
      {validDiscountedPrice && (
        <div className={styles.prices_container}>
          <div className={styles.price_new}>$ {validDiscountedPrice}</div>
          <div className={styles.price_old}>$ {validPrice}</div>
        </div>
      )}
      {!validDiscountedPrice && (
        <div className={styles.price}>$ {validPrice}</div>
      )}
      {validTotalDiscountedPrice && (
        <div className={styles.prices_container}>
          <div className={styles.price_new}>$ {validTotalDiscountedPrice}</div>
          <div className={styles.price_old}>$ {validTotalPrice}</div>
        </div>
      )}
      {!validTotalDiscountedPrice && (
        <div className={styles.price}>$ {validTotalPrice}</div>
      )}
      <MdOutlineClose
        className={styles.close_button}
        onClick={(): void => console.log(itemData.id)}
      />
    </>
  );
}
