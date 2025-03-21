const booksData = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    category: "Fiction",
    publishedYear: 1925,
    price: 829.17,
    rating: 4.5,
    coverImage: "https://i.pinimg.com/736x/9f/6f/81/9f6f81ec648dcbdf6691f2f590bd2b5b.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel depicting a totalitarian society under constant surveillance.",
    category: "Fiction",
    publishedYear: 1949,
    price: 1078.17,
    rating: 4.6,
    coverImage: "https://99bookstores.com/cdn/shop/files/e4529c46-a9e6-4d78-b224-89724e29822e.png?v=1700027994",
  },
  {
    id: 3,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "An exploration of the history of human civilization from ancient times to modern society.",
    category: "Non-Fiction",
    publishedYear: 2011,
    price: 1244.17,
    rating: 4.7,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1501466378i/35858697.jpg",
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    description: "A science fiction epic set on the desert planet Arrakis, exploring power and destiny.",
    category: "Sci-Fi",
    publishedYear: 1965,
    price: 1327.17,
    rating: 4.6,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
  },
  {
    id: 5,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    description: "The powerful and moving diary of Anne Frank, a Jewish girl hiding during WWII.",
    category: "Biography",
    publishedYear: 1947,
    price: 912.17,
    rating: 4.8,
    coverImage: "https://m.media-amazon.com/images/I/71LxcogUxpL.jpg",
  },
  {
    id: 6,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about racial injustice in the Deep South, seen through the eyes of a young girl.",
    category: "Fiction",
    publishedYear: 1960,
    price: 995.17,
    rating: 4.8,
    coverImage: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
  },
  {
    id: 7,
    title: "The Wright Brothers",
    author: "David McCullough",
    description: "A biography of the pioneers of aviation, Wilbur and Orville Wright.",
    category: "Biography",
    publishedYear: 2015,
    price: 1161.17,
    rating: 4.7,
    coverImage: "https://m.media-amazon.com/images/I/71+yi2nPAEL.jpg",
  },
  {
    id: 8,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description: "An exploration of cosmology and black holes by renowned physicist Stephen Hawking.",
    category: "Non-Fiction",
    publishedYear: 1988,
    price: 1410.17,
    rating: 4.9,
    coverImage: "https://m.media-amazon.com/images/I/81pQPZAFWbL.jpg",
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    description: "A dystopian sci-fi novel exploring a future society driven by technological advancements.",
    category: "Sci-Fi",
    publishedYear: 1932,
    price: 912.17,
    rating: 4.5,
    coverImage: "https://m.media-amazon.com/images/I/917t3Joq2WL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 10,
    title: "The Art of War",
    author: "Sun Tzu",
    description: "An ancient Chinese text on military strategy and tactics.",
    category: "History",
    publishedYear: -500,
    price: 663.17,
    rating: 4.6,
    coverImage: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/f/8/c/the-art-of-war-original-imagmfcbdczshfpa.jpeg?q=90&crop=false",
  },
  {
    id: 11,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    description: "A biography of Apple co-founder Steve Jobs, detailing his life and innovations.",
    category: "Biography",
    publishedYear: 2011,
    price: 1493.17,
    rating: 4.8,
    coverImage: "https://www.recordonline.com/gcdn/authoring/2011/10/22/NTHR/ghows-TH-44d50501-d3f6-408c-890a-c7b67752a220-4c2464b3.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp",
  },
  {
    id: 12,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A fantasy adventure following Bilbo Baggins on a journey to reclaim a lost kingdom.",
    category: "Fiction",
    publishedYear: 1937,
    price: 1161.17,
    rating: 4.8,
    coverImage: "https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 13,
    title: "The Martian",
    author: "Andy Weir",
    description: "A sci-fi survival, thriller story about an astronaut stranded on Mars and how he survives.",
    category: "Sci-Fi",
    publishedYear: 2014,
    price: 1244.17,
    rating: 4.9,
    coverImage: "https://m.media-amazon.com/images/I/51QimqeXMXL.jpg",
  },
  {
    id: 14,
    title: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    description: "A detailed history of Nazi Germany from its origins to its downfall.",
    category: "History",
    publishedYear: 1960,
    price: 1659.17,
    rating: 4.8,
    coverImage: "https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?userID=PLS55484&password=CC90878&Value=9781441734235&content=L&Return=1&Type=L",
  },
  {
    id: 16,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A story about what happens to a teenage rebellion and identity in post-war America.",
    category: "Fiction",
    publishedYear: 1951,
    price: 912.17,
    rating: 4.4,
    coverImage: "https://m.media-amazon.com/images/I/7108sdEUEGL.jpg",
  },
  {
    id: 17,
    title: "Cosmos",
    author: "Carl Sagan",
    description: "A journey through space, through time, and the history and future of scientific discovery.",
    category: "Non-Fiction",
    publishedYear: 1980,
    price: 1327.17,
    rating: 4.8,
    coverImage: "https://rukminim2.flixcart.com/image/850/1000/l5jxt3k0/book/i/a/p/cosmos-original-imagg6u2kze264xu.jpeg?q=90&crop=false",
  },
  {
    id: 18,
    title: "Foundation",
    author: "Isaac Asimov",
    description: "A sci-fi classic about the rise,rule and fall of an unkown and a galactic empire .",
    category: "Sci-Fi",
    publishedYear: 1951,
    price: 1161.17,
    rating: 4.7,
    coverImage: "https://www.scifimind.com/wp-content/uploads/2022/02/Foundation.jpg",
  },
  {
    id: 19,
    title: "The Guns of August",
    author: "Barbara W. Tuchman",
    description: "A historical account of the events leading to World War I and other circumstances.",
    category: "History",
    publishedYear: 1962,
    price: 1244.17,
    rating: 4.8,
    coverImage: "https://m.media-amazon.com/images/I/71vkxIftlzL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 20,
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    description: "The autobiography of Nelson Mandela, chronicling his journey to freedom.",
    category: "Biography",
    publishedYear: 1994,
    price: 1577.17,
    rating: 4.9,
    coverImage: "https://m.media-amazon.com/images/I/81ROb+GiBdL.jpg",
  },
  {
    id: 21,
    title: "Moby-Dick",
    author: "Herman Melville",
    description: "A thrilling adventure of obsession and revenge on the dark, terrific, high seas.",
    category: "Fiction",
    publishedYear: 1851,
    price: 995.17,
    rating: 4.9,
    coverImage: "https://m.media-amazon.com/images/I/71K4OH9CqOL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 22,
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    description: "A fun and insightful exploration of science and human curiosity.",
    category: "Non-Fiction",
    publishedYear: 2003,
    price: 1202.67,
    rating: 4.8,
    coverImage: "https://m.media-amazon.com/images/I/71yt6mN5HuL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 23,
    title: "Neuromancer",
    author: "William Gibson",
    description: "A cyberpunk and a sci-fi novel that revolutionized the genre and generic one.",
    category: "Sci-Fi",
    publishedYear: 1984,
    price: 1078.17,
    rating: 4.6,
    coverImage: "https://m.media-amazon.com/images/I/81m-rJnUdRL.jpg",
  },
  {
    id: 24,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    description: "A historical analysis of how geography shaped human civilizations.",
    category: "History",
    publishedYear: 1997,
    price: 1410.17,
    rating: 4.7,
    coverImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguh7eDwl6JHfD1AmjDqYMpIHWH4fd6rx2W8hqwiP6POn6RITfOmpRtKKecvX0pW2HDpF22a67TZ5R5L91TeUGxGQ9cFB9dSYmkLfJZnQF_YkIBAlGPDXnzFMMo95OjUYvryYcURISNwzg/w1200-h630-p-k-no-nu/guns-germs-and-steel.jpg",
  },
  {
    id: 25,
    title: "The Autobiography of Benjamin Franklin",
    author: "Benjamin Franklin",
    description: "The life and insights of one of America's founding fathers.",
    category: "Biography",
    publishedYear: 1791,
    price: 746.17,
    rating: 4.5,
    coverImage: "https://img.perlego.com/book-covers/1302691/9781775413486_300_450.webp",
  },
  {
    id: 26,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A timeless romance novel about love and social status.",
    category: "Fiction",
    publishedYear: 1813,
    price: 829.17,
    rating: 4.8,
    coverImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1681804503l/129915654.jpg",
  },
  {
    id: 27,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    description: "An evolutionary biology classic introducing the gene-centered view of evolution.",
    category: "Non-Fiction",
    publishedYear: 1976,
    price: 1161.17,
    rating: 4.8,
    coverImage: "https://m.media-amazon.com/images/I/61CXvkfdXlL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 28,
    title: "Snow Crash",
    author: "Neal Stephenson",
    description: "A sci-fi cyberpunk thriller about virtual reality and hacking.",
    category: "Sci-Fi",
    publishedYear: 1992,
    price: 1244.17,
    rating: 4.7,
    coverImage: "https://m.media-amazon.com/images/I/71k8hM3jrTL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 29,
    title: "The Crusades: The Authoritative History",
    author: "Thomas Asbridge",
    description: "A detailed history of the Crusades from both Christian and Muslim perspectives.",
    category: "History",
    publishedYear: 2010,
    price: 1493.17,
    rating: 4.9,
    coverImage: "https://m.media-amazon.com/images/I/71xaXZr76pL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 30,
    title: "Leonardo da Vinci",
    author: "Walter Isaacson",
    description: "A deep dive into the genius of Leonardo da Vinci and his contributions to science and art.",
    category: "Biography",
    publishedYear: 2017,
    price: 1659.17,
    rating: 4.8,
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKrdx8_e54z2Q89iAORCh8SRBQnRTMmu5yw&s",
  },
];

export default booksData;
  