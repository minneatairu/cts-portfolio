
document.addEventListener('DOMContentLoaded', function() {
    var lastUpdatedSpan = document.getElementById('last-updated-date');
    lastUpdatedSpan.textContent = document.lastModified;
    // If you want to use the current date instead, you can replace the above line with:
    // lastUpdatedSpan.textContent = new Date().toLocaleDateString("en-US");
});

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the div that opens the modal
    var infoDiv = document.querySelector('.info');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the div, open the modal
    infoDiv.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }