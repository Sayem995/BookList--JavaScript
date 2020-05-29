class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: "Book one",
                author: "Sayem",
                isbn: "123"
            },
            {
                title: "Book two",
                author: "Hisham",
                isbn: "456"
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
        
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm
            delete">X</a></td>
        `;
    }
}