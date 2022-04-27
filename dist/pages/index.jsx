"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
const dynamic_1 = __importDefault(require("next/dynamic"));
const PageLayout_1 = __importDefault(require("src/components/layouts/PageLayout"));
const StringTools_1 = require("src/scripts/StringTools");
const HomeHeader = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('src/sections/home/HomeHeader'))), {
    ssr: false,
});
const HomeMainDevelopments = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('src/sections/home/HomeMainDevelopments'))), { ssr: false });
const HomeLocations = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('src/sections/home/HomeLocations'))), {
    ssr: false,
});
const getStaticProps = async () => {
    const developmentsMainCard = [
        {
            name: 'Hacienda Marina',
            price: 5137400,
            bathrroms: 5.5,
            bedrooms: 5.5,
            squareFT: 5.5,
            listing: {
                name: 'Las lomas',
            },
            amenities: [
                {
                    name: 'Private pool',
                },
                {
                    name: 'Pet Friendly',
                },
                {
                    name: 'Parking on property',
                },
                {
                    name: 'Ocean view',
                },
            ],
            images: [
                { src: '/dump/development-1.png', alt: 'development-1' },
                { src: '/dump/development-3.png', alt: 'development-3' },
            ],
        },
        {
            name: 'Casa de león',
            price: 8003200,
            bathrroms: 5.5,
            bedrooms: 5.5,
            squareFT: 5.5,
            listing: {
                name: 'Sayulita',
            },
            amenities: [
                {
                    name: 'Private pool',
                },
                {
                    name: 'Pet Friendly',
                },
                {
                    name: 'Parking on property',
                },
                {
                    name: 'Ocean view',
                },
            ],
            images: [
                { src: '/dump/development-1.png', alt: 'development-1' },
                { src: '/dump/development-2.png', alt: 'development-2' },
                { src: '/dump/development-3.png', alt: 'development-3' },
                { src: '/dump/development-2.png', alt: 'development-2' },
            ],
        },
        {
            name: 'Casa de Prueba',
            price: 8003200,
            bathrroms: 5.5,
            bedrooms: 5.5,
            squareFT: 5.5,
            listing: {
                name: 'San Pancho',
            },
            amenities: [
                {
                    name: 'Private pool',
                },
                {
                    name: 'Pet Friendly',
                },
                {
                    name: 'Parking on property',
                },
                {
                    name: 'Ocean view',
                },
            ],
            images: [
                { src: '/dump/development-1.png', alt: 'development-1' },
                { src: '/dump/development-2.png', alt: 'development-2' },
                { src: '/dump/development-3.png', alt: 'development-3' },
            ],
        },
    ];
    const developmentsCard = [
        {
            name: 'Hacienda Marina',
            price: 5137400,
            bathrroms: 5.5,
            bedrooms: 5.5,
            squareFT: 5.5,
            listing: {
                name: 'Las lomas',
            },
            amenities: [
                {
                    name: 'Private pool',
                },
                {
                    name: 'Pet Friendly',
                },
                {
                    name: 'Parking on property',
                },
                {
                    name: 'Ocean view',
                },
            ],
            image: { src: '/dump/development-1.png', alt: 'development-1' },
        },
        {
            name: 'Casa de león',
            price: 8003200,
            bathrroms: 5.5,
            bedrooms: 5.5,
            squareFT: 5.5,
            listing: {
                name: 'Sayulita',
            },
            amenities: [
                {
                    name: 'Private pool',
                },
                {
                    name: 'Pet Friendly',
                },
                {
                    name: 'Parking on property',
                },
                {
                    name: 'Ocean view',
                },
            ],
            image: { src: '/dump/development-2.png', alt: 'development-2' },
        },
        {
            name: 'Casa de Prueba',
            price: 8003200,
            bathrroms: 5.5,
            bedrooms: 5.5,
            squareFT: 5.5,
            listing: {
                name: 'San Pancho',
            },
            amenities: [
                {
                    name: 'Private pool',
                },
                {
                    name: 'Pet Friendly',
                },
                {
                    name: 'Parking on property',
                },
                {
                    name: 'Ocean view',
                },
            ],
            image: { src: '/dump/development-3.png', alt: 'development-3' },
        },
    ];
    const listings = [
        {
            name: 'San Pancho',
            url: (0, StringTools_1.formatToURL)('San Pancho'),
            developments: [...developmentsCard, ...developmentsCard],
        },
        {
            name: 'Sayulita',
            url: (0, StringTools_1.formatToURL)('Sayulita'),
            developments: [...developmentsCard],
        },
        {
            name: 'Lo de Marcos',
            url: (0, StringTools_1.formatToURL)('Lo de Marcos'),
            developments: [
                ...developmentsCard,
                ...developmentsCard,
                ...developmentsCard,
            ],
        },
        {
            name: 'Las Lomas',
            url: (0, StringTools_1.formatToURL)('Las Lomas'),
            developments: [
                ...developmentsCard,
                ...developmentsCard,
                ...developmentsCard,
                ...developmentsCard,
            ],
        },
    ];
    const header = {
        page: {
            title: 'Your house on the beach',
            button: {
                label: 'View listings',
                link: '/listings',
            },
            image: {
                src: '/dump/home-header.png',
                alt: 'Home header image',
            },
        },
        developments: developmentsMainCard,
    };
    const location = {
        page: {
            title: 'Locations',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in dictum enim. ',
        },
        listings: listings,
    };
    return {
        props: {
            header,
            location,
        },
    };
};
exports.getStaticProps = getStaticProps;
function Home({ header, location, }) {
    return (<PageLayout_1.default showContactCard>
      <HomeHeader title={header.page.title} button={{
            label: header.page.button.label,
            link: header.page.button.link,
        }} image={{
            src: header.page.image.src,
            alt: header.page.image.alt,
        }}/>
      <HomeMainDevelopments developments={header.developments}/>
      <HomeLocations listings={location.listings} title={location.page.title} subtitle={location.page.subtitle}/>
    </PageLayout_1.default>);
}
exports.default = Home;
