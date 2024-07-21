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

// home scripts
const profession = document.querySelector('#profession');
const cover = document.querySelector('.cover');
const professioncover = document.querySelector('#profession-cover');

const contents = [
    "Programmer",
    "Web Development",
    "Front-End Development",
    "Back-End Development",
    "Software Engginer",
    "Freelancer"
];

let index = 0;

function updateContent() {
    if (cover.clientWidth >= (professioncover.clientWidth - 35)) {
        profession.innerHTML = contents[index];
        index = index + 1;
        if(index >= contents.length) {
            index = 0;
        }
    }
}

setInterval(updateContent, 20);

// services scripts
document.addEventListener('DOMContentLoaded', () => {
    const servicesDetailSkill = document.querySelector('.services_detail_skill');
    const body = document.querySelector('body');
    const cardSkills = document.querySelectorAll('.card-skill');
    const closeButton = document.querySelector('.services_detail_skill .close');

    const updateDetailSkill = () => {
        if (servicesDetailSkill && servicesDetailSkill.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    };

    cardSkills.forEach(card => {
        card.addEventListener('click', () => {
            servicesDetailSkill.classList.add('active');
            updateDetailSkill();
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            servicesDetailSkill.classList.remove('active');
            setTimeout(() => {
                servicesDetailSkill.classList.remove('visible');
                updateDetailSkill();
            }, 1000); // Sesuaikan waktu dengan durasi transisi CSS (1s)
        });
    }
});



// resume script
document.addEventListener('DOMContentLoaded', () => {
    const resumeLabels = document.querySelectorAll('#resume-label h3');
    resumeLabels.forEach(label => {
        label.addEventListener('click', () => {
            resumeLabels.forEach(l => {
                if (l !== label) {
                    l.classList.remove('active');
                }
            });
            label.classList.add('active');
        });
    });
});

