const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-sidebar');

menuToggle.addEventListener('change', function() {
    sidebar.classList.toggle('active', this.checked);
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
    menuToggle.checked = false;
});

// Close sidebar when clicking outside of it
window.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && e.target !== menuToggle && e.target !== document.getElementById('menu-icon')) {
        sidebar.classList.remove('active');
        menuToggle.checked = false;
    }
});