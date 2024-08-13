document.getElementById("intro-link").classList.add('active');
const menuItems = document.querySelectorAll('.side-link');
const handleClick = (event) => {
    document.getElementById("left-sidebar").classList.remove('sidebar-toggle');
    menuItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
};
menuItems.forEach(item => item.addEventListener('click', handleClick));

document.getElementById("menu-toggle").addEventListener('click', function () {
    document.getElementById("left-sidebar").classList.toggle('sidebar-toggle');
});