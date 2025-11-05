// Navbar scroll style + mobile toggle + scrollspy + reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const links = document.querySelectorAll('[data-link]');
    const sections = [...document.querySelectorAll('section[id]')];

    // Solid navbar on scroll
    const onScroll = () => {
        if (window.scrollY > 80) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll);

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }
    // Close menu on click
    links.forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

    // Smooth scroll (native behavior via CSS 'scroll-behavior', but prevent default for older)
    links.forEach(a => {
        a.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scrollspy (active link underline)
    const setActive = () => {
        const offset = 120; // height compensation
        let currentId = null;
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if (top - offset <= 0) currentId = sec.id;
        });
        links.forEach(a => {
            a.classList.toggle("active", a.getAttribute("href") === `#${currentId}`);
        });
    };
    setActive();
    window.addEventListener("scroll", setActive);

    // Reveal sections on scroll
    const reveal = () => {
        const trigger = window.innerHeight * 0.85;
        document.querySelectorAll(".section").forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if (top < trigger) sec.classList.add("visible");
        });
    };
    reveal();
    window.addEventListener("scroll", reveal);
    (function () { if (!window.chatbase || window.chatbase("getState") !== "initialized") { window.chatbase = (...arguments) => { if (!window.chatbase.q) { window.chatbase.q = [] } window.chatbase.q.push(arguments) }; window.chatbase = new Proxy(window.chatbase, { get(target, prop) { if (prop === "q") { return target.q } return (...args) => target(prop, ...args) } }) } const onLoad = function () { const script = document.createElement("script"); script.src = "https://www.chatbase.co/embed.min.js"; script.id = "jSrLppg8D6nrwO14UrjIv"; script.domain = "www.chatbase.co"; document.body.appendChild(script) }; if (document.readyState === "complete") { onLoad() } else { window.addEventListener("load", onLoad) } })();

});

    