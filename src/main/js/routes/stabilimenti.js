import * as React from 'react';
import {useState, useEffect, Fragment} from "react";
import axios from 'axios';

import { Link, Outlet } from "react-router-dom";
export default function Stabilimenti() {
    const [stabilimenti, setStabilimenti] = useState( []);
    //const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios('http://localhost:8080/api/v1/stabilimenti');

                setStabilimenti(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, []); // Only re-run the effect if query changes

    return (
        <Fragment>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <div style={{ display: "flex" }}>
                    <nav
                        style={{
                            borderRight: "solid 1px",
                            padding: "1rem",
                        }}
                    >
                        {/*<input value={query} onChange={e => setQuery(e.target.value)} />*/}
                        {stabilimenti.map((item) => (
                            <Link
                                style={{ display: "block", margin: "1rem 0" }}
                                to={`/stabilimenti/${item.id}`}
                                key={item.id}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <Outlet />
                </div>
            )}
        </Fragment>
    );
}

import { getStabilimenti } from "../data";
