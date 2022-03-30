import * as React from 'react';

import { Link, Outlet } from "react-router-dom";
import { getStabilimenti } from "../data";

export default function Stabilimenti() {
    let stabilimenti = getStabilimenti();
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {stabilimenti.map((stabilimento) => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/stabilimenti/${stabilimento.id}`}
                        key={stabilimento.id}
                    >
                        {stabilimento.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}