// Przykładowa lista filmów
const movies = [
    { title: "Vaiana 2", image: "pics/vaiana.jpg", url: "https://mixdrop.ps/f/1n1lpvl8ixp30p" },
    { title: "Jutro", image: "pics/jutro.jpg", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Film 3", image: "https://via.placeholder.com/200x300", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Film 3", image: "https://via.placeholder.com/200x300", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Film 3", image: "https://via.placeholder.com/200x300", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Film 3", image: "https://via.placeholder.com/200x300", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Film 3", image: "https://via.placeholder.com/200x300", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Film 3", image: "https://via.placeholder.com/200x300", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    { title: "Film 3", image: "https://via.placeholder.com/200x300", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Film 3", image: "https://via.placeholder.com/200x300", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

// Wyświetlanie filmów na stronie
const moviesGrid = document.getElementById('moviesGrid');

function displayMovies(movies) {
    moviesGrid.innerHTML = '';
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
           
        `;
        moviesGrid.appendChild(movieItem);
    });
}

// Funkcja otwierająca film w nowym oknie
function playMovie(url) {
    window.open(url, '_blank');
}

// Wywołanie funkcji na start
displayMovies(movies);

// Obsługa wyszukiwania
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filteredMovies);
    
});
