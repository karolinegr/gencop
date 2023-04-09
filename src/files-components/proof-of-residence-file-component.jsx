import { Document, Page, PDFViewer, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import moment from 'moment';

import TinosBold from '../fonts/Tinos-Bold.ttf';
import TinosItalic from '../fonts/Tinos-Italic.ttf';
import TinosBoldItalic from '../fonts/Tinos-BoldItalic.ttf';
import TinosRegular from '../fonts/Tinos-Regular.ttf';

Font.register({
    family: 'Tinos',
    fonts: [
        {
            src: TinosRegular,
        },
        {
            src: TinosBold,
            fontWeight: 'bold',
        },
        {
            src: TinosItalic,
            fontWeight: 'normal',
            fontStyle: 'italic',
        },
        {
            src: TinosBoldItalic,
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
    ],
    format: 'truetype',
});

Font.registerHyphenationCallback(word => [word]);

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        padding: "3cm 2.5cm",
        textAlign: "justify",
        fontSize: "12pt",
        lineHeight: "2px",
        fontFamily: "Tinos"
    },
    title: {
        textAlign: "center",
        fontWeight: "bold"
    },
    assinatura: {
        textAlign: "center"
    },
    sectionInsert: {
        textAlign: "justify",
        marginLeft: "1.5cm",
        fontSize: "11pt",
        lineHeight: "1px",
        fontStyle: "italic"
    }
});

const getCepFormated = (initialCep) => {
    let regex = /^(\d{2})(\d{3})(\d{3})$/;
    return initialCep.replace(regex, "$1.$2-$3");
}

const getCpfFormated = (initialCpf) => {
    let regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return initialCpf.replace(regex, "$1.$2.$3-$4");
}

const ProofOfResidenceFileComponent = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <Text style={styles.title}>DECLARAÇÃO DE RESIDÊNCIA</Text>
                <Text>
                    Eu, {data.name}, CPF nº {getCpfFormated(data.cpf)} RG nº {data.identity} Órgão Exped. {data.identityEntity}/{data.stateIdentity}, na falta de
                    documentos para comprovação de residência, em conformidade com o disposto na Lei
                    7.115, de 29 de agosto de 1983, DECLARO para os devidos fins, sob penas da Lei, ser
                    residente e domiciliado na {data.streetAddress}, nº {data.houseNumber}, {data.complement ? `${data.complement}, ` : ''} bairro {data.neighborhood},
                    CEP {getCepFormated(data.zipcode)}, no município de {data.city}/{data.state}.
                </Text>

                <Text>            </Text>

                <Text>
                    Por ser verdade, firmo a presente declaração para que produza os efeitos
                    legais, ciente de que a falsidade de seu conteúdo pode implicar na imputação de sanções
                    civis, administrativas, bem como na sanção penal prevista no art. 299 do Código Penal,
                    conforme transcrição abaixo:
                </Text>

                <Text>            </Text>

                <Text style={styles.sectionInsert}>
                    Art. 299 – Omitir, em documento público ou particular, declaração que
                    nele deveria constar, ou nele inserir ou fazer inserir declaração falsa ou
                    diversa da que devia ser escrita, com o fim de prejudicar direito, criar
                    obrigação ou alterar a verdade sobre o fato juridicamente relevante.
                    Pena: reclusão de 1 (um) a 5 (cinco) anos e multa, se o documento é
                    público e reclusão de 1 (um) a 3 (três) anos, se o documento é particular
                </Text>

                <Text>            </Text>

                <Text style={styles.assinatura}>
                    <span>{data.cityDocument}</span>, {moment(data.dayDocument).format('DD/MM/yyyy')}.
                </Text>
                <Text style={styles.assinatura}>
                    Local                              Data
                </Text>

                <Text>            </Text>

                <Text style={styles.assinatura}>
                    __________________________________
                </Text>
                <Text style={styles.assinatura}>
                    Assinatura do Declarante
                </Text>

            </View>
        </Page>
    </Document>
);

export default ProofOfResidenceFileComponent;