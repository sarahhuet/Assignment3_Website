// Get the button:
let mybutton = document.getElementById("buttonContainer");

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// When the user clicks on a menu button, display hidden content
function setEventListeners() {
    
    $(document).on("click","#menu .menuItemButton", function (event) { //limit the search to menu items
        event.stopPropagation(); // Prevent window event to close all menu items
        var selectedMenuItem = $(event.target).find(".menuItem"); 
        var wasVisible = selectedMenuItem.is(":visible"); // Is element visible

        $("#menu .menuItemButton .menuItem").hide();
        // If element was hidden, than show
        if (!wasVisible) {
            $(event.target).find(".menuItem").show();
        }
    });

    $(window).click(function() { // Close menus
        $("#menu .menuItemButton .menuItem").hide(); //Hide the menus if visible
      });
}

// Make sure jQuery is loaded
function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}

defer(setEventListeners);