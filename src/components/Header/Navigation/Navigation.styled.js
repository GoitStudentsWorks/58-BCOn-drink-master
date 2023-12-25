import styled from 'styled-components';
import { device } from '../../../styles/device';
import { darkTheme, lightTheme } from '../../../styles/theme';

export const Nav = styled.nav`
  position: absolute;
  z-index: 10;
  top: 75px;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  background-color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.background.main : lightTheme.background.main};
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  @media ${device.tablet} {
    top: 79px;
  }
  @media ${device.desktop} {
    position: static;
    display: block;
    border: none;
  }

  & a {
    padding: 8px 16px;
    border: ${({ theme }) =>
      theme === 'dark'
        ? darkTheme.borderColor.main
        : lightTheme.borderColor.main};
    border-radius: 40px;
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  }

  & a.active {
    padding: 8px 16px;
    color: ${({ theme }) =>
      theme === 'dark' ? lightTheme.colors.main : darkTheme.colors.main};
    background-color: ${({ theme }) =>
      theme === 'dark'
        ? lightTheme.background.main
        : darkTheme.background.blackBg};
  }
`;
export const Circle = styled.div`
  display: block;
  position: absolute;
  z-index: -1;
  top: 12px;
  left: 42px;
  width: 257px;
  height: 247px;

  border-radius: 257px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);
  @media ${device.tablet} {
    top: 32px;
    left: -155px; //-20%
    width: 387px;
    height: 372px;
    border-radius: 387px;
  }
  @media ${device.desktop} {
    display: none;
  }
`;

export const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 20% auto 0 auto;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -200px;
    right: -450px;
    width: 549px;
    height: 543px;
    border-radius: 549px;

    filter: blur(104.8543701171875px);
    background: ${({ theme }) =>
      theme === 'dark' ? 'rgba(64, 112, 205, 0.5)' : 'rgba(64, 112, 205, 0.1)'};
  }
  @media ${device.tablet} {
    &::after {
      bottom: -20px;
      right: -395px;
    }
  }
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    margin: 0;
    &::after {
      content: none;
    }
  }
`;

export const Item = styled.li`
  display: flex;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;

  transition-property: transform;
  transition: 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: #f3f3f3;
  }
`;
