import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { RegistrationForm } from '../../features/autentification';
import styles from './RegistrationPage.module.css';

export function RegistrationPage(): React.ReactElement {
  return (
    <div className={styles.registrationPage__container}>
      <Header />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
