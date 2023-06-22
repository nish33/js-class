function myFunction() {
  console.log("My Function");
}

function inputChange() {
  console.log("Changed Input Field");
}

function toggleColor(el) {
  el.style.backgroundColor == "yellow"
    ? (el.style.backgroundColor = "transparent")
    : el.style.backgroundColor = "yellow";
}

// myFunction();

/**
 * HTML Mostly use events
 * 1. onchange - Invoked when any changes appear in HTML element
 * 2. onclick
 * 3. onmouseover
 * 4. onmouseout
 * 5. onkeydown
 * 6. onkeyup
 * 7. onload
 */


/**
 * JS Objects
 */

const myBike = {
    color: "red",
    engine: "125cc",
    fuelCapacity: 10
};

console.log(myBike);
console.log(myBike.color);
console.log(myBike["color"]);

const access = "engine";
myBike.access = "mileage";
console.log(myBike[access]);

myBike.mileage = "50kpl";
myBike.engine = "150cc";
console.log(myBike.mileage);

const myDetails = {
    firstName: "Nishant",
    lastName: "Phuyal",
    fullName: function () {
        return myDetails.firstName + " " + this.lastName;
    }
}

console.log(myDetails.fullName());