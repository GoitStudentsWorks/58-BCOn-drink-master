import {
  StyledBtnSignIn,
  StyledBtnSignUp,
  StyledBtnWrap,
  StyledHead,
  StyledText,
  StyledTextWrap,
  StyledWrap,
} from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <StyledWrap>
      <StyledTextWrap>
        <StyledHead>Welcome to the app!</StyledHead>
        <StyledText>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </StyledText>
      </StyledTextWrap>
      <StyledBtnWrap>
        <StyledBtnSignUp>Sign Up</StyledBtnSignUp>
        <StyledBtnSignIn>Sign In</StyledBtnSignIn>
      </StyledBtnWrap>
    </StyledWrap>
  );
};

export default WelcomePage;
