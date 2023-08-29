const profile = {
    firstName: "Elon",
    lastName: "Musk",
    walletBalance: 3500
}
document.querySelectorAll('.profile-name').forEach(elem => {
    elem.innerHTML = profile.firstName + " " + profile.lastName;
})
document.querySelector('.profile-firstname').innerHTML = profile.firstName;

const openProfileMenu = () => {
    document.querySelector('.profile-section').classList.remove('hide')
}
const closeProfileMenu = () => {
    document.querySelector('.profile-section').classList.add('hide')
}
const pages = [
    {
        name: 'home',
        page: document.querySelector('.home'),
        tab: document.querySelector('.home-tab')
    },
    {
        name: 'jobs',
        page: document.querySelector('.jobs'),
        tab: document.querySelector('.jobs-tab')
    },
    {
        name: 'favorites',
        page: document.querySelector('.favorites'),
        tab: document.querySelector('.favorites-tab')
    },
]
pages.map((p) => {
    const {tab, name, page} = p
    tab.addEventListener('click', () => {
        tab.classList.add('pressed');
        page.classList.remove('hide-element');
        pages.map((i) => {
            if(i.name !== name){
                i.tab.classList.remove('pressed');
                i.page.classList.add('hide-element');
            }
        })
    })
})
let favouriteJobs = [
    {
        company: "labdrill",
        position: "frontend developer",
        detail: "Assist in developing user-facing feautures using HTML, CSS and JavaScript ",
        difficulty: 3,
        imageUrl: "images/job1.png",
        pay: 540
    },
    {
        company: "rangreen",
        position: "digital marketing specialist",
        detail: "selling our products in the digital space",
        difficulty: 2,
        imageUrl: "images/job3.png",
        pay: 650
    },
    {
        company: "namcorp",
        position: "audio creative lead",
        detail: "we just need our communication to be better, that's where you come in..",
        difficulty: 5,
        imageUrl: "images/job5.png",
        pay: 595
    },
    {
        company: "helix",
        position: "video content creator",
        detail: "well the goal is to create eye catching visual presentations",
        difficulty: 1,
        imageUrl: "images/job2.png",
        pay: 1360
    },
]

const pushFavoriteJobs = (data) => {
    document.querySelector('.favorite-jobs').innerHTML = "";
    data.map((job) => {
        const {company, position, detail, difficulty, imageUrl, pay} = job;
        document.querySelector('.favorite-jobs').innerHTML += `
            <article class="job">
                <div class="job-details">
                    <img src="${imageUrl}" alt="">
                    <section>
                        <h4>${company} - ${position}</h4>
                        <p>${detail}</p>
                        <div class="difficulty">
                            Difficulty
                            <div class="stars"></div>
                        </div>
                    </section>
                </div>
                <p class="pay">$${pay}</p>
            </article>
        `
    })
}

pushFavoriteJobs(favouriteJobs);
