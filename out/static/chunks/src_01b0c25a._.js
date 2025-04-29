(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/useIntersectionObserver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>useIntersectionObserver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const observersMap = new Map();
let observer;
function getObserver() {
    if (observer) return observer;
    observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = observersMap.get(entry.target);
            if (entry.isIntersecting && callback) {
                callback();
                observer.unobserve(entry.target);
                observersMap.delete(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    return observer;
}
function useIntersectionObserver(ref, onVisible) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = getObserver();
            observersMap.set(el, onVisible);
            observer.observe(el);
            return ({
                "useIntersectionObserver.useEffect": ()=>{
                    observer.unobserve(el);
                    observersMap.delete(el);
                }
            })["useIntersectionObserver.useEffect"];
        }
    }["useIntersectionObserver.useEffect"], [
        ref,
        onVisible
    ]);
}
_s(useIntersectionObserver, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/animations/Typewriter/helper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>setupTypewriter)
});
function setupTypewriter(t, delay = 0) {
    const HTML = t.textContent;
    const height = t.offsetHeight;
    t.innerHTML = "";
    t.style.minHeight = `${height}px`;
    const totalCharacters = HTML.length;
    const baseSpeed = 1000 / totalCharacters;
    let cursorPosition = 0, tag = "", writingTag = false, tagOpen = false, tempTypeSpeed = 0;
    function type() {
        const char = HTML[cursorPosition];
        if (writingTag) {
            tag += char;
        }
        if (char === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += char;
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += char;
        }
        if (!writingTag && !tagOpen) {
            tempTypeSpeed = char === " " ? baseSpeed * 0.5 : baseSpeed + Math.random() * 20;
            t.innerHTML += char;
        }
        if (writingTag && char === ">") {
            writingTag = false;
            tempTypeSpeed = baseSpeed + Math.random() * 20;
            if (tagOpen) {
                const newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }
        cursorPosition += 1;
        if (cursorPosition < HTML.length) {
            setTimeout(type, tempTypeSpeed);
        }
    }
    // Здесь ставим задержку старта, если нужно
    function start() {
        if (delay > 0) {
            setTimeout(type, delay);
        } else {
            type();
        }
    }
    return {
        start
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/animations/Typewriter/Typewriter.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Typewriter": (()=>Typewriter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIntersectionObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIntersectionObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/Typewriter/helper.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Typewriter({ children, delay = 0, asChild = false }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIntersectionObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref, {
        "Typewriter.useIntersectionObserver": ()=>setIsVisible(true)
    }["Typewriter.useIntersectionObserver"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Typewriter.useEffect": ()=>{
            if (isVisible && ref.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref.current, delay).start();
            }
        }
    }["Typewriter.useEffect"], [
        isVisible
    ]);
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        style: {
            transitionDelay: `${delay}ms`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/animations/Typewriter/Typewriter.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Typewriter, "QFcySDXc6quu3pdipOz3WI08snc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIntersectionObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Typewriter;
var _c;
__turbopack_context__.k.register(_c, "Typewriter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useIsTouchDevice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsTouchDevice": (()=>useIsTouchDevice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useIsTouchDevice = ()=>{
    _s();
    const [isTouchDevice, setIsTouchDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsTouchDevice.useEffect": ()=>{
            function updateTouchDeviceStatus() {
                setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches);
            }
            updateTouchDeviceStatus();
            window.addEventListener("resize", updateTouchDeviceStatus);
            return ({
                "useIsTouchDevice.useEffect": ()=>window.removeEventListener("resize", updateTouchDeviceStatus)
            })["useIsTouchDevice.useEffect"];
        }
    }["useIsTouchDevice.useEffect"], []);
    return isTouchDevice;
};
_s(useIsTouchDevice, "qO9r2BnValft3C3z7jhU/3KyGPI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/animations/Tilt/Tilt.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Tilt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsTouchDevice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsTouchDevice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Tilt({ children, maxTilt = 5, maxShift = 0, className }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTouchDevice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsTouchDevice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsTouchDevice"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tilt.useEffect": ()=>{
            if (isTouchDevice) return;
            const handleMouseMove = {
                "Tilt.useEffect.handleMouseMove": (e)=>{
                    const container = ref.current;
                    if (!container) return;
                    const rect = container.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    const offsetX = e.clientX - centerX;
                    const offsetY = e.clientY - centerY;
                    const percentX = offsetX / (rect.width / 2); // -1 to 1
                    const percentY = offsetY / (rect.height / 2);
                    const rotateX = Math.max(-maxTilt, Math.min(maxTilt, -percentY * maxTilt));
                    const rotateY = Math.max(-maxTilt, Math.min(maxTilt, percentX * maxTilt));
                    const translateX = Math.max(-maxShift, Math.min(maxShift, percentX * maxShift));
                    const translateY = Math.max(-maxShift, Math.min(maxShift, percentY * maxShift));
                    container.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateX(${translateX}px)
        translateY(${translateY}px)
      `;
                }
            }["Tilt.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "Tilt.useEffect.handleMouseLeave": ()=>{
                    const container = ref.current;
                    if (container) {
                        container.style.transition = "transform 0.3s ease";
                        container.style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          translateX(0px)
          translateY(0px)
        `;
                        setTimeout({
                            "Tilt.useEffect.handleMouseLeave": ()=>{
                                if (container) container.style.transition = "";
                            }
                        }["Tilt.useEffect.handleMouseLeave"], 300);
                    }
                }
            }["Tilt.useEffect.handleMouseLeave"];
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "Tilt.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseleave", handleMouseLeave);
                }
            })["Tilt.useEffect"];
        }
    }["Tilt.useEffect"], [
        maxTilt,
        maxShift,
        isTouchDevice
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            display: "inline-block",
            willChange: "transform",
            transition: "transform 0.1s ease-out"
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/animations/Tilt/Tilt.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Tilt, "I+f/54SvbQe1IafggHttVL0k02w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsTouchDevice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsTouchDevice"]
    ];
});
_c = Tilt;
var _c;
__turbopack_context__.k.register(_c, "Tilt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Highlight.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Highlight": (()=>Highlight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Highlight = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-primary",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Highlight.jsx",
        lineNumber: 2,
        columnNumber: 10
    }, this);
};
_c = Highlight;
var _c;
__turbopack_context__.k.register(_c, "Highlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useIsDesktop.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsDesktop": (()=>useIsDesktop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useIsDesktop = ()=>{
    _s();
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsDesktop.useEffect": ()=>{
            const handleResize = {
                "useIsDesktop.useEffect.handleResize": ()=>{
                    setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
                }
            }["useIsDesktop.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "useIsDesktop.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["useIsDesktop.useEffect"];
        }
    }["useIsDesktop.useEffect"], []);
    return isDesktop;
};
_s(useIsDesktop, "I3DqNlxt7Pw4zzIZQic0ZfednQQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/FloppySection/disks.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"name\":null,\"desc\":null,\"front_img\":\"/images/disks/disk_6.png\"},{\"name\":\"Up to 80%\",\"desc\":\"Eliminate the manual work of sourcing, fact-checking, and drafting — freeing up your editorial team for higher-value tasks.\",\"front_img\":\"/images/disks/disk_1.png\",\"back_img\":\"/images/disks/disk_1_backplate.png\"},{\"name\":\"3–5x faster\",\"desc\":\"Eliminate the manual work of sourcing, fact-checking, and drafting — freeing up your editorial team for higher-value tasks.\",\"front_img\":\"/images/disks/disk_2.png\",\"back_img\":\"/images/disks/disk_2_backplate.png\"},{\"name\":\"1200+ sources monitored in real-time\",\"desc\":\"Eliminate the manual work of sourcing, fact-checking, and drafting — freeing up your editorial team for higher-value tasks.\",\"front_img\":\"/images/disks/disk_3.png\",\"back_img\":\"/images/disks/disk_3_backplate.png\"},{\"name\":\"3x more productive\",\"desc\":\"Eliminate the manual work of sourcing, fact-checking, and drafting — freeing up your editorial team for higher-value tasks.\",\"front_img\":\"/images/disks/disk_4.png\",\"back_img\":\"/images/disks/disk_4_backplate.png\"},{\"name\":\"24/7 Content Delivery\",\"desc\":\"Eliminate the manual work of sourcing, fact-checking, and drafting — freeing up your editorial team for higher-value tasks.\",\"front_img\":\"/images/disks/disk_5.png\",\"back_img\":\"/images/disks/disk_5_backplate.png\"},{\"name\":null,\"desc\":null,\"back_img\":\"/images/disks/disk_6_backplate.png\"}]"));}}),
"[project]/src/components/Sections/FloppySection/_desktop.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "_desktop": (()=>_desktop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$FloppySection$2f$disks$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/components/Sections/FloppySection/disks.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-image-export-optimizer/dist/ExportedImage.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const _desktop = ()=>{
    _s();
    const disksWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "_desktop.useGSAP": ()=>{
            const allDisks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray(".disk");
            const disks = allDisks.slice(1, -1).reverse();
            const firstDisk = allDisks[0];
            const lastDisk = allDisks[allDisks.length - 1];
            const wrapper = disksWrapper.current;
            const section = wrapper.closest("section");
            if (!wrapper || !section) return;
            const spacing = 50;
            const compressedSpacing = 35;
            const total = disks.length;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(allDisks, {
                yPercent: -100,
                opacity: 0,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                transformOrigin: "center center"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(lastDisk, {
                yPercent: 200,
                opacity: 0,
                filter: "grayscale(1)",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0
            });
            const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=" + window.innerHeight * total,
                    scrub: true,
                    pin: true
                }
            });
            disks.forEach({
                "_desktop.useGSAP": (disk, index)=>{
                    const finalY = (index - total - (total - 1) / 2) * spacing * -1;
                    const desc = disk.querySelector("p");
                    const line = disk.querySelector("div.md\\:border-r");
                    const h3 = disk.querySelector("h3");
                    const readableSpacing = 100;
                    const previousDisk = index > 0 && disks[index - 1];
                    const lastDisk = index === total - 1;
                    timeline.to(disk, {
                        yPercent: 0,
                        y: finalY - readableSpacing,
                        opacity: 1,
                        filter: "grayscale(0)",
                        duration: 0.5,
                        ease: "power2.out"
                    });
                    previousDisk && timeline.to(previousDisk, {
                        y: finalY,
                        filter: "grayscale(0.6)",
                        duration: 0.5,
                        ease: "power2.out"
                    });
                    timeline.to([
                        desc,
                        line
                    ], {
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    }, "<");
                    timeline.to(h3, {
                        color: "#8d22a1",
                        duration: 0.5,
                        ease: "power2.out"
                    }, "<");
                    timeline.to(disk, {
                        y: finalY - spacing,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                    timeline.to([
                        desc,
                        line
                    ], {
                        opacity: 0,
                        height: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    }, "<");
                    timeline.to(h3, {
                        color: "#d0d0d0",
                        duration: 0.5,
                        ease: "power2.out"
                    }, "<");
                    if (lastDisk) {
                        timeline.to(disk, {
                            yPercent: 0,
                            filter: "grayscale(0.6)",
                            duration: 0.5,
                            ease: "power2.out"
                        }, "<");
                    }
                }
            }["_desktop.useGSAP"]);
            timeline.to({}, {
                duration: 1
            });
            disks.forEach({
                "_desktop.useGSAP": (disk, index)=>{
                    const compressedY = (index - total - (total - 1) / 2) * compressedSpacing * -1;
                    timeline.to(disk, {
                        y: compressedY,
                        duration: 0.5,
                        ease: "power2.inOut"
                    }, "<");
                }
            }["_desktop.useGSAP"]);
            const firstFinalY = (-(total + 1) / 2 + total) * compressedSpacing;
            const lastFinalY = ((total + 1) / 2 + total) * compressedSpacing;
            timeline.to(firstDisk, {
                yPercent: 0,
                opacity: 1,
                y: firstFinalY,
                filter: "grayscale(0)",
                zIndex: total + 11,
                duration: 0.5,
                ease: "power2.inOut"
            }, "<");
            timeline.to(lastDisk, {
                yPercent: 0,
                opacity: 1,
                y: lastFinalY,
                filter: "grayscale(0)",
                zIndex: 0,
                duration: 0.7,
                ease: "power2.out"
            }, "<");
        }
    }["_desktop.useGSAP"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: disksWrapper,
        className: "relative h-screen w-full mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "relative w-full h-full",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$FloppySection$2f$disks$2e$json__$28$json$29$__["default"].map((disk, index)=>{
                const diskImage = disk?.front_img || disk?.back_img;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "disk group flex items-center gap-5 absolute w-full",
                    style: {
                        zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$FloppySection$2f$disks$2e$json__$28$json$29$__["default"].length - index + 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-1/2",
                            src: diskImage,
                            width: "400",
                            height: "235",
                            alt: disk.name + " interactive"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
                            lineNumber: 205,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full grid md:grid-cols-[0.2fr_1fr] md:gap-9",
                            style: {
                                opacity: disk?.name ? 1 : 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:border-r border-gray-100 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-100"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-100"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-start-2 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-base md:text-xl leading-tight text-primary mb-3.5",
                                            children: disk.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base leading-6 text-gray-100",
                                            style: {
                                                display: disk?.name ? "block" : "none"
                                            },
                                            children: disk.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
                                    lineNumber: 220,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
                            lineNumber: 212,
                            columnNumber: 15
                        }, this)
                    ]
                }, `${diskImage}_${index}`, true, {
                    fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
                    lineNumber: 200,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
            lineNumber: 196,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Sections/FloppySection/_desktop.jsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
};
_s(_desktop, "98GH6BCcYFvFdF3ramk/v9tlbRI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/accordion.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Accordion({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "accordion",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Accordion;
function AccordionItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "accordion-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.jsx",
        lineNumber: 20,
        columnNumber: 6
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.jsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.jsx",
        lineNumber: 33,
        columnNumber: 6
    }, this);
}
_c2 = AccordionTrigger;
function AccordionContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pt-0 pb-4", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.jsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.jsx",
        lineNumber: 55,
        columnNumber: 6
    }, this);
}
_c3 = AccordionContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/FloppySection/_mobile.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "_mobile": (()=>_mobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$FloppySection$2f$disks$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/components/Sections/FloppySection/disks.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const _mobile = ()=>{
    _s();
    const disks = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$FloppySection$2f$disks$2e$json__$28$json$29$__["default"].slice(1, -1);
    const [openItem, setOpenItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("item-0");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "relative w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
            type: "single",
            collapsible: true,
            value: openItem,
            onValueChange: (value)=>setOpenItem(value),
            children: disks.map((disk, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "text-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: `item-${index}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `font-semibold text-lg ${openItem === `item-${index}` ? "text-primary" : "text-gray-100"}`,
                                    children: disk.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/FloppySection/_mobile.jsx",
                                    lineNumber: 26,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/FloppySection/_mobile.jsx",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: disk.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/FloppySection/_mobile.jsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/FloppySection/_mobile.jsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sections/FloppySection/_mobile.jsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/Sections/FloppySection/_mobile.jsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/Sections/FloppySection/_mobile.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Sections/FloppySection/_mobile.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(_mobile, "mraMue63cub4d8LkxgA+QZUq1rs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/FloppySection/FloppySection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FloppySection": (()=>FloppySection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Highlight.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/Typewriter/Typewriter.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-image-export-optimizer/dist/ExportedImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsDesktop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$FloppySection$2f$_desktop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sections/FloppySection/_desktop.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$FloppySection$2f$_mobile$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sections/FloppySection/_mobile.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function FloppySection() {
    _s();
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsDesktop"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-black pt-40 pb-0 overflow-hidden isolate",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute left-1/2 -translate-x-1/2 h-full z-[-1]",
                src: "/images/backgroundGradient.webp",
                width: "1920",
                height: "1080",
                alt: "section background"
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/FloppySection/FloppySection.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto lg:grid lg:grid-cols-[1fr_2fr] items-center px-4 lg:px-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-gray-100 text-4xl lg:text-6xl font-semibold mb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Highlight"], {
                                    children: "Unpress AI "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/FloppySection/FloppySection.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                "Solves the Critical Bottlenecks:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Sections/FloppySection/FloppySection.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sections/FloppySection/FloppySection.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$FloppySection$2f$_desktop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_desktop"], {}, void 0, false, {
                        fileName: "[project]/src/components/Sections/FloppySection/FloppySection.jsx",
                        lineNumber: 29,
                        columnNumber: 22
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$FloppySection$2f$_mobile$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_mobile"], {}, void 0, false, {
                        fileName: "[project]/src/components/Sections/FloppySection/FloppySection.jsx",
                        lineNumber: 29,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sections/FloppySection/FloppySection.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sections/FloppySection/FloppySection.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(FloppySection, "LPvPO2c3CxR8xrtzm1E56phj+VA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsDesktop"]
    ];
});
_c = FloppySection;
var _c;
__turbopack_context__.k.register(_c, "FloppySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.jsx",
        lineNumber: 48,
        columnNumber: 6
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Geometry/HeroGeometry.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeroGeometry": (()=>HeroGeometry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const HeroGeometry = ({ className, style })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        style: style,
        width: "1245",
        height: "877",
        viewBox: "0 0 1245 877",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1023.44 -137.878C1134.77 52.8568 1246.1 243.574 1357.4 434.327C1247.83 626.241 1138.24 818.159 1028.61 1010.04C807.619 1011.1 586.624 1012.12 365.637 1013.15C254.198 822.31 142.823 631.435 31.4473 440.56C141.018 248.646 250.603 56.7278 360.235 -135.153C581.227 -136.213 802.222 -137.237 1023.21 -138.265L1023.44 -137.87L1023.44 -137.878ZM1034.54 273.6C1038.23 389.52 1041.91 505.448 1045.61 621.373L1070.29 603.327L1034.56 273.596L1034.54 273.6ZM1006.44 650.021C907.874 711.187 809.305 772.361 710.731 833.521L738.708 845.865L1006.44 650.013L1006.44 650.021ZM666.183 813.865C563.975 759.112 461.759 704.354 359.551 649.6L362.842 679.986L666.183 813.865ZM354.318 601.26C350.63 485.34 346.942 369.42 343.254 253.5L318.578 271.547L354.318 601.26ZM382.416 224.847C480.981 163.682 579.55 102.508 678.124 41.3475L650.147 29.0035L382.411 224.856L382.416 224.847ZM722.672 61.0033C824.88 115.757 927.097 170.515 1029.3 225.268L1026.01 194.883L722.672 61.0033ZM1026.29 231.492L682.008 47.0582L350.149 252.997L362.563 643.364L706.844 827.797L1038.7 621.859L1026.29 231.492ZM1022.51 -174.452C1144.51 22.1494 1266.52 218.751 1388.53 415.357L1060.6 1027.49C829.235 1034.85 597.87 1042.21 366.504 1049.57C244.448 852.879 122.391 656.191 0.334599 459.503L328.26 -152.634C559.625 -159.992 790.991 -167.349 1022.36 -174.707L1022.51 -174.452ZM1021.79 -173.649C790.827 -166.303 559.865 -158.956 328.894 -151.614L1.53466 459.465C123.377 655.812 245.22 852.158 367.071 1048.51C598.033 1041.16 828.995 1033.82 1059.97 1026.47L1387.33 415.395C1265.48 219.048 1143.64 22.7019 1021.79 -173.649ZM1032.68 197.232C1047.44 333.399 1062.2 469.566 1076.96 605.743L1101.9 584.72L1032.68 197.232ZM1071.64 610.224C961.071 691.107 850.502 771.991 739.938 852.866L770.616 863.957L1071.64 610.224ZM733.171 850.42C607.91 795.139 482.663 739.853 357.403 684.571L363.134 716.671L733.171 850.42ZM356.162 677.633C341.403 541.465 326.645 405.298 311.891 269.121L286.947 290.144L356.153 677.628L356.162 677.633ZM317.215 264.645C427.784 183.762 538.353 102.878 648.917 22.003L618.239 10.9116L317.215 264.645ZM655.685 24.4484C780.945 79.7302 906.192 135.016 1031.45 190.298L1025.72 158.197L655.685 24.4484ZM1031.17 155.501C1056.87 299.332 1082.56 443.171 1108.25 587.01C996.098 681.544 883.951 776.069 771.798 870.603C633.862 820.749 495.927 770.895 357.987 721.027C332.181 576.639 306.402 432.242 280.61 287.849C392.762 193.316 504.909 98.7908 617.062 4.25705C754.998 54.1111 892.934 103.965 1030.87 153.833L1031.17 155.501ZM1030.18 118.702C1066.6 268.391 1103.03 418.085 1139.45 567.783C1027.64 674.518 915.86 781.263 804.053 888.007C655.709 844.557 507.374 801.112 359.031 757.662C322.481 607.473 285.936 457.274 249.399 307.081C361.202 200.346 472.987 93.6013 584.794 -13.1425C733.137 30.3072 881.472 73.7522 1029.82 117.202L1030.18 118.702ZM1025.38 121.453L586.25 -7.17807L255.287 308.817L363.459 753.42L802.592 882.051L1133.55 566.056L1025.38 121.453ZM1029.19 81.939C1076.33 237.496 1123.49 393.048 1170.62 548.609C1059.17 667.559 947.702 786.477 836.244 905.422C677.511 868.364 518.787 831.31 360.054 794.252C312.773 638.257 265.502 482.267 218.235 326.269C329.684 207.319 441.149 88.4007 552.607 -30.5443C711.34 6.51402 870.064 43.5676 1028.8 80.6259L1029.19 81.939ZM1025.02 84.6625L554.207 -25.2514L223.609 327.525L363.827 790.215L834.644 900.129L1165.24 547.353L1025.02 84.6625ZM1028.22 45.2389C1086.07 206.65 1143.93 368.069 1201.77 529.475C1090.64 660.598 979.525 791.704 868.4 922.818C699.283 892.143 530.17 861.458 361.056 830.774C303.068 668.974 245.075 507.184 187.091 345.376C298.22 214.253 409.34 83.1473 520.465 -47.9672C689.582 -17.2915 858.695 13.393 1027.81 44.0776L1028.22 45.2301L1028.22 45.2389ZM1024.64 47.8271L522.124 -43.3347L191.915 346.282L364.222 827.047L866.741 918.208L1196.95 528.592L1024.64 47.8271ZM1027.25 8.56588C1095.81 175.843 1164.37 343.117 1232.92 510.389C1122.11 653.677 1011.31 796.965 900.515 940.249C721.022 915.939 541.525 891.614 362.032 867.304C293.335 699.7 224.647 532.101 155.964 364.494C266.77 221.206 377.575 77.9175 488.367 -65.3665C667.86 -41.0557 847.357 -16.7315 1026.85 7.57926L1027.25 8.56588ZM1024.23 10.9639L490 -61.4058L160.203 365.074L364.642 863.914L898.873 936.284L1228.67 509.804L1024.23 10.9639ZM1026.29 -28.08C1105.54 145.051 1184.8 318.191 1264.05 491.321C1153.56 646.77 1043.08 802.231 932.577 957.675C742.704 939.715 552.84 921.761 362.973 903.793C283.582 730.38 204.204 556.964 124.826 383.548C235.316 228.1 345.802 72.6383 456.301 -82.8051C646.174 -64.8458 836.037 -46.8912 1025.9 -28.9231L1026.29 -28.08ZM1023.79 -25.927L457.827 -79.4694L128.481 383.884L365.093 900.788L931.056 954.33L1260.4 490.977L1023.79 -25.927ZM1025.34 -64.7125C1115.28 114.285 1205.24 293.278 1295.17 472.289C1184.99 639.906 1074.81 807.514 964.606 975.117C764.367 963.527 564.121 951.888 363.874 940.249C273.806 761.038 183.739 581.804 93.6934 402.571C203.873 234.954 314.048 67.3461 424.254 -100.257C624.493 -88.6671 824.739 -77.028 1024.99 -65.389L1025.32 -64.7084L1025.34 -64.7125ZM1023.32 -62.8456L425.626 -97.5247L96.7442 402.742L365.557 937.701L963.247 972.381L1292.13 472.114L1023.32 -62.8456ZM1024.39 -101.318C1125.02 83.5506 1225.68 268.402 1326.29 453.283C1216.42 633.056 1106.51 812.8 996.627 992.554C786.005 987.28 575.389 981.975 364.772 976.692C264.027 791.659 163.287 606.618 62.5795 421.559C172.453 241.787 282.356 62.0423 392.242 -117.712C602.864 -112.438 813.481 -107.132 1024.1 -101.85L1024.38 -101.323L1024.39 -101.318ZM1022.83 -99.7736L393.408 -115.567L65.0158 421.628L366.043 974.616L995.462 990.409L1323.85 453.215L1022.83 -99.7736ZM1022.32 -136.711L361.162 -133.601L33.2779 440.531L366.55 1011.55L1027.71 1008.44L1355.59 434.311L1022.32 -136.711Z",
            fill: "white",
            fillOpacity: "0.05"
        }, void 0, false, {
            fileName: "[project]/src/components/Geometry/HeroGeometry.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Geometry/HeroGeometry.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = HeroGeometry;
var _c;
__turbopack_context__.k.register(_c, "HeroGeometry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/HeroSection/HeroSection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeroSection": (()=>HeroSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-image-export-optimizer/dist/ExportedImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Highlight.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Geometry$2f$HeroGeometry$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Geometry/HeroGeometry.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Tilt$2f$Tilt$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/Tilt/Tilt.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/Typewriter/Typewriter.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const HeroSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "xl:h-screen pt-[150px] bg-[radial-gradient(57.81%_57.81%_at_42.89%_40.51%,_#370540_0%,_#280945_32.69%,_#0A0113_100%)] overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container px-4 lg:px-0 mx-auto h-full flex gap-32",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-center h-full w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-gray-100 font-semibold text-6xl lg:text-[80px] leading-tight mb-10",
                                children: "Automate. Verify. Dominate."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-silver text-lg leading-9 mb-8",
                                children: "In 5–10 years, will AI dominate newsrooms — or will human hands still do the heavy lifting? If you know the answer, it’s time to act."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-100 text-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Automate your newsroom workflow",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Highlight"], {
                                            children: " up to 80%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        " with UnpressAI-powered initial data gathering and news content prep."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 100
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100,
                                damping: 12
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                className: "mt-12 rounded-[50px] w-fit px-10 py-4 font-semibold text-sm leading-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://calendly.com/sergej-simonenko",
                                    target: "_blank",
                                    children: "Book a Call"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative hidden items-center justify-center min-w-[500px] lg:flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Tilt$2f$Tilt$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/hero.png",
                                width: "688",
                                height: "733"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Geometry$2f$HeroGeometry$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroGeometry"], {
                            className: "absolute"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Sections/HeroSection/HeroSection.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 38,
        columnNumber: 6
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 54,
        columnNumber: 6
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 79,
        columnNumber: 6
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 91,
        columnNumber: 6
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 103,
        columnNumber: 6
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 115,
        columnNumber: 6
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/ImageSection/ImageSection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ImageSection": (()=>ImageSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-image-export-optimizer/dist/ExportedImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const ImageSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container mx-auto px-4 lg:px-0 flex justify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "hidden md:inline",
                            src: "/images/desktop.png",
                            width: "1280",
                            height: "680"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/ImageSection/ImageSection.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sections/ImageSection/ImageSection.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                        className: "border-none text-gray-100 md:max-w-10/12 h-11/12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                className: "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Close up image"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/ImageSection/ImageSection.jsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/ImageSection/ImageSection.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "h-full w-auto mx-auto object-cover rounded-2xl",
                                src: "/images/desktop_close.png",
                                width: "1280",
                                height: "680"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/ImageSection/ImageSection.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sections/ImageSection/ImageSection.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sections/ImageSection/ImageSection.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "md:hidden rounded-[20px] w-full",
                src: "/images/mobile.png",
                width: "375",
                height: "667"
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/ImageSection/ImageSection.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sections/ImageSection/ImageSection.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = ImageSection;
var _c;
__turbopack_context__.k.register(_c, "ImageSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/IntegrationRoadmapSection/roadmap.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"name\":\"Book a Free Demo\"},{\"name\":\"Needs Assessment and Customization\"},{\"name\":\"Fast Setup (24–48h)\"},{\"name\":\"Pilot Phase with Full Support\"},{\"name\":\"Full-Scale Deployment and Optimization\"}]"));}}),
"[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "bottom": "IntegrationRoadmapSection-module__1keysG__bottom",
  "list": "IntegrationRoadmapSection-module__1keysG__list",
  "listContainer": "IntegrationRoadmapSection-module__1keysG__listContainer",
  "top": "IntegrationRoadmapSection-module__1keysG__top",
});
}}),
"[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "IntegrationRoadmapSection": (()=>IntegrationRoadmapSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Highlight.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationRoadmapSection$2f$roadmap$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/components/Sections/IntegrationRoadmapSection/roadmap.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationRoadmapSection$2f$IntegrationRoadmapSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/Typewriter/Typewriter.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsDesktop.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const IntegrationRoadmapSection = ()=>{
    _s();
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsDesktop"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container mx-auto px-4 lg:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-5",
                    children: [
                        "Integration ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Highlight"], {
                            children: "Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.jsx",
                            lineNumber: 17,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base lg:text-2xl leading-9 text-silver",
                children: "Seamless Integration in Just a Few Steps"
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full relative ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationRoadmapSection$2f$IntegrationRoadmapSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listContainer}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: `grid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationRoadmapSection$2f$IntegrationRoadmapSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list} grid-cols-1 gap-5 md:grid-cols-5 mx-auto container`,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationRoadmapSection$2f$roadmap$2e$json__$28$json$29$__["default"].map((step, index)=>{
                        const position = index % 2 === 0 ? "top" : "bottom";
                        const startPositionTransition = position === "top" ? {
                            opacity: 0,
                            y: -100
                        } : {
                            opacity: 0,
                            y: 100
                        };
                        const endPositionTransition = {
                            opacity: 1,
                            y: 0
                        };
                        if (!isDesktop) {
                            startPositionTransition.y = 100;
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                            initial: startPositionTransition,
                            whileInView: endPositionTransition,
                            transition: {
                                delay: index * 0.3,
                                type: "spring",
                                stiffness: 100,
                                damping: 12,
                                duration: 2
                            },
                            viewport: {
                                once: true,
                                amount: "all"
                            },
                            className: `grid grid-cols-[auto_1fr] gap-5 md:flex items-center md:justify-between border-gray-100 md:col-start-[var(--grid-position)] ${position === "top" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationRoadmapSection$2f$IntegrationRoadmapSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationRoadmapSection$2f$IntegrationRoadmapSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottom}`,
                            style: {
                                "--grid-position": `${index + 1}`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-base text-gray-100",
                                children: step.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.jsx",
                                lineNumber: 59,
                                columnNumber: 17
                            }, this)
                        }, step.name, false, {
                            fileName: "[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.jsx",
                            lineNumber: 42,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sections/IntegrationRoadmapSection/IntegrationRoadmapSection.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_s(IntegrationRoadmapSection, "LPvPO2c3CxR8xrtzm1E56phj+VA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsDesktop"]
    ];
});
_c = IntegrationRoadmapSection;
var _c;
__turbopack_context__.k.register(_c, "IntegrationRoadmapSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/IntegrationsSection/integrations.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"img\":\"/images/integrations/wordpress.png\",\"name\":\"Wordpress\",\"href\":\"https://wordpress.org/\"},{\"img\":\"/images/integrations/drupal.png\",\"name\":\"Drupal\",\"href\":\"https://new.drupal.org/home\"},{\"img\":\"/images/integrations/ghost.png\",\"name\":\"Ghost\",\"href\":\"https://ghost.org/\"},{\"img\":\"/images/integrations/contentful.png\",\"name\":\"Contentful\",\"href\":\"https://www.contentful.com/\"},{\"img\":\"/images/integrations/webflow.png\",\"name\":\"Webflow\",\"href\":\"https://webflow.com/\"}]"));}}),
"[project]/src/components/ui/card.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIntersectionObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIntersectionObserver.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Card({ className, asChild = false, ...props }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIntersectionObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref, {
        "Card.useIntersectionObserver": ()=>{
            setTimeout({
                "Card.useIntersectionObserver": ()=>setLoaded(true)
            }["Card.useIntersectionObserver"], 3000);
        }
    }["Card.useIntersectionObserver"]);
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    const delay = (Math.random() * 2).toFixed(2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "div",
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`card ${loaded ? "" : "loading"}`, className),
        style: {
            "--delay": `${delay}s`
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Card, "vaxDQyiNHsG8Zmqokq6jea0Jvu0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIntersectionObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Card;
;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/carousel.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Carousel": (()=>Carousel),
    "CarouselContent": (()=>CarouselContent),
    "CarouselItem": (()=>CarouselItem),
    "CarouselNext": (()=>CarouselNext),
    "CarouselPrevious": (()=>CarouselPrevious)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CarouselContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useCarousel() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
_s(useCarousel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function Carousel({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }) {
    _s1();
    const [carouselRef, api] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    const [canScrollPrev, setCanScrollPrev] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollNext, setCanScrollNext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[onSelect]": (api)=>{
            if (!api) return;
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }
    }["Carousel.useCallback[onSelect]"], []);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[scrollPrev]": ()=>{
            api?.scrollPrev();
        }
    }["Carousel.useCallback[scrollPrev]"], [
        api
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[scrollNext]": ()=>{
            api?.scrollNext();
        }
    }["Carousel.useCallback[scrollNext]"], [
        api
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[handleKeyDown]": (event)=>{
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
            }
        }
    }["Carousel.useCallback[handleKeyDown]"], [
        scrollPrev,
        scrollNext
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (!api || !setApi) return;
            setApi(api);
        }
    }["Carousel.useEffect"], [
        api,
        setApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (!api) return;
            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);
            return ({
                "Carousel.useEffect": ()=>{
                    api?.off("select", onSelect);
                }
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], [
        api,
        onSelect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContext.Provider, {
        value: {
            carouselRef,
            api: api,
            opts,
            orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onKeyDownCapture: handleKeyDown,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            "data-slot": "carousel",
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.jsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/carousel.jsx",
        lineNumber: 78,
        columnNumber: 6
    }, this);
}
_s1(Carousel, "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Carousel;
function CarouselContent({ className, ...props }) {
    _s2();
    const { carouselRef, orientation } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: carouselRef,
        className: "overflow-hidden",
        "data-slot": "carousel-content",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.jsx",
            lineNumber: 114,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/carousel.jsx",
        lineNumber: 110,
        columnNumber: 6
    }, this);
}
_s2(CarouselContent, "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
});
_c1 = CarouselContent;
function CarouselItem({ className, ...props }) {
    _s3();
    const { orientation } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-roledescription": "slide",
        "data-slot": "carousel-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/carousel.jsx",
        lineNumber: 132,
        columnNumber: 6
    }, this);
}
_s3(CarouselItem, "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
});
_c2 = CarouselItem;
function CarouselPrevious({ className, variant = "outline", size = "icon", ...props }) {
    _s4();
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "carousel-previous",
        variant: variant,
        size: size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute size-8 rounded-full", orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/carousel.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Previous slide"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/carousel.jsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/carousel.jsx",
        lineNumber: 154,
        columnNumber: 6
    }, this);
}
_s4(CarouselPrevious, "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
});
_c3 = CarouselPrevious;
function CarouselNext({ className, variant = "outline", size = "icon", ...props }) {
    _s5();
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "carousel-next",
        variant: variant,
        size: size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute size-8 rounded-full", orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/carousel.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Next slide"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/carousel.jsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/carousel.jsx",
        lineNumber: 179,
        columnNumber: 6
    }, this);
}
_s5(CarouselNext, "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
});
_c4 = CarouselNext;
;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Carousel");
__turbopack_context__.k.register(_c1, "CarouselContent");
__turbopack_context__.k.register(_c2, "CarouselItem");
__turbopack_context__.k.register(_c3, "CarouselPrevious");
__turbopack_context__.k.register(_c4, "CarouselNext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "marquee": "IntegrationsSection-module__EpPUrW__marquee",
  "marqueeContainer": "IntegrationsSection-module__EpPUrW__marqueeContainer",
});
}}),
"[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "IntegrationsSection": (()=>IntegrationsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Highlight.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$auto$2d$scroll$2f$esm$2f$embla$2d$carousel$2d$auto$2d$scroll$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-auto-scroll/esm/embla-carousel-auto-scroll.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationsSection$2f$integrations$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/components/Sections/IntegrationsSection/integrations.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-image-export-optimizer/dist/ExportedImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/carousel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationsSection$2f$IntegrationsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/Typewriter/Typewriter.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const IntegrationsSection = ()=>{
    _s();
    const autoScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$auto$2d$scroll$2f$esm$2f$embla$2d$carousel$2d$auto$2d$scroll$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        speed: 1,
        stopOnFocusIn: true,
        stopOnMouseEnter: true,
        stopOnInteraction: false
    }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative px-4 lg:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute bottom-0 h-full -z-10",
                src: "/images/backgroundGradient.webp",
                width: "1920",
                height: "1080",
                alt: "section background"
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto grid md:grid-cols-2 gap-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl lg:text-6xl font-semibold text-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Highlight"], {
                                    children: "CMS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                " Integrations"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                        plugins: [
                            autoScroll.current
                        ],
                        opts: {
                            loop: true
                        },
                        className: `flex items-center row-start-1 md:row-auto ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationsSection$2f$IntegrationsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marqueeContainer}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
                                    className: `basis-full ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationsSection$2f$IntegrationsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marquee}`,
                                    children: "Your newsroom, upgraded — without disruption."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
                                    className: `basis-full ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationsSection$2f$IntegrationsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marquee}`,
                                    children: "Your newsroom, upgraded — without disruption."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-silver text-base lg:text-2xl leading-9 md:col-span-2",
                        children: "Seamless Integration with Leading CMS Platforms"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "container mx-auto grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-4 [&>*]:p-5 mt-14",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$IntegrationsSection$2f$integrations$2e$json__$28$json$29$__["default"].map((integration, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            asChild: true,
                            style: {
                                padding: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                initial: {
                                    opacity: 0,
                                    x: 100
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 12
                                },
                                viewport: {
                                    once: true,
                                    amount: 0.3
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "w-full h-full flex items-center justify-center p-5",
                                    href: integration.href,
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: integration.img,
                                        alt: integration.name,
                                        width: "150",
                                        height: "150"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            }, integration.name, false, {
                                fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, integration.name, false, {
                            fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        asChild: true,
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                            initial: {
                                opacity: 0,
                                x: 100
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: 1,
                                type: "spring",
                                stiffness: 100,
                                damping: 12
                            },
                            viewport: {
                                once: true,
                                amount: 0.3
                            },
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "whitespace-nowrap text-silver text-2xl leading-9",
                                children: "And More..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sections/IntegrationsSection/IntegrationsSection.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_s(IntegrationsSection, "Emtm9bcs0OqFArY+3WTC9CIHqME=");
_c = IntegrationsSection;
var _c;
__turbopack_context__.k.register(_c, "IntegrationsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/ProblemsSection/cards.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"img\":\"/images/delay.svg\",\"title\":\"Hours lost\",\"desc\":\"Hours lost on manual sourcing, fact-checking, and editing\"},{\"img\":\"/images/process.svg\",\"title\":\"Stale processes\",\"desc\":\"Thousands of dollars drained by slow, outdated workflows\"},{\"img\":\"/images/pc-error.svg\",\"title\":\"Delayed\",\"desc\":\"Delayed publications cost you first-mover advantage and audience trust.\"},{\"img\":\"/images/user-error.svg\",\"title\":\"Human errors\",\"desc\":\"Human errors risk your brand's credibility.\"}]"));}}),
"[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProblemsSection": (()=>ProblemsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Highlight.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$ProblemsSection$2f$cards$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/components/Sections/ProblemsSection/cards.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-image-export-optimizer/dist/ExportedImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/Typewriter/Typewriter.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const ProblemsSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container mx-auto px-4 lg:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-5 flex gap-4",
                    children: [
                        "Time is Money.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Highlight"], {
                            children: "Save Both."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-silver text-xl leading-9",
                    children: "Traditional newsrooms waste critical resources every day:"
                }, void 0, false, {
                    fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$ProblemsSection$2f$cards$2e$json__$28$json$29$__["default"].map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        asChild: true,
                        className: "grid grid-rows-subgrid row-span-3 gap-5 p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                            initial: {
                                opacity: 0,
                                x: 100
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: index * 0.1 + 0.1,
                                duration: 0.2,
                                type: "spring",
                                stiffness: 100,
                                damping: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$image$2d$export$2d$optimizer$2f$dist$2f$ExportedImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: card.img,
                                    width: "90",
                                    height: "90",
                                    alt: card.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-gray-100 text-4xl font-semibold",
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-silver text-base leading-normal",
                                    children: card.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, card.title, false, {
                        fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sections/ProblemsSection/ProblemsSection.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_c = ProblemsSection;
var _c;
__turbopack_context__.k.register(_c, "ProblemsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/StepsSection/steps.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[\"Real-time monitoring of 1200+ global sources\",\"AI-driven fact extraction and multi-level verification\",\"Conflict detection and consistency check\",\"Content drafting based on verified facts\"]"));}}),
"[project]/src/components/Sections/StepsSection/StepsSection.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "card": "StepsSection-module__itR32a__card",
  "cards": "StepsSection-module__itR32a__cards",
});
}}),
"[project]/src/components/Sections/StepsSection/StepsSection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StepsSection": (()=>StepsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Highlight.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/carousel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$StepsSection$2f$steps$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/components/Sections/StepsSection/steps.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$StepsSection$2f$StepsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Sections/StepsSection/StepsSection.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/Typewriter/Typewriter.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const StepsSection = ()=>{
    _s();
    const [api, setApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollSnaps, setScrollSnaps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepsSection.useEffect": ()=>{
            if (!api) return;
            setScrollSnaps(api.scrollSnapList());
            const onSelect = {
                "StepsSection.useEffect.onSelect": ()=>setSelectedIndex(api.selectedScrollSnap())
            }["StepsSection.useEffect.onSelect"];
            api.on("select", onSelect);
            onSelect();
            return ({
                "StepsSection.useEffect": ()=>{
                    api.off("select", onSelect);
                }
            })["StepsSection.useEffect"];
        }
    }["StepsSection.useEffect"], [
        api
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-20 text-center",
                    children: [
                        "How ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Highlight$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Highlight"], {
                            children: "Unpress AI"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this),
                        " Works"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                className: "container mx-auto px-4 lg:px-0 mr-[calc((100vw-100%)_/_2)] w-full",
                plugins: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        delay: 20000
                    })
                ],
                setApi: setApi,
                opts: {
                    loop: true,
                    containScroll: "trimSnaps",
                    align: "start"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselContent"], {
                    className: "-ml-1 " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$StepsSection$2f$StepsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cards,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$StepsSection$2f$steps$2e$json__$28$json$29$__["default"].map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
                            className: "pl-1 basis-full md:basis-[66%] lg:basis-[30%] " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$StepsSection$2f$StepsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "STEP"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-100 text-base font-semibold",
                                        children: step
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex justify-center gap-2",
                children: scrollSnaps.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>api?.scrollTo(index),
                        className: `cursor-pointer h-2.5 rounded-[10px] transition-all ${index === selectedIndex ? "bg-primary w-20" : "bg-gray-100 w-10"}`
                    }, index, false, {
                        fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sections/StepsSection/StepsSection.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
_s(StepsSection, "p1qGXRwuX94U+U8SpWJPezIUCIc=");
_c = StepsSection;
var _c;
__turbopack_context__.k.register(_c, "StepsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Sections/TrustedSection/trusted.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"name\":\"Kyiv24\",\"image\":\"/images/trust/kyiv.svg\",\"href\":\"https://kyiv24.news/\"},{\"name\":\"Root Nation\",\"image\":\"/images/trust/RN.webp\",\"href\":\"https://root-nation.com/en/\"},{\"name\":\"AIN\",\"image\":\"/images/trust/ain.svg\",\"href\":\"https://ain.ua/\"},{\"name\":\"ProUkrainu\",\"image\":\"/images/trust/proukrainu.png\",\"href\":\"https://proukrainu.blesk.cz/\"}]"));}}),
"[project]/src/components/Sections/TrustedSection/TrustedSection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TrustedSection": (()=>TrustedSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/carousel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$auto$2d$scroll$2f$esm$2f$embla$2d$carousel$2d$auto$2d$scroll$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-auto-scroll/esm/embla-carousel-auto-scroll.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$TrustedSection$2f$trusted$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/components/Sections/TrustedSection/trusted.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/Typewriter/Typewriter.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const TrustedSection = ()=>{
    _s();
    const extendedTrusted = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$TrustedSection$2f$trusted$2e$json__$28$json$29$__["default"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sections$2f$TrustedSection$2f$trusted$2e$json__$28$json$29$__["default"]
    ];
    const autoScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$auto$2d$scroll$2f$esm$2f$embla$2d$carousel$2d$auto$2d$scroll$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        speed: 1,
        stopOnFocusIn: true,
        stopOnMouseEnter: true,
        stopOnInteraction: false
    }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-4 lg:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Typewriter$2f$Typewriter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-center container mx-auto",
                    children: "Trust & Testimonials"
                }, void 0, false, {
                    fileName: "[project]/src/components/Sections/TrustedSection/TrustedSection.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/TrustedSection/TrustedSection.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-base lg:text-2xl leading-9 text-silver container mx-auto",
                children: "Trusted by innovative media companies worldwide."
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/TrustedSection/TrustedSection.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                plugins: [
                    autoScroll.current
                ],
                opts: {
                    loop: true
                },
                className: "mt-10 md:mt-16 lg:mt-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselContent"], {
                    className: "py-4 -ml-4",
                    children: extendedTrusted.map((el, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
                            className: "basis-1/2 md:basis-1/3 lg:basis-1/4 ml-4 h-40 w-20 text-6xl text-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                asChild: true,
                                className: "w-full h-full block !bg-white",
                                style: {
                                    padding: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: el.href,
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: el.image,
                                        alt: el.name,
                                        width: "100",
                                        height: "100",
                                        className: "object-contain object-center w-full h-full p-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sections/TrustedSection/TrustedSection.jsx",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sections/TrustedSection/TrustedSection.jsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sections/TrustedSection/TrustedSection.jsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/components/Sections/TrustedSection/TrustedSection.jsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Sections/TrustedSection/TrustedSection.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Sections/TrustedSection/TrustedSection.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sections/TrustedSection/TrustedSection.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
_s(TrustedSection, "Emtm9bcs0OqFArY+3WTC9CIHqME=");
_c = TrustedSection;
var _c;
__turbopack_context__.k.register(_c, "TrustedSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_01b0c25a._.js.map