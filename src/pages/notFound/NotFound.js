import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
    return (
        <p>Deze pagina is niet gevonden. Klik <Link to={"/"}>hier</Link> om terug te keren naar de Home pagina. </p>
    );
}

export default NotFound;