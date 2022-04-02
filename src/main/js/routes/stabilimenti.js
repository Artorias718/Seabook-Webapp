import * as React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

import { Link, Outlet } from "react-router-dom";
export default function Stabilimenti() {
    //let stabilimenti = getStabilimenti();
    const [stabilimenti, setStabilimenti] = useState( []);
    const [query, setQuery] = useState('');

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios('http://localhost:8080/api/v1/stabilimenti' + query);
            if (!ignore) setStabilimenti(result.data);
        }

        fetchData();
        return () => { ignore = true; }
    }, [query]); // Only re-run the effect if query changes

    return (

        <>
            <div style={{ display: "flex" }}>
                <nav
                    style={{
                        borderRight: "solid 1px",
                        padding: "1rem",
                    }}
                >
                    <input value={query} onChange={e => setQuery(e.target.value)} />
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
        </>
    );
}

import { getStabilimenti } from "../data";
