const Book = require("../models/Book");

// Function to send intial data into database
const sendDatabase = async () => {
  try {
    await Book.deleteMany(); // Clear existing data

    const books = [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        description: "A classic novel about the American Dream",
        price: 20,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110011815/sutterlin-1362879_640-(1).jpg",
      },
      {
        title: "The 48 Laws of Power",
        author: "Robert Greene",
        genre: "Self-Help / Strategy",
        description: " is a self-help book by American author Robert Greene.",
        price: 28,
        image:
          "https://wizdomapp.com/wp-content/uploads/2024/05/48-laws-of-power.jpg",
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help / Personal Development",
        description:
          "Atomic Habits will teach you how to make the small changes.",
        price: 128,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymKTEyT6CEXu3K_mePuFR-tnnUr0NTHVcAA&s",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        description: "A powerful story of racial injustice and moral growth.",
        price: 15,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg",
      },
      {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        genre: "Self-Help / Communication",
        description: "One of the most influential self-help books.",
        price: 22,
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLsABVAbPI1666iRXEjxCubcZp9FvS5r81p4SLr9C2MYz2ScjCv_cA3qfBSWWoFmh-FZLzeQCv8rJFyekNo5GyTGFc2vfXE8kctn9CKuOIfuJtk4xtNi4chXamthAaHbCqZVJ-TV5_gDU&usqp=CAc",
      },
      {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        description: "A dystopian vision of a totalitarian future society.",
        price: 255,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg",
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        description: "A classic novel about the American Dream.",
        price: 220,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg",
      },
      {
        "title": "Whispers of the Forgotten Realm",
        "author": "Elena Thornfield",
        "genre": "Fantasy",
        "description": "An epic journey through a hidden world.",
        "price": 24,
        "image": "https://m.media-amazon.com/images/I/51-gFdj9TiL._BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg"
      },
      {
        "title": "Shadows Beneath the Aurora",
        "author": "Maxwell Drake",
        "genre": "Science Fiction",
        "description": "In a future where Earth is frozen under the aurora's light.",
        "price": 21,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfgnBhHZtRHnCIq5EvuOW5BOKUJuhQrlGqw&s"
      },
      {
        "title": "The Clockmaker's Secret",
        "author": "Vivienne Cross",
        "genre": "Mystery",
        "description": "When a retired detective inherits a broken clock.",
        "price": 19,
        "image": "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
      },
      {
        "title": "Petals in the Wind",
        "author": "Isabel Moreno",
        "genre": "Romance",
        "description": "Two souls from rival flower farms discover love.",
        "price": 17,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA_67wqcU4xoMWE2fMbVf2XTnJU_jUaFPXQ&s"
      },
      {
        "title": "Ashes of the Empire",
        "author": "Tobias Granger",
        "genre": "Historical Fiction",
        "description": "Set in post-war Europe, a disillusioned soldier.",
        "price": 23,
        "image": "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
      },
      {
        "title": "Echoes of Hollow Creek",
        "author": "Marianne Hale",
        "genre": "Thriller",
        "description": "A journalist returns to her hometown to investigate her sister's death.",
        "price": 20,
        "image": "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d"
      },
      {
        "title": "The Alchemist's Code",
        "author": "Sebastian Vale",
        "genre": "Adventure",
        "description": "A cryptic manuscript draws an unlikely trio.",
        "price": 25,
        "image": "https://www.hollywoodreporter.com/wp-content/uploads/2021/07/book-The-Alchemist-book.jpg"
      },
      {
        "title": "Letters from Solitude",
        "author": "Claire Wren",
        "genre": "Literary Fiction",
        "description": "A reclusive artist finds healing and unexpected connection.",
        "price": 18,
        "image": "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d"
      },
    ];
    await Book.insertMany(books);
    console.log("Database sended successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

module.exports = sendDatabase;
