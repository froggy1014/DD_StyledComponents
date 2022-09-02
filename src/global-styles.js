import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
  :root {
  --primary : rgb(59, 59, 188);
  --mainBorder: 1px solid red; 
  --white: #fff;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background : #f2f4f8;
}
`

export default Globalstyles