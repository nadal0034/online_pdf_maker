import React from "react";
import PdfMaker from "./pages/PdfMaker";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PdfMaker />
    </Provider>
  );
}