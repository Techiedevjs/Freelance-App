const profile = {
    firstName: "Elon",
    lastName: "Musk",
    walletBalance: 3500,
    rating: "C"
}
document.querySelectorAll('.profile-name').forEach(elem => {
    elem.innerHTML = profile.firstName + " " + profile.lastName;
})
document.querySelector('.profile-firstname').innerHTML = profile.firstName;
document.querySelector('.profile-rating').src = `images/${profile.rating}-rating.png`
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
        if(name === 'home'){
            document.querySelector('.popular').classList.add('hide-element')
            document.querySelector('.homepage').classList.remove('hide-element')
        }
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
const showPopularJobs = () => {
    document.querySelector('.popular').classList.remove('hide-element')
    document.querySelector('.homepage').classList.add('hide-element')
}
let jobs = [
    {
        jobid: 1,
        company: "labdrill",
        position: "frontend developer",
        detail: "Assist in developing user-facing features using HTML, CSS and JavaScript ",
        difficulty: 3,
        imageUrl: "images/job1.png",
        pay: 540,
        favorite: true,
        popular: true
    },
    {
        jobid: 2,
        company: "rangreen",
        position: "digital marketing specialist",
        detail: "selling our products in the digital space",
        difficulty: 2,
        imageUrl: "images/job3.png",
        pay: 650,
        favorite: false,
        popular: true,
        current:true
    },
    {
        jobid: 3,
        company: "namcorp",
        position: "audio creative lead",
        detail: "we just need our communication to be better, that's where you come in..",
        difficulty: 5,
        imageUrl: "images/job5.png",
        pay: 595,
        favorite: true,
        popular: true
    },
    {
        jobid: 4,
        company: "helix",
        position: "video content creator",
        detail: "well the goal is to create eye catching visual presentations",
        difficulty: 1,
        imageUrl: "images/job2.png",
        pay: 1360,
        favorite: true
    },
    {
        jobid: 5,
        company: "Ragnorxk",
        position: "Marketer",
        detail: "selling our products in the digital space",
        difficulty: 5,
        imageUrl: "images/job3.png",
        pay: 1650,
        favorite: false,
        current:true
    },
    {
        jobid: 6,
        company: "robocorp",
        position: "audio creative lead",
        detail: "we just need our communication to be better, that's where you come in..",
        difficulty: 4,
        imageUrl: "images/job5.png",
        pay: 395,
        favorite: false
    },
]
const pushDifficultyRate = (difficulty) => {
    return Array(difficulty + 1).join('<img src="images/star.svg" alt="star"/>')
}
const pushAllJobs = (data) => {
    document.querySelector('.alljobs').innerHTML = "";
    data.map((job) => {
        const {company, position, detail, difficulty, imageUrl, pay} = job;
        document.querySelector('.alljobs').innerHTML += `
        <article class="job">
            <div class="job-details">
                <img src="${imageUrl}" alt="">
                <section>
                    <h4>${company} - ${position}</h4>
                    <p>${detail}</p>
                    <div class="difficulty">
                        Difficulty
                        <div class="stars padlittle">
                            ${pushDifficultyRate(difficulty)}
                        </div>
                    </div>
                </section>
            </div>
            <div class="last">
                <p>$${pay}</p>
                <button>DETAILS</button>
            </div>
        </article>
        `
    })
}
pushAllJobs(jobs);
const pushFavoriteJobs = (data) => {
    document.querySelector('.favorite-jobs').innerHTML = "";
    data.map((job) => {
        if(job.favorite){
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
                            <div class="stars">
                                ${pushDifficultyRate(difficulty)}
                            </div>
                        </div>
                    </section>
                </div>
                <div class="last">
                    <p>$${pay}</p>
                    <button>DETAILS</button>
                </div>
            </article>
            `
        }
    })
}
pushFavoriteJobs(jobs);
const pushPopularJobs = (data) => {
    document.querySelector('.popular-jobs').innerHTML = "";
    data.map((job) => {
        if(job.popular){
            const {company, position, detail, difficulty, imageUrl, pay} = job;
            document.querySelector('.popular-jobs').innerHTML += `
            <article class="job">
                <div class="job-details">
                    <img src="${imageUrl}" alt="">
                    <section>
                        <h4>${company} - ${position}</h4>
                        <p>${detail}</p>
                        <div class="difficulty">
                            Difficulty
                            <div class="stars padlittle">
                                ${pushDifficultyRate(difficulty)}
                            </div>
                        </div>
                    </section>
                </div>
                <div class="last">
                    <p>$${pay}</p>
                    <button>DETAILS</button>
                </div>
            </article>
            `
        }
    })
}
pushPopularJobs(jobs);
const pushCurrentJobs = (data) => {
    document.querySelector('.current-jobs').innerHTML  = ""
    data.map((job) => {
        const {current, company, position, difficulty, imageUrl} = job
        if(current){
            document.querySelector('.current-jobs').innerHTML += `
            <article class="currentjob">
                <div class="job-details">
                    <img src="${imageUrl}" alt="">
                    <section>
                        <h4>${company} - ${position}</h4>
                        <div class="difficulty">
                            Difficulty
                            <div class="stars padlittle">
                                ${pushDifficultyRate(difficulty)}
                            </div>
                        </div>
                    </section>
                </div>
                <div class="continuejob"> CONTINUE JOB </div>
            </article> 
            `
        }
    })
}
pushCurrentJobs(jobs)
