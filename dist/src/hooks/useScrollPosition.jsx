"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener('scroll', updatePosition, { passive: true });
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    return scrollPosition;
};
exports.default = useScrollPosition;
