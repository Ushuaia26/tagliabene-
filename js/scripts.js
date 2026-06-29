const wrapper = document.querySelector('.categorias-wrapper');
const footer = document.querySelector('.footer');
const productos = document.querySelector('.productos');
const waFloat = document.querySelector('.whatsapp-float');

window.addEventListener('scroll', () => {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 700;
    const limiteFooter = windowHeight * 0.8;
    const limiteProductos = windowHeight * 0.3;

    const esconder = footerTop < limiteFooter || (productos && productos.getBoundingClientRect().top < limiteProductos);

    if (wrapper) {
        wrapper.style.opacity = esconder ? '0' : '1';
        wrapper.style.pointerEvents = esconder ? 'none' : 'auto';
    }

    if (waFloat) {
        waFloat.style.opacity = footerTop < limiteFooter ? '0' : '1';
        waFloat.style.pointerEvents = footerTop < limiteFooter ? 'none' : 'auto';
    }
});

window.addEventListener('scroll', () => {
    console.log('footer:', footer);
    console.log('waFloat:', waFloat);
    console.log('footerTop:', footer?.getBoundingClientRect().top);
});