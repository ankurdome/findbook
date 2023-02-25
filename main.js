
function findBook() {
     const code = document.getElementById("code").value;
     const book = findBookByCode(code);
     const resultElement = document.getElementById("result");
     if (book) {
       resultElement.textContent = `${book.title} by ${book.author} was found in the library at ${book.shelf} in ${book.row} and ${book.Column}.`;
     } else {
       resultElement.textContent = "The book was not found in the library.";
     }
     return false;
   }

   const books = [
     { code: "B001", title: "The Great Gatsby", author: "F. Scott Fitzgerald", shelf: "2nd Shelf", row: "4th Row", Column: "30th Column"},
     { code: "B002", title: "To Kill a Mockingbird", author: "Harper Lee",shelf: "3rd Shelf", row: "3th Row", Column: "10th Column" },
     { code: "B003", title: "1984", author: "George Orwell", shelf: "6th Shelf", row: "2th Row", Column: "29th Column" },
     { code: "B004", title: "Pride and Prejudice", author: "Jane Austen", shelf: "1st Shelf", row: "4th Row", Column: "18th Column" }
   ];

   function findBookByCode(code) {
     for (let i = 0; i < books.length; i++) {
       if (books[i].code === code) {
         return books[i];
       }
     }
     return null;
   }
