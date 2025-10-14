const ComponenteUno = () => {
    const cardStyle = { 
        border: '2px solid red', 
        padding: '10px', 
        margin: '10px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
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