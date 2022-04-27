"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListingsLabels = exports.getListingsHeader = void 0;
const GeneralData_1 = require("src/scripts/GeneralData");
const StringTools_1 = require("src/scripts/StringTools");
async function getListingsHeader() {
    const header = {
        page: {
            title: 'Listings',
            image: {
                src: '/dump/home-header.png',
                alt: 'Listings header image',
            },
        },
    };
    return header;
}
exports.getListingsHeader = getListingsHeader;
async function getListingsLabels() {
    const developments = [
        {
            id: '0',
        },
        {
            id: '0',
        },
        {
            id: '0',
        },
    ];
    const listingsLabels = [
        {
            url: GeneralData_1.LISTINGS_URL + (0, StringTools_1.formatToURL)('/Las Lomas'),
            name: 'Las Lomas',
            developments: [
                ...developments,
                ...developments,
                ...developments,
                ...developments,
                ...developments,
                ...developments,
                ...developments,
                ...developments,
            ],
        },
        {
            url: GeneralData_1.LISTINGS_URL + (0, StringTools_1.formatToURL)('/Lo de Marcos'),
            name: 'Lo de Marcos',
            developments: [...developments, ...developments],
        },
        {
            url: GeneralData_1.LISTINGS_URL + (0, StringTools_1.formatToURL)('/Sayulita'),
            name: 'Sayulita',
            developments: [
                ...developments,
                ...developments,
                ...developments,
                ...developments,
                ...developments,
                ...developments,
            ],
        },
        {
            url: GeneralData_1.LISTINGS_URL + (0, StringTools_1.formatToURL)('/San Pancho'),
            name: 'San Pancho',
            developments: [
                ...developments,
                ...developments,
                ...developments,
                ...developments,
            ],
        },
    ];
    return listingsLabels;
}
exports.getListingsLabels = getListingsLabels;
