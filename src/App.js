import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import HeaderComponent from "./components/page-components/header-component";
import StickyFooter from "./components/page-components/footer-sticky-component"
import FirstPdfComponent from "./files-components/first-pdf-component";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <div className="outlet-container">
        <Outlet />
      </div>
      <StickyFooter/>
    </>
  );
};

export default App;
