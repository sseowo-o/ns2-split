import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{background-color:${(props) => props.theme.BasebgColor};}
html{color:${(props) => props.theme.Textf1Color};}

.navSvg{display: inline-block; width: 34px; height:34px;}

a.active{
  & .ntimewrp{
      & .ntimest1{fill:${(props) => props.theme.Iconi1Color};}
      & .ntimest2{fill:${(props) => props.theme.BasebgColor};}
      & .ntimest3{fill:${(props) => props.theme.Iconi1Color};}}
  & .navSvg{
    & path{fill: pink}
  }
}
`;
