// Blur-up: swap base64 placeholder for real image when in viewport
const blurUps = document.querySelectorAll('img.blur-up[data-src]');

if (blurUps.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const img = entry.target;
                const real = new Image();
                real.onload = () => {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                };
                real.src = img.dataset.src;
                observer.unobserve(img);
            });
        },
        { rootMargin: '200px' }
    );

    blurUps.forEach((img) => observer.observe(img));
}
