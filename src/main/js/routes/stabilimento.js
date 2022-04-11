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
                    <MappaPosti stabilimentoId={stabilimentoId} rows={stabilimento.rowQty}
                                columns={stabilimento.columnQty} />
                </Fragment>
                // fragment con la lista di posti/spot
              )}
        </main>
    );
}

function MappaPosti({ stabilimentoId, rows, columns }) {
    const [spotList, setSpotList] = useState([ ]);
    //const [query, setQuery] = useState('1');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // vanno in un component spot
    // const[booked, isBooked] = useState(false);
    // const[active, isActive] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios('http://localhost:8080/api/v1/stabilimenti/' + stabilimentoId + '/lista_Posti');

                setSpotList(result.data);
            } catch (error) {
                console.log(error);
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [stabilimentoId]);


    // let tableRows = [];
    //
    // // spotList.forEach((spot) => (console.log(spot.row + " " + spot.column)));
    // // spotList.forEach((spot) => (console.log(spot)));
    // // for (let w = 0; w < spotList.length; w++) {
    // //     // console.log(spotList[w]);
    // //
    // // }
    // console.log(rows);
    // console.log(columns);
    // for (let i = 0; i < rows; i++) {
    //     let rw = [];
    //     for (let j = 0; j < columns; j++) {
    //         console.log(i + " " + j);
    //         rw.push(spotList.find(spot => (spot.row === i && spot.column === j)));
    //         console.log(spotList.find(spot => (spot.row === i && spot.column === j)));
    //     }
    //     tableRows.push(rw);
    // }
    // console.log(tableRows);


    return (
        <section style={{ padding: "1rem" }}>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
                <div>Loading ...</div>
              ) : (
                <Fragment>
                    <table>
                        <tbody>
                            <tr>
                                {spotList.map(spot => (
                                    <td>
                                        <button key={spot.id}>|{spot.row},{spot.column}|</button>
                                    </td>
                                ))}
                            </tr>

                            {/*{tableRows.map((rw, index) => (*/}
                            {/*    <tr key={index}>*/}
                            {/*        {rw.map((spot) => (*/}
                            {/*            <td>*/}
                            {/*                <button key={spot.id}>|{spot.row},{spot.column}|</button>*/}
                            {/*            </td>*/}
                            {/*        ))}*/}
                            {/*    </tr>*/}
                            {/*))}*/}
                        </tbody>
                    </table>
                </Fragment>
              )}
        </section>
    );
}