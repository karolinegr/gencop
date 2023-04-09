import React from 'react';
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import axios from 'axios';
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';
import { GeneratePdfButton, MenuButton } from '../../style';
import WaitingPdfComponent from '../../page-components/waiting-pdf-component';
import ProofOfResidenceFileComponent from '../../../files-components/proof-of-residence-file-component';

const ProofOfResidenceForm = () => {
    registerLocale('pt-BR', ptBR);
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [identity, setIdentity] = useState("");
    const [identityEntity, setIdentityEntity] = useState("");
    const [stateIdentity, setStateIdentity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [complement, setComplement] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [cityDocument, setCityDocument] = useState("");
    const [dayDocument, setDayDocument] = useState(new Date());
    const [sameCity, setSameCity] = useState(true);

    const data = {
        name: name,
        cpf: cpf,
        identity: identity,
        identityEntity: identityEntity,
        stateIdentity: stateIdentity,
        zipcode: zipcode,
        streetAddress: streetAddress,
        houseNumber: houseNumber,
        neighborhood: neighborhood,
        complement: complement,
        city: city,
        state: state,
        cityDocument: cityDocument,
        dayDocument: dayDocument
    };

    const getZipcode = () => {
        if (zipcode.length === 8) {
            axios({
                method: 'get',
                url: `https://viacep.com.br/ws/${zipcode}/json/`,
                responseType: 'json'
            })
                .then((response) => {
                    if (response.data && !response.data.erro) {
                        let data = response.data;
                        setStreetAddress(data.logradouro);
                        setNeighborhood(data.bairro);
                        setCity(data.localidade);
                        setState(data.uf);
                        setCityDocument(data.localidade)
                    }
                });
        }
    }

    const onChangeSameCityInformation = () => {
        setSameCity(!sameCity);
        if (!sameCity) {
            setCityDocument(city);
        } else {
            setCityDocument("");
        }
    }

    return (
        <Col sm={10} md={10} lg={8}>
            <Form>
                <Row>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(item) => setName(item.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                type="text"
                                maxLength={11}
                                onChange={(item) => setCpf(item.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>RG</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(item) => setIdentity(item.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={2} md={2} lg={2}>
                        <Form.Group>
                            <Form.Label>Org. Expedidor</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(item) => setIdentityEntity(item.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={2} md={2} lg={2}>
                        <Form.Group>
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(item) => setStateIdentity(item.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} md={6}>
                        <Form.Group>
                            <Form.Label>CEP</Form.Label>
                            <Form.Control type="text"
                                maxLength={8}
                                onChange={(item) => setZipcode(item.target.value)}
                                onKeyDown={getZipcode} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Rua</Form.Label>
                            <Form.Control type="text"
                                value={streetAddress}
                                onChange={(item) => setStreetAddress(item.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Número</Form.Label>
                            <Form.Control type="text"
                                onChange={(item) => setHouseNumber(item.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control type="text"
                                onChange={(item) => setComplement(item.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text"
                                value={neighborhood}
                                onChange={(item) => setNeighborhood(item.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text"
                                value={city}
                                onChange={(item) => setCity(item.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text"
                                value={state}
                                onChange={(item) => setState(item.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row >
                    <Col>
                        <Form.Group>
                            <Form.Label>Local</Form.Label>
                            <Form.Control value={cityDocument} disabled={sameCity}
                                onChange={(item) => setCityDocument(item.target.value)} />
                            <Form.Check type="checkbox" label="Cidade diferente da moradia" onChange={onChangeSameCityInformation} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Data do documento</Form.Label>
                            <DatePicker
                                className="p-1"
                                selected={dayDocument}
                                onChange={(date) => setDayDocument(date)}
                                locale="pt-BR"
                                dateFormat="dd/MM/yyyy"
                            />
                        </Form.Group>
                    </Col>
                </Row>

            </Form>

            <Row className="d-flex justify-content-center">
                <GeneratePdfButton onClick={() => setShow(!show)}>GERAR PDF</GeneratePdfButton>
            </Row>

            {show ? (
                <div>
                    <PDFViewer>
                        <ProofOfResidenceFileComponent data={data} />
                    </PDFViewer>
                </div>
            ) : (
                <WaitingPdfComponent />
            )}
        </Col>
    );
}

export default ProofOfResidenceForm;