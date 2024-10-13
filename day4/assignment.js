// function Person(age,name){
//     this.age = age;
//     this.name = name;

// }

// let Suraj = new Person(21,"person1");
// console.log(Suraj);

// let Varsha = new Person(22,"person2");
// console.log(Varsha);


// Person.prototype.city = "kalyan";

// Person.prototype.showData = function(){
//     return this.name + ""+this.age;
// }
// console.log(Varsha.showData());
// console.log(Varsha);



// Base class for all books
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function() {
    return this.title + " by " + this.author + ", published in " + this.year + ".";
};

function PhysicalBook(title, author, year, shelfNumber) {
    Book.call(this, title, author, year);
    this.shelfNumber = shelfNumber;
}

PhysicalBook.prototype = Object.create(Book.prototype);
PhysicalBook.prototype.constructor = PhysicalBook;

PhysicalBook.prototype.getSummary = function() {
    return Book.prototype.getSummary.call(this) + " Shelf Number: " + this.shelfNumber + ".";
};

function EBook(title, author, year, fileSize, format) {
    Book.call(this, title, author, year);
    this.fileSize = fileSize;
    this.format = format;
}

EBook.prototype = Object.create(Book.prototype);
EBook.prototype.constructor = EBook;

EBook.prototype.getSummary = function() {
    return Book.prototype.getSummary.call(this) + " File Size: " + this.fileSize + "MB, Format: " + this.format + ".";
};

const Book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(Book1);

console.log(Book1.getSummary());


const physicalBook1 = new PhysicalBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "A3");
const physicalBook2 = new PhysicalBook("1984", "George Orwell", 1949, "B1");

console.log(physicalBook1.getSummary());
console.log(physicalBook2.getSummary());

const eBook1 = new EBook("JavaScript: The Good Parts", "Douglas Crockford", 2008, 1.2, "PDF");
const eBook2 = new EBook("Eloquent JavaScript", "Marijn Haverbeke", 2018, 1.5, "EPUB");


console.log(eBook1.getSummary());
console.log(eBook2.getSummary());
