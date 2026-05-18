function initBlurUp(img) {
    const wrap = img.closest('.blur-up-wrap') || img.closest('.kb-card');
    const lqip = wrap ? wrap.querySelector('.blur-up-lqip') : null;

    const markLoaded = () => {
        img.classList.add('loaded');
        if (lqip) {
            lqip.style.opacity = '0';
            setTimeout(() => { lqip.style.display = 'none'; }, 450);
        }
    };

    if (img.complete && img.naturalWidth > 0) {
        // Defer one frame so the browser paints the initial opacity:0 state first,
        // allowing the CSS transition to run rather than snapping to opacity:1
        requestAnimationFrame(markLoaded);
    } else {
        img.addEventListener('load', markLoaded, { once: true });
    }
}

document.querySelectorAll('img.blur-up').forEach(initBlurUp);

new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (node.nodeType !== 1) continue;
            if (node.matches('img.blur-up')) initBlurUp(node);
            node.querySelectorAll('img.blur-up').forEach(initBlurUp);
        }
    }
}).observe(document.body, { childList: true, subtree: true });
