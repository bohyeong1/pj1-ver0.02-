function goToPage(pageId) {
    const currentPage = document.querySelector('.page:not([style*="display: none"])');
    const nextPage = document.getElementById(pageId);

    gsap.timeline()
        .to(currentPage, { y: '-100%', duration: 1, ease: 'power2.inOut' })
        .set(currentPage, { display: 'none' })
        .set(nextPage, { display: 'block', y: '100%' })
        .to(nextPage, { y: '0%', duration: 1, ease: 'power2.inOut' });
}