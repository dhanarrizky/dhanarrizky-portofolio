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
const SkillIcons = {
    cpp:"./static/img/Skill-icons/cplusplus.svg",
    angular:"./static/img/Skill-icons/angular.svg",
    css3:"./static/img/Skill-icons/css3.svg",
    django:"./static/img/Skill-icons/django.svg",
    dotnet:"./static/img/Skill-icons/dotnet.svg",
    go:"./static/img/Skill-icons/go.svg",
    html5:"./static/img/Skill-icons/html5.svg",
    htmlx:"./static/img/Skill-icons/htmlx.svg",
    javascript:"./static/img/Skill-icons/javascript.svg",
    laravel:"./static/img/Skill-icons/laravel.svg",
    linuxserver:"./static/img/Skill-icons/linuxserver.svg",
    mysql:"./static/img/Skill-icons/mysql.svg",
    php:"./static/img/Skill-icons/php.svg",
    postgresql:"./static/img/Skill-icons/postgresql.svg",
    postman:"./static/img/Skill-icons/postman.svg",
    python:"./static/img/Skill-icons/python.svg",
    sass:"./static/img/Skill-icons/sass.svg",
    sping:"./static/img/Skill-icons/spring.svg",
    sqlite:"./static/img/Skill-icons/sqlite.svg",
}

const SkillList = {
    WebDevelopment : ['dotnet','django','laravel'],
    FrontEndDevelopment : ['angular','html5','javascript','sass','css3'],
    BackEndDevelopment : ['django','dotnet','laravel','go','python','php','mysql',
        'postgresql','sqlite', 'javascript'
    ],
    SofwareEngineering : ['postman','cpp','go'],
    MaintenanceAndUpdates : ['django','dotnet','laravel','go','python','javascript']
}

// console.log(SkillIcons.angular)

document.addEventListener('DOMContentLoaded', () => {
    const servicesDetailSkill = document.querySelector('.services_detail_skill');
    const body = document.querySelector('body');
    const cardSkills = document.querySelectorAll('.card-skill');
    const closeButton = document.querySelector('.services_detail_skill .close');
    const cardDetailSkillh1 = document.querySelector('.services_detail_skill .background-detail-skill .card-detail-skill .bottom h3');
    const cardDetailSkillp = document.querySelector('.services_detail_skill .background-detail-skill .card-detail-skill .bottom p');
    const cardDetailSkilllogo = document.querySelector('.services_detail_skill .background-detail-skill .card-detail-skill .top i');
    const rightContentDetail = document.querySelector('.card-detail-skill .right-content .content');

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
            cardDetailSkilllogo.classList = logo
            const h1Content = card.querySelector('.content-card h2').innerText;
            cardDetailSkillh1.innerText = h1Content;
            const pContent = card.querySelector('.content-card p').innerText;
            cardDetailSkillp.innerText = pContent;

            let contentdetail = '';
            let filterSkillList = '';

            switch (cardDetailSkillh1.innerText) {
                case 'Web Development':
                    filterSkillList = 'WebDevelopment';
                    break;
                case 'Front-End Development':
                    filterSkillList = 'FrontEndDevelopment';
                    break;
                case 'Back-End Development':
                    filterSkillList = 'BackEndDevelopment';
                    break;
                case 'Software Engineering':
                    filterSkillList = 'SofwareEngineering';
                    break;
                case 'Maintenance and Updates':
                    filterSkillList = 'MaintenanceAndUpdates';
                    break;
                default:
                    break;
            }

            SkillList[filterSkillList].forEach(s => [
                contentdetail += `
                                    <div class="circle-skill">
                                        <div class="img-content">
                                            <img src="${SkillIcons[s]}" alt="${s}">
                                        </div>
                                        <h3>${s}</h3>
                                    </div>
                                `
            ]);
            console.log(contentdetail);

            rightContentDetail.innerHTML = `
                ${contentdetail}
            `;
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            servicesDetailSkill.classList.remove('active');
            setTimeout(() => {
                servicesDetailSkill.classList.remove('visible');
                // rightContentDetail.innerHTML = ``;
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
const educationCard = document.querySelectorAll('.card-bg.education')
const experienceCard = document.querySelectorAll('.card-bg.experience')
const cardsResume = document.querySelectorAll('.card-bg')

sliderEE.forEach(slider => {
    
    slider.addEventListener('click', () => {
        sliderEE.forEach(s => {
            s.classList.remove('active');
        });
        slider.classList.add('active');
        console.log(slider.innerHTML)
        if(slider.innerHTML === 'Experience'){
            educationCard.forEach(e => {
                e.style.display = 'none';
            });
            experienceCard.forEach(e => {
                e.style.display = 'flex';
            });
        } else {
            educationCard.forEach(e => {
                e.style.display = 'flex';
            });
            experienceCard.forEach(e => {
                e.style.display = 'none';
            });
        }
    });
});

const openDescription = () => {
    console.log('test');
}

cardsResume.forEach(c => {
    c.addEventListener('click', () => {
        console.log(c.getAttribute('class'))
    })
});



// button change mode
const changeMode = () => {
    const primaryRedColor = "rgb(255, 0, 0)";
    const primaryBlueColor = "rgb(0, 56, 255)";
    const secondaryRedColor = "rgb(255, 0, 0)";
    const secondaryBlueColor = "rgb(0, 148, 255)";

    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        const styles = getComputedStyle(element);

        // Change color
        if (styles.color === primaryRedColor) {
            element.style.color = primaryBlueColor;
        } else if (styles.color === primaryBlueColor) {
            element.style.color = primaryRedColor;
        }

        // Change border color
        if (styles.borderColor === primaryRedColor) {
            element.style.borderColor = primaryBlueColor;
        } else if (styles.borderColor === primaryBlueColor) {
            element.style.borderColor = primaryRedColor;
        }

        // Change background color
        if (styles.backgroundColor === primaryRedColor) {
            element.style.backgroundColor = primaryBlueColor;
        } else if (styles.backgroundColor === primaryBlueColor) {
            element.style.backgroundColor = primaryRedColor;
        }

        // Change box-shadow color
        if (styles.boxShadow.includes(primaryRedColor)) {
            let newBoxShadow = styles.boxShadow.replace(/rgb\(255, 0, 0\)/g, primaryBlueColor);
            element.style.boxShadow = newBoxShadow;
        } else if (styles.boxShadow.includes(primaryBlueColor)) {
            let newBoxShadow = styles.boxShadow.replace(/rgb\(0, 56, 255\)/g, primaryRedColor);
            element.style.boxShadow = newBoxShadow;
        }

        // Change secondary red to secondary blue
        if (styles.color === secondaryRedColor) {
            element.style.color = secondaryBlueColor;
        } else if (styles.color === secondaryBlueColor) {
            element.style.color = secondaryRedColor;
        }

        if (styles.borderColor === secondaryRedColor) {
            element.style.borderColor = secondaryBlueColor;
        } else if (styles.borderColor === secondaryBlueColor) {
            element.style.borderColor = secondaryRedColor;
        }

        if (styles.backgroundColor === secondaryRedColor) {
            element.style.backgroundColor = secondaryBlueColor;
        } else if (styles.backgroundColor === secondaryBlueColor) {
            element.style.backgroundColor = secondaryRedColor;
        }

        if (styles.boxShadow.includes(secondaryRedColor)) {
            let newBoxShadow = styles.boxShadow.replace(/rgb\(255, 0, 0\)/g, secondaryBlueColor);
            element.style.boxShadow = newBoxShadow;
        } else if (styles.boxShadow.includes(secondaryBlueColor)) {
            let newBoxShadow = styles.boxShadow.replace(/rgb\(0, 148, 255\)/g, secondaryRedColor);
            element.style.boxShadow = newBoxShadow;
        }
    });
}

// const settingBtn = document.querySelector('.settingsCollor')
// settingBtn.addEventListener('click', () => {
//     changeMode();
// });


// send email 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:drizkyk9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
});

// scrolling animation
const idAnimationElements = document.querySelectorAll('.animation-controller');

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                console.log(`I can see this element : ${entry.target.id}`);
            }, 500);
        } else {
            console.log(`xx : ${entry.target.id}`);
        }
    });
};

const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
});

idAnimationElements.forEach(element => {    
    observer.observe(element);
});

