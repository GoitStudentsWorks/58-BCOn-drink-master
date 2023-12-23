import SignUp from '../../../components/SignUp/SignUp.jsx';
import { StyledBgWrap, StyledPageWrap } from '../AuthPages.styled';

const SignUpPage = () => {
  return (
    <StyledBgWrap>
      <StyledPageWrap>
        <SignUp />
      </StyledPageWrap>
    </StyledBgWrap>
  );
};

export default SignUpPage;
