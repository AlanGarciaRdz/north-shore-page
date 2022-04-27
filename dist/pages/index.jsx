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
const HomeData_1 = require("src/serverData/HomeData");
const HomeHeader = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('src/sections/home/HomeHeader'))), {
    ssr: false,
});
const HomeMainDevelopments = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('src/sections/home/HomeMainDevelopments'))), { ssr: false });
const HomeLocations = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('src/sections/home/HomeLocations'))), {
    ssr: false,
});
const HomeAboutUs = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('src/sections/home/HomeAboutUs'))), {
    ssr: false,
});
const HomeBlogs = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('src/sections/home/HomeBlogs'))), {
    ssr: false,
});
const getStaticProps = async () => {
    const header = await (0, HomeData_1.getHomeHeader)();
    const location = await (0, HomeData_1.getHomeLocation)();
    const aboutUs = await (0, HomeData_1.getHomeAboutUs)();
    const homeBlogs = await (0, HomeData_1.getHomeBlogs)();
    return {
        props: {
            header,
            location,
            aboutUs,
            homeBlogs,
        },
    };
};
exports.getStaticProps = getStaticProps;
function Home({ header, location, aboutUs, homeBlogs, }) {
    return (<PageLayout_1.default showContactCard>
      <HomeHeader title={header.page.title} button={{
            label: header.page.button.label,
            link: header.page.button.link,
        }} image={{
            src: header.page.image.src,
            alt: header.page.image.alt,
        }}/>
      <HomeMainDevelopments developments={header.developments}/>
      <HomeLocations listings={location.listings} title={location.page.title} subtitle={location.page.subtitle} goToListingLabel={location.page.goToListingLabel}/>
      <HomeAboutUs title={aboutUs.page.title} subtitle={aboutUs.page.subtitle} sliders={aboutUs.sliders}/>
      <HomeBlogs title={homeBlogs.page.title} subtitle={homeBlogs.page.subtitle} blogs={homeBlogs.blogs}/>
    </PageLayout_1.default>);
}
exports.default = Home;
