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
const react_1 = require("react");
const PageLayout_1 = __importDefault(require("src/components/layouts/PageLayout"));
const ListingLabels_1 = __importDefault(require("src/components/listing/ListingLabels"));
const ListingsData_1 = require("src/serverData/ListingsData");
const ListingsHeader = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('src/sections/listings/ListingsHeader'))), {
    ssr: false,
});
const getStaticProps = async () => {
    const header = await (0, ListingsData_1.getListingsHeader)();
    const listingsLabels = await (0, ListingsData_1.getListingsLabels)();
    return {
        props: {
            header,
            listingsLabels,
        },
    };
};
exports.getStaticProps = getStaticProps;
function Home({ header, listingsLabels, }) {
    const [currentFilter, setCurrentFilter] = (0, react_1.useState)({ listing: 0 });
    return (<PageLayout_1.default showContactCard>
      <ListingsHeader title={header.page.title} image={header.page.image}/>
      <ListingLabels_1.default listings={listingsLabels} onChangeListing={function (index) {
            setCurrentFilter(Object.assign(Object.assign({}, currentFilter), { listing: index }));
        }}/>
    </PageLayout_1.default>);
}
exports.default = Home;
