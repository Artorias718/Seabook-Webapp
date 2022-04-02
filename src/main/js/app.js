import * as React from 'react';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./index";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

import Stabilimenti from "./routes/stabilimenti";
import Stabilimento from "./routes/stabilimento";

require("babel-core/register");
require("babel-polyfill");

/*
* npm install react-router-dom@6
* npm install axios
* npm i -D babel-core babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-loader
* npm install bootstrap
* */

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="expenses" element={<Expenses />} />
                <Route path="stabilimenti" element={<Stabilimenti />}>
                    <Route path=":stabilimentoId" element={<Stabilimento />} />
                </Route>
                <Route path="invoices" element={<Invoices />}>
                    <Route path=":invoiceId" element={<Invoice />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);