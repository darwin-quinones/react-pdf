import React from 'react';



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
  

const VistaWeb = ({poema}) => {
    const lorem =  "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip"
    return (
        <div style={divStyle}>
            <h1 style={{ color: "#3388af", fontSize: "42px" }}>{poema ? poema.tittle : "..."}</h1>
            <p>Por {poema ? poema.author : '...'}</p>
            <img style={{ maxWidth: "600px", maxHeight: "400" }} src='https://picsum.photos/600/400' alt='img for poem'></img>
            <p style={loremStyle}>{lorem}</p>
            <p style={{ maxWidth: "50ch" }}>{poema ? poema.content : "..."}</p>
        </div>
    );
}

export default VistaWeb;
