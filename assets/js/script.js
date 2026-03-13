// Lógica de Busca e Categorias integradas
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.side-item');
const cards = document.querySelectorAll('.product-card');

function filterProducts() {
    const term = searchInput.value.toLowerCase().trim();
    const activeCategory = document.querySelector('.side-item.active').getAttribute('data-filter');

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const sku = card.querySelector('.sku-text').innerText.toLowerCase();
        const category = card.getAttribute('data-category');

        const matchesSearch = title.includes(term) || sku.includes(term);
        const matchesCategory = activeCategory === 'todos' || category === activeCategory;

        card.style.display = (matchesSearch && matchesCategory) ? 'flex' : 'none';
    });
}

searchInput.addEventListener('input', filterProducts);

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.side-item.active').classList.remove('active');
        btn.classList.add('active');
        filterProducts();
    });
});

// Carrossel Automático
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((s, i) => {
        s.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);