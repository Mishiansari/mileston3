var resumeForm = document.getElementById('resumeForm');
var generateResumeButton = document.getElementById('generateResume');
var addWorkExperienceButton = document.getElementById('addWorkExperience');
var workExperienceSection = document.getElementById('workExperienceSection');
var resumeContent = document.getElementById('resumeContent');
var workExperiences = [];
// Function to add a new work experience section
addWorkExperienceButton.addEventListener('click', function () {
    var workExperienceIndex = workExperiences.length;
    workExperienceSection.innerHTML += "\n      <h2>Work Experience ".concat(workExperienceIndex + 1, "</h2>\n      <div>\n          <label for=\"title").concat(workExperienceIndex, "\">Title:</label>\n          <input type=\"text\" id=\"title").concat(workExperienceIndex, "\" name=\"title").concat(workExperienceIndex, "\">\n      </div>\n      <div>\n          <label for=\"company").concat(workExperienceIndex, "\">Company:</label>\n          <input type=\"text\" id=\"company").concat(workExperienceIndex, "\" name=\"company").concat(workExperienceIndex, "\">\n      </div>\n      <div>\n          <label for=\"years").concat(workExperienceIndex, "\">Years:</label>\n          <input type=\"text\" id=\"years").concat(workExperienceIndex, "\" name=\"years").concat(workExperienceIndex, "\">\n      </div>\n      <div>\n          <label for=\"description").concat(workExperienceIndex, "\">Description:</label>\n          <textarea id=\"description").concat(workExperienceIndex, "\" name=\"description").concat(workExperienceIndex, "\"></textarea>\n      </div>\n  ");
});
// Function to generate the resume content
generateResumeButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    var formData = new FormData(resumeForm);
    // Extract data from the form
    var name = formData.get('name');
    var email = formData.get('email');
    var phone = formData.get('phone');
    var degree = formData.get('degree');
    var university = formData.get('university');
    var graduationYear = formData.get('graduationYear');
    var skills = formData.get('skills');
    // Extract work experience data
    workExperiences.length = 0; // Clear the previous work experience array
    for (var i = 0; i < formData.getAll('title').length; i++) {
        var title = formData.get("title".concat(i));
        var company = formData.get("company".concat(i));
        var years = formData.get("years".concat(i));
        var description = formData.get("description".concat(i));
        workExperiences.push({ title: title, company: company, years: years, description: description });
    }
    // Generate the resume content
    var resumeHTML = "\n      <h1>".concat(name, "</h1>\n      <p>Email: ").concat(email, "</p>\n      <p>Phone: ").concat(phone, "</p>\n      <h2>Education</h2>\n      <p>").concat(degree, " - ").concat(university, " (").concat(graduationYear, ")</p>\n      <h2>Work Experience</h2>\n      ");
    workExperiences.forEach(function (experience) {
        resumeHTML += "\n          <h3>".concat(experience.title, "</h3>\n          <p>").concat(experience.company, " - ").concat(experience.years, "</p>\n          <p>").concat(experience.description, "</p>\n      ");
    });
    resumeHTML += "\n      <h2>Skills</h2>\n      <p>".concat(skills, "</p>\n  ");
    // Display the generated resume in the preview area
    resumeContent.innerHTML = resumeHTML;
});
