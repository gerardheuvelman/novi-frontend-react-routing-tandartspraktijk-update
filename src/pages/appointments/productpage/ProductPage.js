import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
    const { id } = useParams();

    return (
        <div>Het productnummer is {id}</div>
    )
}

export default ProductPage;