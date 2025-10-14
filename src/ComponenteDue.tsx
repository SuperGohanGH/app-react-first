import { useState } from 'react';

const ComponenteDue = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div>
            <button onClick={() => setShowText(!showText)}>
                Click me
            </button>
            {showText && <h1>Arriba Peru</h1>}
        </div>
    );
};

export default ComponenteDue;