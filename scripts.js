/*** Weekly Planner ***/

/*
    Some practice on using forms with the DOM
*/

let nextId = 0; // each entry gets a new id
function getId() {
    nextId += 1;
    return nextId;
}

class Entry {
    constructor(day, category, activity) {
        this.id = getId();
        this.day = day;
        this.category = category;
        this.activity = activity;
    }
}

let colors = {
    cooking: "#c04e3a",
    exercise: "#e4823c",
    family: "#ebbb37",
    me: "#41cfbc",
    housework: "#95ce40",
    projects: "#49b9d4",
    errands: "#458add",
    social: "#765add",
    travel: "#53dd98",
    work: "#a954e6",
    other: "#999999"
}

// Event listener for page load
window.addEventListener("load", function() {
    console.log('Page loaded.');
    init();
});

// DOM code for page elements
function init() {

    let entries = []; // to hold Entry-class objects

    // Create objects for specific form elements
    let day = document.getElementById("day");
    let category = document.getElementById("category");
    let activity = document.getElementById("activity");
    let create = document.getElementById("create");
    let newEntry = document.getElementById("new-entry");
    let form = document.getElementById("form");

    function addNewEntry() {
        // Store data
        let newEntry = new Entry(day.value, category.value, activity.value);
        entries.push(newEntry);
        // Display on page
        let dayList = document.getElementById(newEntry.day + "-list");
        if (dayList.innerHTML === "") {
            dayList.innerHTML += `
                <div class="day-header">${newEntry.day[0].toUpperCase() + newEntry.day.slice(1)}</div>
            `
        }
        dayList.innerHTML += `
            <p class="entry"><span class="dot" id="dot${newEntry.id}">${newEntry.category}</span> ${newEntry.activity}</p>
        `
        document.getElementById("dot" + newEntry.id).style.backgroundColor = colors[newEntry.category];
    }

    function clearForm() {
        day.value = "";
        category.value = "";
        activity.value = "";
    }

    // Non-form click events
    // Add click event for:

    // go-to-form button
    //  - Hide container of go-to-form
    //  - Show container of add and cancel buttons


    // cancel button
    //  - Show container of go-to-form
    //  - Hide container of add and cancel



    // submit button
    //  - Validate form
    //  - Call addNewEntry()
    //  - Call clearForm()
    //  - Show container of go-to-form
    //  - Hide container of add and cancel

}