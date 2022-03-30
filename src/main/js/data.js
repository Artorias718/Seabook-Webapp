import React, { useState } from 'react';

const client = require('./client');

export function getStabilimenti() {

    return stabilimenti;
}

export function getStabilimento(id) {
    return stabilimenti.find(stabilimento => stabilimento.id === id);
}


let stabilimenti = [
    {
        "id": 1,
        "name": "Bagni Liguria",
        "address": "Viale Rimembranza, 38, 16039 Sestri Levante GE",
        "phoneNumber": "0185 482131",
        "spotsNumber": 500
    },
    {
        "id": 2,
        "name": "Bagni Castelletto",
        "address": "Via Aurelia, 17024 Finale Ligure SV",
        "phoneNumber": "019 600106",
        "spotsNumber": 700
    },
    {
        "id": 3,
        "name": "Capo Torre Beach & Lounge",
        "address": "Via Aurelia di Ponente, 1, 17015 Celle Ligure SV",
        "phoneNumber": "019 221 6264",
        "spotsNumber": 750
    },
    {
        "id": 4,
        "name": "Bagni Vittoria Beach",
        "address": "Lungomare Augusto Migliorini, 17024 Finale Ligure SV",
        "phoneNumber": "019 695583",
        "spotsNumber": 480
    },
    {
        "id": 5,
        "name": "Bagni Al Saraceno",
        "address": "Via del Capo, 2, 17024 Finale ligure SV",
        "phoneNumber": "019 698 8187",
        "spotsNumber": 730
    }
];

/**
 * @type {Invoice[]}
 */
let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995"
    },
    {
        name: "Stankonia",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000"
    },
    {
        name: "Ocean Avenue",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003"
    },
    {
        name: "Tubthumper",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997"
    },
    {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,600",
        due: "01/27/2998"
    }
];

export function getInvoices() {
    return invoices;
}

/**
 * @param {number} number
 * @returns {Invoice}
 */
export function getInvoice(number) {
    return invoices.find(invoice => invoice.number === number);
}

/**
 * @param {number} number
 * @returns {void}
 */
export function deleteInvoice(number) {
    invoices = invoices.filter(invoice => invoice.number !== number);
}

/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
 */