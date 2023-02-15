import React, {useState, useEffect} from "react"; 
import {Button} from 'react-bootstrap'
import DocuPDF from "./DocuPDF";
import VistaWeb from "./VistaWeb";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

const poema = {
  title: 'I lve your face my dear',
  author: 'Darwin Quiñones Sanchez',
  content: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore'
}


function App() {


  // const [poema, setPoema] = useState(null);


  const [verWeb, setVerWeb] = useState(false)
  const [verPdf, setVerPdf] = useState(false)

  // function fetchPoema(){
  //   fetch("https://poetrydb.org/author")
  //   .then((response) => response.json())
  //   .then((data) =>{
  //     setPoema(data)
  //     //console.log(data.authors)
  //   })
  // }

  // useEffect(()=>{
  //   fetchPoema()
  // }, [])
 

  const Menu = () =>{
    return(
      <nav className="">
        <Button onClick={() => {
          setVerWeb(!verWeb)
          setVerPdf(false)
        }}>
         {verWeb ? 'Ocultar web' : 'Ver web'}
        </Button>

        <Button onClick={() =>{
          setVerWeb(false)
          setVerPdf(!verPdf)
        }}>
          {verPdf ? 'Ocultar Pdf' : 'Ver Pdf'}
        </Button>
        <PDFDownloadLink document={<DocuPDF poema={poema}/> } fileName="ejemplo.pdf">
        <Button>Descargar pdf</Button>

        </PDFDownloadLink>
      </nav>
    )
  }

  return (
    <div style={{minHeight: "100vh"}}>
        <Menu></Menu>
        {poema ?(
          <>
            {verWeb ? <VistaWeb poema={poema}></VistaWeb> : null}

            
            {verPdf ? (
                <PDFViewer style={{width: "100%", height: "90vh"}}>
                  <DocuPDF poema={poema}/>
                </PDFViewer>
              ) : null
            }
          </>
        ) : null}
        
    </div>
  );
}

export default App;
