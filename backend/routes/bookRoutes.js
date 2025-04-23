const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

// Define API endpoint for fetching all books
router.get('/books',async(req,res)=>{
    try {
        // Fetch all books from the database
        const allBooks = await Book.find();

        // Send the entire books array as JSON response
        res.json(allBooks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router