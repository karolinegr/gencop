import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FirstPdfComponent = ({ data }) => (
  <Document>
    <Page>
      <View>
        <Text>Nome: {data.name}</Text>
        <Text>Idade: {data.age}</Text>
        <Text>Endereço: {data.address}</Text>
      </View>
    </Page>
  </Document>
);

export default FirstPdfComponent;