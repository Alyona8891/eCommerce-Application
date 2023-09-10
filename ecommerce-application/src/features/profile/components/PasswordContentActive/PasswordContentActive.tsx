import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { AiOutlineSave } from 'react-icons/ai';
import { MyCustomerChangePassword } from '@commercetools/platform-sdk';
import { useNavigate } from 'react-router-dom';
import { IRegistrationData, ToastTypes } from '../../../../types/types';
import { ServiceInputParameters } from '../../../autentification/services/inputService';
import { FormPasswordInputProfile } from '../FormPasswordInputProfile/FormPasswordInputProfile';
import { FormNewPassword } from '../FormNewPassword/FormNewPassword';
import {
  getCustomerData,
  updateCustomerPassword,
} from '../../../../api/requests';
import { handleLogout } from '../../../autentification';
import { showToast } from '../../../autentification/utils/showToast';
import { InputError } from '../InputError/InputError';

// eslint-disable-next-line max-lines-per-function
export function PasswordContentActive(props: {
  styles: CSSModuleClasses;
}): React.ReactElement {
  const { styles } = props;
  const [newPassword, setNewPassword] = useState('');

  const handleNewPasswordInput = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = e.target as HTMLInputElement;
    setNewPassword(value);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegistrationData>({
    mode: 'onChange',
  });

  const inputService = new ServiceInputParameters(register);

  const navigate = useNavigate();
  const handleRedirect = (): void => {
    navigate('/login');
  };

  const onSubmit: SubmitHandler<IRegistrationData> = async (
    passwordData: IRegistrationData,
  ): Promise<void> => {
    await getCustomerData().then(
      (result) => {
        const body: MyCustomerChangePassword = {
          version: result.body.version,
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        };
        updateCustomerPassword(body).then(
          async () => {
            await handleLogout();
            handleRedirect();
            showToast(
              ToastTypes.success,
              `Your password has succesfully changed! You log out!`,
            );
          },
          (error: Error) => {
            console.log(error);
            showToast(ToastTypes.error, error.message);
          },
        );
      },
      (error: Error) => {
        showToast(ToastTypes.error, error.message);
      },
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.input_block}>
        <FormPasswordInputProfile
          input={inputService.createInputParams('currentPassword').input}
          type={inputService.createInputParams('password').type}
          label="Enter current password"
          styles={styles}
        />
        <InputError styles={styles} errors={errors} name="currentPassword" />
      </div>
      <div className={styles.input_block}>
        <FormNewPassword
          input={inputService.createInputParams('password').input}
          type={inputService.createInputParams('password').type}
          label="Enter new password"
          styles={styles}
          value={newPassword}
          onInput={handleNewPasswordInput}
        />
        <InputError styles={styles} errors={errors} name="password" />
      </div>
      <div className={styles.input_block}>
        <FormPasswordInputProfile
          input={register('newPassword', {
            validate: {
              newPassword: (inputValue: string): string | boolean =>
                inputValue === newPassword || 'New password is not confirmed!',
            },
            required: 'Field cannot be empty',
          })}
          type={inputService.createInputParams('password').type}
          label="Confirm new password"
          styles={styles}
        />
        <InputError styles={styles} errors={errors} name="newPassword" />
      </div>
      <button className={styles.button} type="submit">
        <AiOutlineSave className={styles.edit_button_icon} />
        Save
      </button>
    </form>
  );
}
