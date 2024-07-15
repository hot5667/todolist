document.addEventListener("DOMContentLoaded", function() {
    const sideBar = document.querySelector('side_bar');
    const mainContent = document.querySelector('main_content');
    const toggleSidebarBtn = document.querySelector('toggle-sidebar-btn');
    const navLinks = document.querySelectorAll('nav-link');
    const sections = document.querySelectorAll('content-section');

    toggleSidebarBtn.addEventListener('click', function() {
        sideBar.classList.toggle('closed'); 
        mainContent.classList.toggle('expanded'); 
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});
