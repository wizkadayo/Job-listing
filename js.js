function searchjobs(){
    const searchInput = document.getElementById('job-search').value;
    if (searchInput){
        alert(`Searching for: ${searchInput}`);
    }
    else{alert("Please enter a job title or keyword.");}
}

const categories = [
    {
        title: "Web Development",
        jobs: "1,234 jobs available",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
        title: "Design",
        jobs: "867 jobs available",
        icon: "/images/mobile.png"
    },
    {
        title: "Marketing",
        jobs: "543 jobs available",
        icon: "/images/bullhorn.png",
    },
    {
        title: "Mobile Development",
        jobs: "432 jobs available",
        icon: "/images/smartphone.png",
    },
    {
        title: "Data Science",
        jobs: "321 jobs available",
        icon: "/images/area-chart.png"
    },
    {
        title: "Content Writing",
        jobs: "654 jobs available",
        icon: "/images/book.png"
    }
];

const container = document.getElementById("category-list");

categories.forEach(cat => {
    const card = document.createElement("div");
    card.className = "category-card";

    card.innerHTML = `
    <img src="${cat.icon}" alt="${cat.title} icon">
    <h3>${cat.title}</h3>
    <p>${cat.jobs}</p>
    `;

    container.appendChild(card);
});

const steps = [
    {
        number: 1,
        title: "Creat your profile",
        description: "Sign up and showcase your skills, experience, and portfolio"
    },
    {
        number: 2,
        title: 'Find relative jobs',
        description: 'Browse jobs that match your skills and preference'
    },
    {
        number: 3,
        title: 'Apply with ease',
        description: 'submit applicaations and track your progress'
    },
    {
        number: 4,
        title: 'Get hired',
        description: 'Connect with employers and start working'
    },
];

const contain = document.getElementById('steps-container');

steps.forEach(step =>{
    const stepDiv = document.createElement("div")
    stepDiv.classList.add('step')

    stepDiv.innerHTML = `
    <div class="circle">${step.number}</div>
    <h3>${step.title}</h3>
    <p class="step-description">${step.description}</p>
    `;

    contain.appendChild(stepDiv);
});


const employersSection = document.getElementById("employers-section");

employersSection.innerHTML = `
  <div class="employers-container">
    <div class="employers-text">
      <h2>For Employers</h2>
      <p>Find the perfect talent for your projects and positions</p>
      <ul class="employers-list">
        <li>✅ Access a global pool of skilled professionals</li>
        <li>✅ Post jobs and receive applications quickly</li>
        <li>✅ Review detailed profiles and portfolios</li>
        <li>✅ Hire with confidence using our platform tools</li>
      </ul>
      <button class="post-job-btn">Post a Job</button>
    </div>
    <div class="employers-image">
      <img src="./images/startup.svg" alt="Employer illustration">
    </div>
  </div>
`;
