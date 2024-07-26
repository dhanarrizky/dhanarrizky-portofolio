// styleing for navbar
const navLinks = document.querySelectorAll('.nav-item--links');
const bars = document.querySelector('.bars');
const sidebar = document.querySelector('.side-bar');
const sections = document.querySelectorAll('.sections');

// check scrolling id sections bars
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
    });
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + current) {
            link.parentElement.classList.add('active');
        }
    });
});



bars.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


const checkWidth = () => {
    if(window.innerWidth >= 1102){
        sidebar.classList.remove('active');
    }
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
    const cardDetailSkillh1 = document.querySelector('.services_detail_skill .background-detail-skill .card-detail-skill .bottom h3');
    const cardDetailSkillp = document.querySelector('.services_detail_skill .background-detail-skill .card-detail-skill .bottom p');
    const cardDetailSkilllogo = document.querySelector('.services_detail_skill .background-detail-skill .card-detail-skill .top i');

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
            const logo = card.querySelector('.top-card .logo i').classList;
            console.log("logo : ", logo);
            cardDetailSkilllogo.classList = logo
            const h1Content = card.querySelector('.content-card h2').innerText;
            console.log("h1 : ", h1Content);
            cardDetailSkillh1.innerText = h1Content;
            const pContent = card.querySelector('.content-card p').innerText;
            console.log("p : ", pContent);
            cardDetailSkillp.innerText = pContent;
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            servicesDetailSkill.classList.remove('active');
            setTimeout(() => {
                servicesDetailSkill.classList.remove('visible');
                updateDetailSkill();
            }, 1000);
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

const sliderEE = document.querySelectorAll('.slider-experience-education h1');

sliderEE.forEach(slider => {
    
    slider.addEventListener('click', () => {
        sliderEE.forEach(s => {
            s.classList.remove('active');
        });
        slider.classList.add('active');
    });
});

