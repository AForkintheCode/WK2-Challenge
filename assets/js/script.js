
document.getElementById("notes").style.display = 'none'

function toggleNotes() {
   
    notesEl = document.getElementById("notes")
    if (notesEl.style.display === 'none') {
        $( notesEl).slideDown( "slow", function() {
            // Animation complete.
          });
    }
    else {
        $( notesEl).slideUp( "slow", function() {
        })
    }
}


$('#exhibit-4').on("click", function (e){
    toggleNotes();
})

