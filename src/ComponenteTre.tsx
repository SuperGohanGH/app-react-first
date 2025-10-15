import { useState } from 'react';
const ComponenteUno = () => {
    const [isHovered, setIsHovered] = useState(false);

    const h1Style = {
        color: isHovered ? 'red' : 'black',
        transition: 'color 0.3s',
        cursor: 'pointer'
    };

    return (
        <h1 
            style={h1Style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            Passami sopra
        </h1>
    );
};

export default ComponenteUno;