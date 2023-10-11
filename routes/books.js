const express = require("express");
const BookModel = require("../models/Books");

const routes = express.Router();

//Get All Books
// link: http://localhost:3001/library/books
routes.get("/books", async (req, res) => {
    try {
        const bookList = await BookModel.find({});
        res.status(200).send(bookList);
    } catch (error) {
        res.status(500).send(error);
    }

    // res.send({message: "Get All Books"})
});

//Add NEW Book
// link: http://localhost:3001/library/books
routes.post("/books", async (req, res) => {

    try {
        const newBook = new BookModel({
            ...req.body,
        });
        await newBook.save();
        // BookModel.create({}) combo of new and save
        res.status(201).send(newBook);
    } catch {
        res.status(500).send(error);
    }

    //   res.send({ message: "Add NEW Book" });
});

//Update existing Book By Id
routes.post("/book/:bookid", async (req, res) => {

    // try {
    //     const book = await BookModel.findOneAndUpdate(
    //         { _id: req.params.bookid },
    //         { ...req.body },
    //         { new: true }
    //     );
    //     if (!book) {
    //         res.status(404).send({ message: "Book not found" });
    //     } else {
    //         res.status(200).send(book);
    //     }
    // }
    // catch (error) {
    //     res.status(500).send(error);
    // }

    //  res.send({ message: "Update existing Book By Id" });
});

//Delete Book By ID
// link: http://localhost:3001/library/book/....<id>....
routes.delete("/book/:bookid", async (req, res) => {

    try {
        // const book = await BookModel.deleteOne({ _id: req.params.bookid });
        const book = await BookModel.findOneAndDelete( req.params.bookid );
        if (!book) {
            res.status(404).json({ message: "Book not found" });
        } else {
            res.status(200).send(book);
            // res.status(200).json({ message: "Book deleted successfully" });
        }
    } catch (error) {
        res.status(500).send(error);
    }

    // res.send({ message: "Delete Book By ID" });
});

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    res.send({ message: "Get Book By ID" });
});

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({ message: "Get All Books in sorted order" });
});

module.exports = routes;
