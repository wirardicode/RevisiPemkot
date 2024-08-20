function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Check if user is logged in
if (!localStorage.getItem('loggedIn')) {
    alert('You must be logged in to view this page.');
    window.location.href = 'index.html'; // Redirect to login page
}

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html'; // Redirect to login page
}
document.addEventListener('DOMContentLoaded', function () {
    // Get the current page filename
    var path = window.location.pathname;
    var page = path.split("/").pop();

    // Get all nav links
    var links = document.querySelectorAll('.nav-link');

    // Remove 'active' class from all links
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    // Add 'active' class to the correct link based on the current page
    var activeLink = document.querySelector('a[href="' + page + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }
});