import * as React from 'react';
import { Fragment, useState, useEffect } from "react";
import axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom';
import { getStabilimento, deleteInvoice } from '../data';

export default function Stabilimento() {
    let params = useParams();
    let stabilimentoId = params.stabilimentoId;

    const [stabilimento, setStabilimento] = useState({ });
    //const [query, setQuery] = useState('1');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios('http://localhost:8080/api/v1/stabilimenti/' + stabilimentoId);

                setStabilimento(result.data);
            } catch (error) {
                console.log(error);
                setIsError(true);
            }
            
            setIsLoading(false);
        };

        fetchData();
    }, [stabilimentoId]); // Only re-run the effect if stabilimentoId changes

    return (
        <main style={{ padding: "1rem" }}>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
                <div>Loading ...</div>
              ) : (
                <Fragment>
                    <h2>{stabilimento.name}</h2>
                    <p>
                        Address: {stabilimento.address}
                    </p>
                    <p>Phone number: {stabilimento.phoneNumber}</p>
                    <p>Capacity: {stabilimento.spotsNumber}</p>
                </Fragment>
                // fragment con la lista di posti/spot
              )}
        </main>
    );
}