import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getStabilimento, deleteInvoice } from '../data';

export default function Stabilimento() {
    let params = useParams();
    let stabilimento = getStabilimento(parseInt(params.stabilimentoId, 10));
    return (
        <main style={{ padding: "1rem" }}>
            <h2>{stabilimento.name}</h2>
            <p>
                Address: {stabilimento.address}
            </p>
            <p>Phone number: {stabilimento.phoneNumber}</p>
            <p>Capacity: {stabilimento.spotsNumber}</p>
        </main>
    );
}