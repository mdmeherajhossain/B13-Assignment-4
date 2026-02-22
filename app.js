const jobs = [
  {
    id: 1,
    company: 'Mobile First Corp',
    position: 'React Native Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: ' $130,000 - $175,000',
    description:
      'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
    status: 'Not Applied',
  },
  {
    id: 2,
    company: 'WebFlow Agency',
    position: 'Web Designer & Developer',
    location: 'Los Angeles,CA',
    type: 'Part-time',
    salary: '$80,000 - $120,000',
    description:
      'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
    status: 'Not Applied',
  },
  {
    id: 3,
    company: 'DataViz Solutions',
    position: 'Data Visualization Specialist',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$125,000 - $165,000',
    description:
      'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
    status: 'Not Applied',
  },
  {
    id: 4,
    company: 'CloudFirst Inc',
    position: 'Backend Developer',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$140,000 - $190,000',
    description:
      'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.',
    status: 'Not Applied',
  },
  {
    id: 5,
    company: 'Innovation Labs',
    position: 'UI/UX Engineer',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: ' $110,000 - $150,000',
    description:
      'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.',
    status: 'Not Applied',
  },
  {
    id: 6,
    company: 'MegaCorp Solutions',
    position: 'JavaScript Developer',
    location: 'New York, NY',
    type: 'Full-time',
    salary: ' $130,000 - $170,00',
    description:
      'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.',
    status: 'Not Applied',
  },
  {
    id: 7,
    company: 'StartupXYZ',
    position: 'Full Stack Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description:
      'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.',
    status: 'Not Applied',
  },
  {
    id: 8,
    company: 'TechCorp Industries',
    position: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: ' $130,000 - $175,000',
    description:
      'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.',
    status: 'Not Applied',
  },
];

let currentTab = 'all';

const container = document.getElementById('jobContainer');
const totalCount = document.getElementById('totalCount');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');
const jobsCount = document.getElementById('jobsCount');

function renderJobs() {
  container.innerHTML = '';

  const filtered = jobs.filter(job => {
    if (currentTab === 'all') return true;
    return job.status.toLowerCase() === currentTab;
  });

    if(filtered.length===0){
    container.innerHTML = `
      <div class="bg-base-100 rounded-xl p-16 text-center shadow">
        <div class="text-6xl mb-4">📄</div>
        <h3 class="text-lg font-semibold">No jobs available</h3>
        <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
      </div>
    `;
  } else {

    filtered.forEach(job=>{

      let badgeClass="badge-primary";
      if(job.status==="Interview") badgeClass="badge-success";
      if(job.status==="Rejected") badgeClass="badge-error";

      container.innerHTML += `
        <div class="card bg-base-100 shadow p-6 relative">

          <button onclick="deleteJob(${job.id})"
            class="btn btn-ghost btn-sm absolute right-4 top-4">🗑</button>

          <h3 class="text-lg font-bold">${job.company}</h3>
          <p class="font-medium">${job.position}</p>

          <p class="text-sm text-gray-500 my-2">
            ${job.location} • ${job.type} • ${job.salary}
          </p>

          <span class="badge ${badgeClass} mb-3">${job.status}</span>

          <p class="mb-4 text-sm">${job.description}</p>

          <div class="space-x-2">
            <button onclick="updateStatus(${job.id},'Interview')"
              class="btn btn-success btn-sm">Interview</button>

            <button onclick="updateStatus(${job.id},'Rejected')"
              class="btn btn-error btn-sm">Rejected</button>
          </div>

        </div>
      `;
    });
  }

   updateDashboard();
}

function updateStatus(id,status){
  const job = jobs.find(j=>j.id===id);
  job.status=status;
  renderJobs();
}

function deleteJob(id){
  const index = jobs.findIndex(j=>j.id===id);
  jobs.splice(index,1);
  renderJobs();
}

function updateDashboard() {
  totalCount.innerText = jobs.length;
  interviewCount.innerText = jobs.filter(j => j.status === 'Interview').length;
  rejectedCount.innerText = jobs.filter(j => j.status === 'Rejected').length;

  const tabCount = jobs.filter(j => {
    if (currentTab === 'all') return true;
    return j.status.toLowerCase() === currentTab;
  }).length;
  jobsCount.innerText = tabCount + ' jobs';
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document
      .querySelectorAll('.tab')
      .forEach(t => t.classList.remove('tab-active'));
    tab.classList.add('tab-active');
    currentTab = tab.dataset.tab;
    renderJobs();
  });
});

renderJobs();
