console.log('welcome to this app.this is app.js');
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addtitle = document.getElementById("addtitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }



    let myObj={
        title:addtitle.value,
        text:addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));  // takes obj and returns string because in local storage we need to store data in the form of string
    addTxt.value = "";
    addtitle.value="";
    console.log(notesObj);
    showNotes();
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);//takes input as a string and returns as a object
    }

    let html = "";
    notesObj.forEach(function (element, index) {  //this will   show all the notes in your notes panel
        html += `    
        <div class="noteCard my-2 mx-2  card" style="width: 18 rem;">
           <div class="card-body">
                <h5 class="card-title">  ${element.title}</h5>
                <p class="card-text"> ${element.text}</p>
                <button id ="${index}"   onClick ="deleteNote(this.id)"  class="btn btn-primary">Delete Node</button>
            </div>
        </div>`


    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show!  "Add a Note"  section above add notes.; `
    }
}

//this is used to add specific id when we click on that button
//function to delete note
function deleteNote(index) {
    console.log('i am deleting', index);


    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1); //it is used for deleting note
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//for serarch txt
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    console.log('Input event  fired !');
})
