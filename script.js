// Input com pesquisa no google:
const input = document.getElementById("header-search-bar-input");
const magnifyingGlassIcon = document.getElementById("magnifying-glass-icon");

function searchOnGoogle() {
    const query = input.value;
    if (query) {
        const encodedQuery = encodeURIComponent(query);
        const googleSearchURL = 'https://google.com/search?q=' + encodedQuery;
        window.open(googleSearchURL, '_blank').focus();
    }
}

magnifyingGlassIcon.addEventListener('click', searchOnGoogle);
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchOnGoogle();
    }
});

// Pega todos os botões da lista 'ul':
const listOfButtons = document.querySelectorAll('.header-menu-list li button');
listOfButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const googleUrl = 'https://www.google.com.br';
        window.open(googleUrl, '_blank');
    });
})
