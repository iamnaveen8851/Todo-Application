import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./redux/Theme/customTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
