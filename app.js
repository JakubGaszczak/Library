// Error Message 
const errorMessage = () => {
    const modal = document.querySelector(".modal");
    const submitBtn = document.querySelector(".submit-btn");

    const error = document.createElement("div");
    error.innerHTML = 
    "<p>Uzupełnij wszystkie pola!</p>";
    modal.insertBefore(error, submitBtn);

}

// Inputs Validation
const checkInputs = () => {

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#number-of-pages");

    if (title.value == "" || author.value == "" || pages.value == "") {
        errorMessage();
    } else {
        addNewBook();
    }
}

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

errorMessage();