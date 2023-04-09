import { Document, Page, PDFViewer, Text, View, StyleSheet } from "@react-pdf/renderer";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'tomato',
        padding: "3cm 2.5cm",
        textAlign: "justify"
    },
    title: {
        textAlign: "center",
        fontWeight: "900"
    },
    assinatura: {
        textAlign: "center"
    }
    // section: { color: 'white', textAlign: 'center', margin: 30 }
});

const ProofOfResidenceFileComponent = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <Text style={styles.title}>DECLARAÇÃO DE RESIDÊNCIA</Text>
                <Text>
                    Eu, {data.name}, CPF nº {data.cpf} RG nº {data.identity} Órgão Exped. {data.identityEntity} na falta de
                    documentos para comprovação de residência, em conformidade com o disposto na Lei
                    7.115, de 29 de agosto de 1983, DECLARO para os devidos fins, sob penas da Lei, ser
                    residente e domiciliado na {data.streetAddress}, nº {data.houseNumber}, {data.complement ? `${data.complement}, ` : ''} bairro {data.neighborhood},
                    CEP {data.zipcode}, no município de {data.city}/{data.state}.
                </Text>

                <Text>
                    Por ser verdade, firmo a presente declaração para que produza os efeitos
                    legais, ciente de que a falsidade de seu conteúdo pode implicar na imputação de sanções
                    civis, administrativas, bem como na sanção penal prevista no art. 299 do Código Penal,
                    conforme transcrição abaixo:
                </Text>

                <Text>
                    Art. 299 – Omitir, em documento público ou particular, declaração que
                    nele deveria constar, ou nele inserir ou fazer inserir declaração falsa ou
                    diversa da que devia ser escrita, com o fim de prejudicar direito, criar
                    obrigação ou alterar a verdade sobre o fato juridicamente relevante.
                    Pena: reclusão de 1 (um) a 5 (cinco) anos e multa, se o documento é
                    público e reclusão de 1 (um) a 3 (três) anos, se o documento é particular
                </Text>

                <Text>
                    <span>{data.cityDocument}</span>, { }.
                    Local                              Data
                    {console.log(data)}
                </Text>

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