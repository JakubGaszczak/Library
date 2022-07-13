// Local Storage 
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem("books") == null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }
}

// Delete book
const deleteBook = e => {
    if (e.classList.contains("delete-book")) {
        e.parentElement.parentElement.remove();
    }
}

// Add a new book
const createNewBook = () => {
    const books = document.querySelector(".grid-books");
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#number-of-pages");

    const book = document.createElement("div");
    book.classList.add("book");
    book.innerHTML = `
    <div class="inputs">
        <p class="title">${title.value}</p>
        <p class="author">${author.value}</p>
        <p>${pages.value}</p>
        <div class="delete-book">Delete <i class="fa-solid fa-trash"></i></div>
    </div>`;
    books.appendChild(book);
}

// Error Message 
const errorMessage = () => {
    const form = document.querySelector("form");
    const submitBtn = document.querySelector(".submit-btn");

    const error = document.createElement("div");
    error.innerHTML = 
    "<p class='error'>Uzupełnij wszystkie pola!</p>";
    form.insertBefore(error, submitBtn);

    setTimeout(() => document.querySelector(".error").remove(), 3000);
}

// Inputs Validation
const checkInputs = () => {

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#number-of-pages");

    if (title.value == "" || author.value == "" || pages.value == "") {
        errorMessage();
    } else {
        createNewBook();
    }
}

// Event listner: Delete book
document.querySelector(".grid-books").addEventListener("click", e => {
    deleteBook(e.target);
})

// Event listner: Add a new book
document.querySelector(".submit-btn").addEventListener("click", e => {
    e.preventDefault();
    checkInputs();
})

// Event listner: Open Modal 
document.querySelector(".add-btn").addEventListener("click", () => {
    document.querySelector(".modal-container").style.display = "block";
})

// Event listner: Close Modal
window.addEventListener("click", e => {
    if (e.target.classList == "modal-container") {
        document.querySelector(".modal-container").style.display = "none";
    }
})
