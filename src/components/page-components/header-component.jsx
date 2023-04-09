import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { HeaderArea, MenuButton, ButtonArea } from "../style";
import logo from "../../assets/default_transparent_765x625.png";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <HeaderArea>
      <img src={logo} alt="GENCOP LOGO" />
      <ButtonArea>
        <MenuButton className="header-btn" to="/residencia">Declaração de residência</MenuButton>
        <MenuButton className="header-btn">
          Declaração de residência - terceiros
        </MenuButton>
        <MenuButton className="header-btn">Currículo</MenuButton>
      </ButtonArea>
    </HeaderArea>
  );
};

export default HeaderComponent;
