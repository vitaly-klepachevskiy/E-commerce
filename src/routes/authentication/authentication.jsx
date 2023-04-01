import SignUpForm from '../../component/sign-up-form/sign-up-form';
import SignInForm from '../../component/sign-in-form/sign-in-form';
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
