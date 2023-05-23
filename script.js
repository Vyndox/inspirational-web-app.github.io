const quotes = [
  {
    text: "Yaşamanın en büyük zaferi hiç düşmemek değil, her düştüğümüzde ayağa kalkmaktır.",
    author: "Nelson Mandela"
  },
  {
    text: "Harika işler çıkarmanın tek yolu, yaptığınız işi sevmektir.",
    author: "Steve Jobs"
  },
  {
    text: "Başarı nihai değildir, başarısızlık ölümcül değildir: Önemli olan devam etme cesaretidir.",
    author: "Winston Churchill"
  },
  {
    text: "Eylem, düşüncenin meyvesidir.",
    author: "Aristotle"
  },
  {
    text: "En büyük savaş, kendi nefsimize karşı verdiğimiz savaştır.",
    author: "Mustafa Kemal Atatürk"
  },
  {
    text: "Yükselmek için öncelikle kendimizi yenmemiz gerekmektedir.",
    author: "Mustafa Kemal Atatürk"
  },
  {
    text: "Beni görmek demek, mutlaka yüzümü görmek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu yeterlidir.",
    author: "Mustafa Kemal Atatürk"
  },
  {
    text: "Nedir bu güzelliğin? Gözle görülmez, kulakla duyulmaz... ",
    author: "myztrion"
  },
  {
    text: "Eğitimdir ki bir milleti ya özgür, bağımsız, şanlı, yüksek bir toplum halinde yaşatır; ya da bir milleti köle ve soysuz bir topluluk haline getirir.",
    author: "Mustafa Kemal Atatürk"
  },
  {
    text: "Kendini bilen, her şeyi bilir.",
    author: "Eflatun"
  },
  {
    text: "Hayattaki en büyük zafer, kendimizi yenmektir.",
    author: "Pythagoras"
  },
  {
    text: "Bilge insan, kendi içine bakar; aptal ise dışarıya.",
    author: "Sokrates"
  },
  {
    text: "Bilge insanlar, sözleriyle değil, eylemleriyle öğretirler.",
    author: "Epiktetos"
  },
  {
    text: "Bir insan, arzularını kontrol edebildiği ölçüde gerçek bir özgürlüğe sahip olur.",
    author: "Epikuros"
  },
  {
    text: "Daha iyi bir dünya yaratmanın en iyi yolu, kendimizde değişim yapmaktır.",
    author: "Sokrates"
  },
  {
    text: "Bir kişiye yol gösterirseniz, bir kez öğretirsiniz; bir kişiye nasıl yol bulacağını öğretirseniz, bir ömür boyu rehber olursunuz.",
    author: "Lao Tzu"
  }
  // Add more quotes here
];

let currentQuoteIndex = 0;
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote-btn');
const favoriteButton = document.getElementById('favorite-btn');
const shareButton = document.getElementById('share-btn');
const favoritesList = document.getElementById('favorites-list');

// Function to display a new random quote
function displayNewQuote() {
  quoteTextElement.classList.remove('fade-in');
  quoteTextElement.classList.add('fade-out');

  setTimeout(function () {
      const quote = quotes[currentQuoteIndex];
      quoteTextElement.textContent = quote.text;
      quoteAuthorElement.textContent = quote.author;

      quoteTextElement.classList.remove('fade-out');
      quoteTextElement.classList.add('fade-in');
  }, 300); // Adjust the delay (in milliseconds) as needed
}

// Function to handle the New Quote button click event
function handleNewQuoteClick() {
  currentQuoteIndex = getRandomQuoteIndex();
  displayNewQuote();
}

// Function to get a random quote index
function getRandomQuoteIndex() {
  let newIndex = currentQuoteIndex;
  while (newIndex === currentQuoteIndex) {
    newIndex = Math.floor(Math.random() * quotes.length);
  }
  return newIndex;
}

// Event listener for the "New Quote" button
newQuoteButton.addEventListener('click', handleNewQuoteClick);

// Function to add the current quote to favorites
function addToFavorites() {
  const quote = quotes[currentQuoteIndex];
  const favoriteItem = document.createElement('li');
  favoriteItem.classList.add('favorite-quote');
  favoriteItem.innerHTML = `
    <p class="quote-text">${quote.text}</p>
    <p class="quote-author">${quote.author}</p>
  `;
  
  // Add the new favorite at the top of the list
  if (favoritesList.firstChild) {
    favoritesList.insertBefore(favoriteItem, favoritesList.firstChild);
  } else {
    favoritesList.appendChild(favoriteItem);
  }
}


// Event listener for the "Favorite" button
favoriteButton.addEventListener('click', addToFavorites);

// Function to copy the quote text to the clipboard
function copyToClipboard() {
  const textToCopy = quoteTextElement.textContent;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert('Quote copied to clipboard!');
    })
    .catch(() => {
      alert('Failed to copy the quote.');
    });
}

// Event listener for the "Share" button
shareButton.addEventListener('click', copyToClipboard);

// Initial quote display
displayNewQuote();
