const ComponenteUno = () => {
    const cardStyle = { 
        border: '2px solid red', 
        padding: '10px', 
        margin: '10px', 
        borderRadius: '8px',
        maxWidth: '300px' 
    };

    return (
        <div style={cardStyle}>
            <h2>Arroz Chaufa</h2>
            <p>Delicioso plato de arroz frito con verduras, carne y huevo, inspirado en la cocina chino-peruana.</p>
            <p style={{ fontWeight: 'bold', color: 'green' }}>Precio: $12.99</p>
        </div>
    )
}

export default ComponenteUno