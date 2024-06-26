import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
//import CssBaseline from '@mui/material/CssBaseline';
//import { ThemeProvider } from '@mui/material/styles';
//import theme from './theme';
/*import './index.css'*/

ReactDOM.createRoot(document.getElementById('root')!).render(
    //<ThemeProvider theme={theme}>
    //    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    //    <CssBaseline />
    //    <App />
    //</ThemeProvider>,
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </React.StrictMode>,
)
