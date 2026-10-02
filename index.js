// 1. Grab all the navigation link elements
const linkAbout = document.querySelector('.nav-about');
const linkHome = document.querySelector('.nav-home');
const linkServices = document.querySelector('.nav-services');
const linkContacts = document.querySelector('.nav-contacts');

// 2. Grab all your page section container divs
const sectionAbout = document.querySelector('.About-us');
const sectionHome = document.querySelector('.Home');
const sectionServices = document.querySelector('.services');
const sectionContacts = document.querySelector('.Contacts');

// 3. Create a helper function that hides everything first, then shows only the active section
function displaySection(activeSection) {
    // Hide all sections entirely from the layout
    sectionAbout.style.display = 'none';
    sectionHome.style.display = 'none';
    sectionServices.style.display = 'none';
    sectionContacts.style.display = 'none';
    
    // Show only the requested section
    activeSection.style.display = 'block';
}

// 4. Attach click event listeners to each navigation link
linkAbout.addEventListener('click', function(event) {
    event.preventDefault(); // Stop page jumping
    displaySection(sectionAbout);
});

linkHome.addEventListener('click', function(event) {
    event.preventDefault();
    displaySection(sectionHome);
});

linkServices.addEventListener('click', function(event) {
    event.preventDefault();
    displaySection(sectionServices);
});

linkContacts.addEventListener('click', function(event) {
    event.preventDefault();
    displaySection(sectionContacts);
});

