const library = {
    books: [],
    addBook: function (title, author, yearPublished) {
        const newBook = {
            title: title,
            author: author,
            yearPublished: yearPublished
        };
        this.books.push(newBook);
    },
    getBooksByAuthor: function (author) {
        const authors = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].author === author) {
                authors.push(this.books[i]);
            }
        }
        return authors;
    },
    removeBook: function (title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                this.books.splice(i, 1);
                break;
            }
        }
    },
    getAllBooks: function () {
        const titles = [];
        for (let i = 0; i < this.books.length; i++) {
            titles.push(this.books[i].title);
        }
        return titles;
    }
};
library.addBook('Alchemist', 'ABC', 1925);
library.addBook('To good to be true', 'Hoolin Peter', 1960);
library.addBook('The nightsky', 'Hollin Coover', 1949);
const Hollinbooks = library.getBooksByAuthor('Hollin Coover');
console.log('Books by Hollin Coover:', Hollinbooks);
library.removeBook('Alchemist');
const allBookTitles = library.getAllBooks();
console.log('All book titles:', allBookTitles);