interface WorkExperience {
  title: string;
  company: string;
  years: string;
  description: string;
}

const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;
const addWorkExperienceButton = document.getElementById('addWorkExperience') as HTMLButtonElement;
const workExperienceSection = document.getElementById('workExperienceSection') as HTMLDivElement;
const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;

const workExperiences: WorkExperience[] = [];

addWorkExperienceButton.addEventListener('click', () => {
  const workExperienceIndex = workExperiences.length;
  workExperienceSection.innerHTML += `
      <h2>Work Experience ${workExperienceIndex + 1}</h2>
      <div>
          <label for="title${workExperienceIndex}">Title:</label>
          <input type="text" id="title${workExperienceIndex}" name="title${workExperienceIndex}">
      </div>
      <div>
          <label for="company${workExperienceIndex}">company:</label>
          <input type="text" id="company${workExperienceIndex}" name="company${workExperienceIndex}">
      </div>
      <div>
          <label for="years${workExperienceIndex}">Years:</label>
          <input type="text" id="years${workExperienceIndex}" name="years${workExperienceIndex}">
      </div>
      <div>
          <label for="description${workExperienceIndex}">Description:</label>
          <textarea id="description${workExperienceIndex}" name="description${workExperienceIndex}"></textarea>
      </div>
  `;
});

generateResumeButton.addEventListener('click', (event) => {
  event.preventDefault(); 

  const formData = new FormData(resumeForm);

  // Extract data from the form
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const degree = formData.get('degree') as string;
  const university = formData.get('institute') as string;
  const graduationYear = formData.get('diplomaYear') as string;
  const skills = formData.get('skills') as string;

  // Extract work experience data
  workExperiences.length = 0; 
  for (let i = 0; i < formData.getAll('title').length; i++) {
      const title = formData.get(`title${i}`) as string;
      const company = formData.get(`company${i}`) as string;
      const years = formData.get(`years${i}`) as string;
      const description = formData.get(`description${i}`) as string;
      workExperiences.push({ title, company, years, description });
  }

  // Generate the resume content
  let resumeHTML = `
      <h1>${name}</h1>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h2>Education</h2>
      <p>${degree} - ${institute} (${diplomaYear})</p>
      <h2>Work Experience</h2>
      `;
  workExperiences.forEach((experience) => {
      resumeHTML += `
          <h3>${experience.title}</h3>
          <p>${experience.company} - ${experience.years}</p>
          <p>${experience.description}</p>
      `;
  });
  resumeHTML += `
      <h2>Skills</h2>
      <p>${skills}</p>
  `;
  resumeContent.innerHTML = resumeHTML;
});
