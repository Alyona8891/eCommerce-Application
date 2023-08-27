import { IUserData } from '../../../../types/types';
import styles from './BillingAddress.module.scss';

export function BillingAddress(props: {
  userData: IUserData;
}): React.ReactElement {
  const { userData } = props;
  const billingAddressIds = userData.billingAddressIds[0];
  const addressData = userData.addresses.find(
    (el) => el.id === billingAddressIds,
  );
  return (
    <div>
      <h3>Billing Address</h3>
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
