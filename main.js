showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
	let addTxt = document.getElementById("addTxt");
	let notes = localStorage.getItem("notes");

	if (notes == null) notesObj = [];
	else notesObj = JSON.parse(notes);

	notesObj.push(addTxt.value);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	addTxt.value = "";

	showNotes();
});

// Function to show elements from localStorage
function showNotes() {
	let notes = localStorage.getItem("notes");

	if (notes == null) notesObj = [];
	else notesObj = JSON.parse(notes);

	let html = "";

	notesObj.forEach(function(element, index) {
		html += `<div class="notes"
					<h5 class="card-title">
						Note ${index + 1}
					</h5>
					<p class="card-text">
						${element}
					</p>
                
				<button id="${index}" onclick=
					"deleteNote(this.id)">
					Delete Note
				</button>
                <br>
			</div>
		</div>`;
	});

	let notesElm = document.getElementById("notes");

	if (notesObj.length != 0) notesElm.innerHTML = html;
	else
		notesElm.innerHTML = 'Add a note!';
}

// Function to delete a note
function deleteNote(index) {
	let notes = localStorage.getItem("notes");

	if (notes == null) notesObj = [];
	else notesObj = JSON.parse(notes);

	notesObj.splice(index, 1);

	localStorage.setItem("notes",
		JSON.stringify(notesObj));

	showNotes();
}
