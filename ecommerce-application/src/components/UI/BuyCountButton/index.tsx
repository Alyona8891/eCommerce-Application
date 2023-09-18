import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BuyCountButton.module.scss';

// eslint-disable-next-line max-lines-per-function
export function BuyCountButton(props: {
  addToCartHandler: () => void;
  removeFromCartHandler: () => void;
  productCount: number;
  isLoading: boolean;
}): React.ReactElement {
  const { addToCartHandler, removeFromCartHandler, productCount, isLoading } =
    props;
  const [buttonText, setButtonText] = useState(`${productCount} added`);
  const navigate = useNavigate();

  const handleNavigate = (path: string): void => {
    navigate(path);
  };
  const handleButtonHover = (): void => {
    setButtonText('to cart ');
  };

  const handleButtonLeave = (): void => {
    setButtonText(`${productCount} added`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.counter_container}>
        <button
          type="button"
          className={styles.count_button}
          disabled={isLoading}
          onClick={(e): void => {
            removeFromCartHandler();
            e.preventDefault();
          }}
        >
          -
        </button>
        <button
          type="button"
          className={styles.button}
          disabled={isLoading}
          onFocus={(): number => 0}
          onMouseOver={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          onClick={(e): void => {
            handleNavigate('/cart');
            e.preventDefault();
          }}
        >
          {buttonText}
        </button>
        <button
          type="button"
          className={styles.count_button}
          disabled={isLoading}
          onClick={(e): void => {
            addToCartHandler();
            e.preventDefault();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
