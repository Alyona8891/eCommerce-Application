import { LiaShippingFastSolid } from 'react-icons/lia';
import { BiEditAlt } from 'react-icons/bi';
import { IUserData } from '../../../../types/types';
import styles from './ShippingAddress.module.scss';

export function ShippingAddress(props: {
  userData: IUserData;
}): React.ReactElement {
  const { userData } = props;
  const shippingAddressIds = userData.shippingAddressIds[0];
  const addressData = userData.addresses.find(
    (el) => el.id === shippingAddressIds,
  );
  return (
    <div className={styles.article}>
      <h3 className={styles.title}>
        <LiaShippingFastSolid className={styles.icon} />
        Shipping Address
        <button className={styles.edit_button} type="button">
          <BiEditAlt className={styles.edit_button_icon} />
          Edit
        </button>
      </h3>
      <div className={styles.info_block}>
        <div className={styles.label}>Street:</div>
        <div className={styles.text}>{addressData?.streetName}</div>
      </div>
      <div className={styles.info_block}>
        <div className={styles.label}>City:</div>
        <div className={styles.text}>{addressData?.city}</div>
      </div>
      <div className={styles.info_block}>
        <div className={styles.label}>Country:</div>
        <div className={styles.text}>{addressData?.country}</div>
      </div>
      <div className={styles.info_block}>
        <div className={styles.label}>Postal Code:</div>
        <div className={styles.text}>{addressData?.postalCode}</div>
      </div>
    </div>
  );
}
