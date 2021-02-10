import { createGlobalStyle } from "styled-components";
import "react-multi-carousel/lib/styles.css";

const GlobalStyle = createGlobalStyle`
  body,
  html {
    margin: 0px;
  }
  
  *:focus {
    outline: none !important;
  }


  input:focus {
    outline: none !important;
  }


  :root{
    --primary:#5e5aa7;
    --primarydark: #2e2a57;
    --primarylight:#e9e8ff;
    --clearwhite: #fcfcfc;
    --offwhite: #eeeeee;
    --ghostwhite: #f9fbfd;
    --black: rgb(72,72,72);
    --green: #a0d6b3;
    --lime: #4bd295;
    --blue: #63d8ff;
    --darkgreen: #5eae7a;
    --lightgreen: #b3f0c8;
    --gray: #b2c0d8;
    --lightgray: #dbdfea;
    --salmon: #edcbb3;
  }

  p{
    margin: unset;
  }

  .modal-dialog{
    max-width: 700px;
  }
  
  .breadcrumb{
    background-color: unset !important;
  }

  .sticky{
    z-index: 10000000 !important;
    background-color: white !important;
  }

  .react-rotating-text-cursor {
    animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }
  
  @keyframes blinking-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  // FONTS
  @font-face{
    font-family: "Futura PT";
    src: url("./assets/fonts/Futura PT/FuturaPTBold.otf");
  }

  html {
    font-family: "Futura PT", Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
