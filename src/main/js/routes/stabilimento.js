import * as React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom';
import { getStabilimento, deleteInvoice } from '../data';

export default function Stabilimento() {
    let params = useParams();
    let stabilimentoID = parseInt(params.stabilimentoId, 10);

    const [stabilimento, setStabilimento] = useState({ });
    const [query, setQuery] = useState(stabilimentoID);

    // setQuery(params.stabilimentoId);

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios('http://localhost:8080/api/v1/stabilimenti/' + stabilimentoID);
            if (!ignore) setStabilimento(result.data);
        }

        fetchData();
        return () => { ignore = true; }
    }, []); // Only re-run the effect if query changes

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