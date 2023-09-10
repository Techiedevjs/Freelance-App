const profile = {
    firstName: "Debbie",
    lastName: "Sussie",
    walletBalance: 3500,
    rating: "C",
    totalEarnings: 75450,
    averageJobEarnings: 725,
    jobsCompleted: 114,
    expertise: "Backend Developer",
    expertiseCategories: 3,
    jobCompletion: {
        incompleteJobs : 45,
        onTimeJobs: 79,
        lateJobs: 56
    }
}
document.querySelectorAll('.profile-name').forEach(elem => {
    elem.innerHTML = profile.firstName + " " + profile.lastName;
})
document.querySelector('.profile-firstname').innerHTML = profile.firstName;

const loadJobProfileData = () => {
    document.querySelectorAll('.profile-rating').forEach(elem => {
        elem.src = `images/${profile.rating}-rating.png`;
    })
    document.querySelector('#expertise').innerHTML = profile.expertise;
    document.querySelectorAll('.completed-jobs').forEach((elem) => {
        elem.innerHTML = profile.jobsCompleted;
    })
    document.querySelectorAll('.total-earnings').forEach(elem => {
        elem.innerHTML = '$' + profile.totalEarnings
    })
    document.querySelectorAll('.average-job-earnings').forEach(elem => {
        elem.innerHTML = '$' + profile.averageJobEarnings
    })
    document.querySelectorAll('.expertise-categories').forEach(elem => {
        elem.innerHTML = profile.expertiseCategories
    })
}
loadJobProfileData();
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
        if(name === 'jobs'){
            document.querySelector(`.jobs-single`).classList.add('hide-element');
            document.querySelector(`.jobs-cont`).classList.remove('hide-element');
        }
        if(name === 'favorites'){
            document.querySelector(`.favorites-single`).classList.add('hide-element');
            document.querySelector(`.favorites-cont`).classList.remove('hide-element');
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
        popular: true,
        type: "local",
        skill: "javascript"
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
        current:true,
        type: "featured",
        skill: "css"
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
        popular: true,
        type: "fulltime",
        skill: "html"
    },
    {
        jobid: 4,
        company: "helix",
        position: "video content creator",
        detail: "well the goal is to create eye catching visual presentations",
        difficulty: 1,
        imageUrl: "images/job2.png",
        pay: 1360,
        favorite: true,
        type: "recruiter",
        skill: "php"
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
        type: "featured",
        skill: "html"
    },
    {
        jobid: 6,
        company: "robocorp",
        position: "audio creative lead",
        detail: "we just need our communication to be better, that's where you come in..",
        difficulty: 4,
        imageUrl: "images/job5.png",
        pay: 395,
        favorite: false,
        type: "local",
        skill: "javascript"
    },
]
const pushDifficultyRate = (difficulty) => {
    return Array(difficulty + 1).join('<img src="images/star.svg" alt="star"/>')
}
const pushAllJobs = (data) => {
    document.querySelector('.alljobs').innerHTML = "";
    data.map((job) => {
        const {company, position, detail, difficulty, imageUrl, pay, jobid} = job;
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
                <button onclick="viewJob(${jobid}, 'jobs')">DETAILS</button>
            </div>
        </article>
        `
    })
}
const pushFavoriteJobs = (data) => {
    document.querySelector('.favorite-jobs').innerHTML = "";
    data.map((job) => {
        if(job.favorite){
            const {company, position, detail, difficulty, imageUrl, pay, jobid} = job;
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
                    <button onclick="viewJob(${jobid}, 'favorites')">DETAILS</button>
                </div>
            </article>
            `
        }
    })
}
const pushPopularJobs = (data) => {
    document.querySelector('.popular-jobs').innerHTML = "";
    console.log("working")
    data.map((job) => {
        if(job.popular){
            const {company, position, detail, difficulty, imageUrl, pay, jobid} = job;
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
                    <button onclick="viewJob(${jobid}, 'popular')">DETAILS</button>
                </div>
            </article>
            `
        }
    })
}
const pushCurrentJobs = (data) => {
    document.querySelector('.current-jobs').innerHTML  = ""
    data.map((job) => {
        const {current, company, position, difficulty, imageUrl, jobid} = job
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
                <div class="continuejob" onclick="continueJob(${jobid})"> CONTINUE JOB </div>
            </article> 
            `
        }
    })
}
const continueJob = (id) => {
    let job = jobs.filter(j => j.jobid === id);
    document.querySelector('.task-completed').classList.remove('hide');
    document.querySelector('.task-company').innerHTML = job[0].company;
    document.querySelector('.task-pay').innerHTML = '$' + job[0].pay;
}
const viewJob = ( jobid, name) => {
    let job = jobs.filter(j => j.jobid === jobid);
    if(job.length){
        const {company, position, detail, difficulty, imageUrl, jobid} = job[0]
        const {incompleteJobs, lateJobs, onTimeJobs} = profile.jobCompletion
        let totaljobs = incompleteJobs + lateJobs + onTimeJobs;
        let incomplete = (incompleteJobs/totaljobs) * 100;
        let late = (lateJobs/totaljobs) * 100;
        let ontime = (onTimeJobs/totaljobs) * 100;
        document.querySelector(`.${name}-single`).classList.remove('hide-element');
        document.querySelector(`.${name}-cont`).classList.add('hide-element');
        document.querySelector(`.${name}-single`).innerHTML = `
        <div class="back flexsmall pointer" onclick="backToPrevious('${name}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="19" viewBox="0 0 13 19" fill="none">
                <path d="M0.166748 9.50002L9.66675 19L12.0417 16.625L4.9167 9.49998L12.0417 2.37499L9.6667 0L0.166748 9.50002Z" fill="#7C3EFF"/>
            </svg>
            BACK
        </div>
        <div class="singledetails" id="singlefavorite">
            <article class="selectedjob">
                <div class="job-details">
                    <img src="${imageUrl}" alt="">
                    <section>
                        <h4>${company} - ${position} </h4>
                        <p>${detail} </p>
                        <div class="difficulty">
                            Difficulty
                            <div class="stars padlittle">
                                ${pushDifficultyRate(difficulty)}
                            </div>
                        </div>
                        <div class="continue-favorite">
                            <button onclick="continueJob(${jobid})">CONTINUE JOB</button>
                            <div class="flexlittle pointer" onclick="addToFavorites(${jobid})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                    <path d="M14.5 24.7708L12.9072 23.3208C7.24998 18.1909 3.51514 14.7966 3.51514 10.6553C3.51514 7.26099 6.17347 4.61364 9.5568 4.61364C11.4682 4.61364 13.3026 5.50341 14.5 6.89849C15.6973 5.50341 17.5318 4.61364 19.4432 4.61364C22.8265 4.61364 25.4848 7.26099 25.4848 10.6553C25.4848 14.7966 21.75 18.1909 16.0928 23.3208L14.5 24.7708Z" fill="#7C3EFF"/>
                                </svg>FAVORITE
                            </div>
                        </div>
                    </section>
                </div>
            </article>
            <section class="earnings-info">
                <div>
                    <h4>Total Earnings</h4>
                    <span class="total-earnings"></span>
                </div>
                <div>
                    <h4>Average Job Earnings</h4>
                    <span class="average-job-earnings"></span>
                </div>
                <div>
                    <h4>Jobs Completed</h4>
                    <span class="completed-jobs"></span>
                </div>
                <div>
                    <h4>Expertise Categories</h4>
                    <span class="expertise-categories"></span>
                </div>
            </section>
            <section class="rating-completion">
                <div class="ratings">
                    <h5>Your Rating</h5>
                    <img src="" alt="" class="profile-rating">
                    <p>You’re doing great! <br>Let’s get that rating up!</p>
                </div>
                <div>
                    <h5>Job Completion</h5>
                    <div class="donut-chart">
                        <div class="pie"></div>
                        <section></section>
                        <div  class="legend incomplete">
                            <p>Incomplete jobs:</p>
                            <span class="bold">${incompleteJobs}</span>
                        </div>
                        <div class="legend ontime">
                            <p>On time jobs:</p> 
                            <span class="bold">${onTimeJobs}</span>
                        </div>
                        <div class="legend late">
                            <p>Late jobs:</p>
                            <span class="bold">${lateJobs}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        `
        document.querySelectorAll('.pie').forEach(elem => elem.style.background = `conic-gradient(black 0.00%, #6440B3 0.00% ${incomplete}%, #EE82FF ${incomplete}% ${incomplete + late}%, #A276FF ${incomplete + late}% ${ontime}% )`)
    }
    loadJobProfileData();
   }
const backToPrevious = (name) => {
    document.querySelector(`.${name}-single`).classList.add('hide-element');
    document.querySelector(`.${name}-cont`).classList.remove('hide-element');
}
const backToAllJobs = () => {
    document.querySelector('.task-completed').classList.add('hide');
}
const addToFavorites = (id) => {
    jobs = jobs.map((job) => {
        if ( job.jobid === id){
            const {company, position, imageUrl} = job
            document.querySelector('.added-to-favorites').classList.remove('hide')
            document.querySelector('.jobimages').src = imageUrl
            document.querySelector('.company-position').innerHTML = company + '-' + position+'...';
            return {...job, favorite: true}
        } else {
            return {...job}
        }
    })
    pushAllJobs(jobs)
    pushFavoriteJobs(jobs)    
}
const cancelAddToFavorites = () => {
    document.querySelector('.added-to-favorites').classList.add('hide')
}
pushAllJobs(jobs);
pushFavoriteJobs(jobs);
pushPopularJobs(jobs);
pushCurrentJobs(jobs);
// SEARCH JOBS
document.querySelector('#searchjobs').addEventListener('input', (e) => {
    let value = e.target.value;
    let data = jobs.filter((job) => job.position.includes(value.toLowerCase()) || job.company.includes(value.toLowerCase()));
    pushAllJobs(data)
})
const searchBasedOnBudgets = () => {
    let minvalue = document.querySelector('#min').value;
    let maxvalue = document.querySelector('#max').value;
    let data
    if (minvalue && maxvalue){
        data = jobs.filter((job) => job.pay >= parseInt(minvalue) && job.pay <= parseInt(maxvalue));   
        pushAllJobs(data)
    } else if(minvalue){
        data = jobs.filter((job) => job.pay >= parseInt(minvalue));   
        pushAllJobs(data)
    } else if (maxvalue){
        data = jobs.filter((job) => job.pay <= parseInt(maxvalue));   
        pushAllJobs(data)
    }
    else {
        pushAllJobs(jobs)
    }
}
let filters = []
const filterByOption = (value, filt) => {
    document.querySelector(`.${value}check`).classList.toggle('hidden');
    if(!filters.includes(value)){
        filters.push(value)
        console.log(filters)
        filterData(filt)
    } else {
        filters = filters.filter(i => i !== value )
        console.log(filters)
        filterData(filt)
    }
}
const filterData = (filt) => {
    let data = []
    if(!filters.length){
        pushAllJobs(jobs)
        data;
    } else {
        filters.map((i) => {
            jobs.filter((job) => job[filt].includes(i)).map((j) => {
                data.push(j)
            })
            console.log(data);
        })
        pushAllJobs(data)
    }
}
const resetFilter = () => {
    document.querySelector('#min').value = '';
    document.querySelector('#max').value = '';
    document.querySelector('#searchjobs').value = '';
    document.querySelectorAll('.checkbox').forEach((elem) => {
        elem.firstElementChild.classList.add('hidden')
    })
    filters = []
    pushAllJobs(jobs)
}

const toggleDisplay = () =>{
    document.querySelector('.display').classList.toggle('hide-display')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});
