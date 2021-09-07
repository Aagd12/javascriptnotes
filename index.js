console.log("welocome saurabh");
let addBtn = document.getElementsByClassName("addBtn");
let addBtn1 = document.getElementsByClassName("addBtn");
let inputText = document.getElementById("inputText");
let notes = localStorage.getItem("notes");
if (notes == null) {
    notesObj = [];
} else {
    notesObj = JSON.parse(notes);
}

showNotes();
addBtn[0].addEventListener("click", () => {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(inputText.value);
    inputText.value = "";
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // console.log(notesObj);
    showNotes();
});


function delete1(index) {
    let notes = localStorage.getItem("notes");
    console.log(index);
    if (notes == null) {
        notesObj = [];
    } else {

        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

};

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);

    }
    // console.log(notesObj);
    let html = "";
    notesObj.forEach(function(element, index) {

        html += `<div class="card me-2 mb-2 note"  style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Notes ${index+1}</h5>
      <p class="card-text">${element}</p>
      <button class="btn btn-primary addBtn1 "onclick="delete1(this.id)" >deleteNote</button>
    </div>
  </div>`;

    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = "For showiing notes you have to first add notes  ";
    }
};
let search = document.getElementById("searchText");
search.addEventListener("input", () => {
    let notes = localStorage.getItem("notes");
    let Text = search.value.toLowerCase();
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);

    }
    let cards = document.getElementsByClassName("note");
    Array.from(cards).forEach(function(element, index) {
        let cardText = document.getElementsByClassName("card-text")[index].innerText;


        if (cardText.includes(Text)) {
            console.log("find");
            console.log(cardText);
            element.style.display = "block";
        } else {
            console.log("notfind");
            console.log(cardText);
            element.style.display = "none";
        }

    })
});