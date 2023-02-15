import React from 'react';
// react PDF Library
import {Document, PDFViewer, Image, Page, Text, View} from '@react-pdf/renderer'

const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}

const loremStyle={
    color: "gray",
    fontStyle: "italic",
    fontSize: "10px",
}
  

const DocuPDF = ({ poema }) => {
    const lorem =  "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip"
    return (
        // <PDFViewer>
            <Document>
                <Page size="A4">
                    <View style={divStyle}>
                        <Text style={{ color: "#3388af", fontSize: "42px" }}>{poema ? poema.tittle : "..."}</Text>
                        <Text>Por {poema ? poema.author : '...'}</Text>
                        <Image style={{ maxWidth: "600px", maxHeight: "400" }} src='https://picsum.photos/600/400' alt='img for poem'></Image>
                        <Text style={loremStyle}>{lorem}</Text>
                        <Text style={{ padding: "20px" }}>{poema ? poema.content : "..."}</Text>
                    </View>
                </Page>
            </Document>
        // </PDFViewer>
    );
}

export default DocuPDF;
