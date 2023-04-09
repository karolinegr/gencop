import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FirstPdfComponent from "../../files-components/first-pdf-component"

const FirstFormComponent = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const data = {
    name: name,
    age: 30,
    address: address,
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            onChange={(item) => setName(item.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type="text"
            onChange={(item) => setAddress(item.target.value)}
          />
        </Form.Group>
        <Button onClick={() => setShow(!show)}>Submit</Button>
      </Form>

      {show ? (
        <div>
          <PDFViewer>
            <FirstPdfComponent data={data} />
          </PDFViewer>
        </div>
      ) : (
        "Aguardando geração de PDF"
      )}
    </>
  );
};

export default FirstFormComponent;
