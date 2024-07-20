// styleing for navbar
const navLinks = document.querySelectorAll('.nav-item--links');
const bars = document.querySelector('.bars');
const sidebar = document.querySelector('.side-bar');

bars.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const href = link.getAttribute('href');

        navLinks.forEach(l => {
            if(l.getAttribute('href') === href) {
                l.parentElement.classList.add('active');
            } else {
                l.parentElement.classList.remove('active');
            }
        });
    });
});

const checkWidth = () => {
    if(window.innerWidth >= 1102){
        sidebar.classList.remove('active');
    }
    console.log("call checkWidth function");
};

window.addEventListener('resize', checkWidth);
checkWidth();