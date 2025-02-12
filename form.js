// Create and append the heading element
const heading = document.createElement("h2");
heading.className = "text-center mt-2 mb-5";
const headingText = document.createElement("strong");
headingText.textContent = "Add Student Information";
heading.appendChild(headingText);

// Create a new form element
const form = document.createElement("form");
form.id = "studentForm";
form.enctype = "multipart/form-data";
form.className = "mt-4 polite-background";

// Append the heading to the form
form.appendChild(heading);

// Create the form elements and append them to the form

// Student ID
const studentIdDiv = document.createElement("div");
studentIdDiv.className = "form-group mb-3";

const studentIdLabel = document.createElement("label");
studentIdLabel.textContent = "Student ID:";
studentIdDiv.appendChild(studentIdLabel);

const studentIdInputGroup = document.createElement("div");
studentIdInputGroup.className = "input-group";

const studentIdInputGroupPrepend = document.createElement("div");
studentIdInputGroupPrepend.className = "input-group-prepend";

const studentIdInputGroupText = document.createElement("span");
studentIdInputGroupText.className = "input-group-text";
studentIdInputGroupText.textContent = "B19";
studentIdInputGroupPrepend.appendChild(studentIdInputGroupText);

const studentIdInput = document.createElement("input");
studentIdInput.type = "text";
studentIdInput.id = "id";
studentIdInput.name = "id";
studentIdInput.className = "form-control";
studentIdInput.required = true;

studentIdInputGroup.appendChild(studentIdInputGroupPrepend);
studentIdInputGroup.appendChild(studentIdInput);

studentIdDiv.appendChild(studentIdInputGroup);
form.appendChild(studentIdDiv);

// Name
const nameDiv = createFormInput("Name:", "text", "name", "name", true);
form.appendChild(nameDiv);

// School
const schoolDiv = createFormInput("School:", "text", "school", "school", false);
form.appendChild(schoolDiv);

// College
const collegeDiv = createFormInput("College:", "text", "college", "college", false);
form.appendChild(collegeDiv);

// Hometown
const hometownDiv = createFormInput("Hometown:", "text", "hometown", "hometown", false);
form.appendChild(hometownDiv);

// Create a div to group the Student Image label and the tooltip
const imageLabelDiv = document.createElement("div");
imageLabelDiv.className = "form-group mb-2 d-flex align-items-center"; // Add a class for flex alignment

// Student Image Label
const imageLabel = document.createElement("label");
imageLabel.textContent = "Student Image:";
imageLabel.className = "mb-0"; // Remove margin-bottom for spacing
imageLabelDiv.appendChild(imageLabel);

// Create an information icon (i button)
const infoIcon = document.createElement("i");
infoIcon.className = "fas fa-info-circle ml-2 warning-icon"; // Add Font Awesome classes for the icon
infoIcon.style.cursor = "pointer"; // Add a pointer cursor to indicate interactivity

// Create a custom tooltip element
const customTooltip = document.createElement("div");
customTooltip.className = "custom-tooltip";
customTooltip.textContent = "Student images should have a resolution of 1170 x 750 pixels or a proportional ratio. Only .jpg and .jpeg formats are allowed, with a maximum file size of 2 MB.";
customTooltip.style.display = "none"; // Initially hide the tooltip

// Append the tooltip element to the information icon
infoIcon.appendChild(customTooltip);

let tooltipTimeout; // Initialize a variable to store the timeout reference

// Function to show the tooltip with a delay
function showTooltip() {
    clearTimeout(tooltipTimeout); // Clear any existing timeouts

    // Delay the tooltip display with a timeout
    tooltipTimeout = setTimeout(function () {
        customTooltip.style.opacity = "1"; // Show the tooltip with a 500ms transition
        customTooltip.style.display = "block"; // Show the tooltip element
    }, 50); // Delay the transition by 50ms
}

// Function to hide the tooltip with a delay
function hideTooltip() {
    clearTimeout(tooltipTimeout); // Clear any existing timeouts
    customTooltip.style.opacity = "0"; // Hide the tooltip by setting opacity to 0

    // Delay hiding the tooltip element with a timeout
    tooltipTimeout = setTimeout(function () {
        customTooltip.style.display = "none"; // Hide the tooltip element after the transition
    }, 500); // Match the transition duration (500ms)
}

// Add an event listener to show the tooltip on mouseover with a delay
infoIcon.addEventListener("mouseover", showTooltip);

// Add an event listener to hide the tooltip on mouseout with a delay
infoIcon.addEventListener("mouseout", hideTooltip);

// Append the information icon to the imageLabelDiv
imageLabelDiv.appendChild(infoIcon);

// Append the imageLabelDiv to the form
form.appendChild(imageLabelDiv);

// Create a new input element for the file selection field
const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.id = "studentImage"; // Set an ID for the file input
fileInput.name = "studentImage"; // Set a name for the file input
fileInput.className = "form-control"; // Apply the form control class
fileInput.accept = ".jpg, .jpeg"; // Allow only JPG/JPEG files
fileInput.required = true; // Make the file input required

// Append the file input to the form
form.appendChild(fileInput);

// Social Links
const socialLinksDiv = document.createElement("div");
socialLinksDiv.className = "form-group";

const socialLinksTable = document.createElement("table");
socialLinksTable.className = "social-links-table";

// Create a new table row for each social link
const facebookRow = createSocialLinkRow("Facebook", "facebook");
const xRow = createSocialLinkRow("X", "x");
const linkedinRow = createSocialLinkRow("LinkedIn", "linkedin");
const githubRow = createSocialLinkRow("GitHub", "github");

// Append the rows to the table
socialLinksTable.appendChild(facebookRow);
socialLinksTable.appendChild(xRow);
socialLinksTable.appendChild(linkedinRow);
socialLinksTable.appendChild(githubRow);

// Append the table to the form
socialLinksDiv.appendChild(socialLinksTable);
form.appendChild(socialLinksDiv);

// Submit Buttons
const addStudentButtonDiv = document.createElement("div");
addStudentButtonDiv.className = "form-group";

const addStudentButton = document.createElement("button");
addStudentButton.type = "submit";
addStudentButton.id = "addStudentButton";
addStudentButton.className = "btn btn-primary";
addStudentButton.textContent = "Add Student";

addStudentButtonDiv.appendChild(addStudentButton);
form.appendChild(addStudentButtonDiv);

// Create a container div for the buttons
const buttonsContainer = document.createElement("div");
buttonsContainer.className = "text-center"; // Add the 'text-center' class to center-align content

// "Update Student" button
const updateStudentButtonDiv = document.createElement("div");
updateStudentButtonDiv.className = "form-group";

const updateStudentButton = document.createElement("button");
updateStudentButton.type = "submit";
updateStudentButton.id = "updateStudentButton";
updateStudentButton.className = "btn btn-primary";
updateStudentButton.textContent = "Update Student";
updateStudentButton.style.display = "none"; // Initially hidden

updateStudentButtonDiv.appendChild(updateStudentButton);
buttonsContainer.appendChild(updateStudentButtonDiv);

// "Edit This Student" button
const editStudentButtonDiv = document.createElement("div");
editStudentButtonDiv.className = "form-group mt-5";

const editStudentButton = document.createElement("button");
editStudentButton.type = "button"; // Change the button type to "button"
editStudentButton.className = "btn btn-primary";
editStudentButton.id = "editStudentButton";
editStudentButton.textContent = "Edit This Student";
editStudentButton.style.display = "none"; // Initially hidden

editStudentButton.addEventListener("click", function () {
    // Get the current viewId from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const viewId = urlParams.get("viewId");

    // Redirect to the edit view with the editId query parameter
    if (viewId) {
        window.location.href = `/form.html?editId=${viewId}`;
    }
});

editStudentButtonDiv.appendChild(editStudentButton);
buttonsContainer.appendChild(editStudentButtonDiv);

// Append the buttons container to the form
form.appendChild(buttonsContainer);

// Finally, append the form to the container in your HTML
const container = document.querySelector(".container");
container.appendChild(form);

function createFormInput(labelText, inputType, inputId, inputName, isRequired, inputValue = "") {
    const inputDiv = document.createElement("div");
    inputDiv.className = "form-group mb-3";

    const label = document.createElement("label");
    label.textContent = labelText;
    inputDiv.appendChild(label);

    const input = document.createElement("input");
    input.type = inputType;
    input.id = inputId;
    input.name = inputName;
    input.className = "form-control";
    if (isRequired) {
        input.required = true;
    }
    if (inputValue !== "") {
        input.value = inputValue;
    }

    inputDiv.appendChild(input);
    return inputDiv;
}

function createSocialLinkRow(labelText, inputName) {
    const row = document.createElement("tr");

    const labelCell = document.createElement("td");
    const label = document.createElement("label");
    label.textContent = labelText + ":";
    labelCell.appendChild(label);

    const inputCell = document.createElement("td");
    inputCell.className = "social-input";

    const inputGroup = document.createElement("div");
    inputGroup.className = "input-group";

    const inputGroupPrepend = document.createElement("div");
    inputGroupPrepend.className = "input-group-prepend";

    const iconSpan = document.createElement("span");
    iconSpan.className = "input-group-text";
    const icon = document.createElement("i");

    // Special handling for "x" to use "fa-brands fa-x-twitter"
    if (inputName === "x") {
        icon.className = "fa-brands fa-x-twitter";
    } else {
        icon.className = "fab fa-" + inputName;
    }

    iconSpan.appendChild(icon);
    inputGroupPrepend.appendChild(iconSpan);

    const input = document.createElement("input");
    input.type = "text";
    input.id = inputName;
    input.name = "socialLinks[" + inputName + "]";
    input.required = false;
    input.className = "form-control";

    inputGroup.appendChild(inputGroupPrepend);
    inputGroup.appendChild(input);

    inputCell.appendChild(inputGroup);
    row.appendChild(labelCell);
    row.appendChild(inputCell);

    return row;
}

// Function to fetch and display student data based on viewId
function fetchAndDisplayViewStudent() {
    // Get the viewId query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const viewId = params.get('viewId');

    // Check if viewId is not null
    if (viewId) {
        // Fetch student data from students.json
        fetch('/students.json')
            .then(response => response.json())
            .then(data => {
                // Find the student with the matching ID
                const student = data.find(student => student.id === viewId);

                if (student) {
                    // Populate the form fields with the student's data
                    document.getElementById('id').value = student.id;
                    document.getElementById('name').value = student.name;
                    document.getElementById('school').value = student.school;
                    document.getElementById('college').value = student.college;
                    document.getElementById('hometown').value = student.hometown;
                    document.getElementById('facebook').value = student.socialLinks.facebook;
                    document.getElementById('x').value = student.socialLinks.x;
                    document.getElementById('linkedin').value = student.socialLinks.linkedin;
                    document.getElementById('github').value = student.socialLinks.github;
                } else {
                    console.error('Student not found.');
                }
            })
            .catch(error => {
                console.error('Error loading student data:', error);
            });
    } else {
        console.error('View ID not specified.');
    }
}

// Call the fetchAndDisplayViewStudent function when the page loads
document.addEventListener('DOMContentLoaded', fetchAndDisplayViewStudent);

// Function to fetch and display student data based on editId
function fetchAndDisplayEditStudent() {
    // Get the editId query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const editId = params.get('editId');

    // Check if editId is not null
    if (editId) {
        // Fetch student data from students.json
        fetch('/students.json')
            .then(response => response.json())
            .then(data => {
                // Find the student with the matching ID
                const student = data.find(student => student.id === editId);

                if (student) {
                    // Populate the form fields with the student's data
                    document.getElementById('id').value = student.id;
                    document.getElementById('name').value = student.name;
                    document.getElementById('school').value = student.school;
                    document.getElementById('college').value = student.college;
                    document.getElementById('hometown').value = student.hometown;
                    document.getElementById('facebook').value = student.socialLinks.facebook;
                    document.getElementById('x').value = student.socialLinks.x;
                    document.getElementById('linkedin').value = student.socialLinks.linkedin;
                    document.getElementById('github').value = student.socialLinks.github;
                } else {
                    console.error('Student not found.');
                }
            })
            .catch(error => {
                console.error('Error loading student data:', error);
            });
    } else {
        console.error('Edit ID not specified.');
    }
}

// Call the fetchAndDisplayEditStudent function when the page loads for editing
document.addEventListener('DOMContentLoaded', fetchAndDisplayEditStudent);

// Add this code at the end of your form.js file
const urlParams = new URLSearchParams(window.location.search);
const viewId = urlParams.get("viewId");

function populateFormFieldsView(student) {
    // Change the heading text to "View Student Information"
    const heading = document.getElementById("heading");
    headingText.textContent = "View Student Information";

    const studentIdInput = document.getElementById("id");
    studentIdInput.value = student.id;
    studentIdInput.disabled = true;

    const nameInput = document.getElementById("name");
    nameInput.value = student.name;
    nameInput.disabled = true;

    const schoolInput = document.getElementById("school");
    schoolInput.value = student.school;
    schoolInput.disabled = true;

    const collegeInput = document.getElementById("college");
    collegeInput.value = student.college;
    collegeInput.disabled = true;

    const hometownInput = document.getElementById("hometown");
    hometownInput.value = student.hometown;
    hometownInput.disabled = true;

    const facebookInput = document.getElementById("facebook");
    facebookInput.value = student.socialLinks.facebook;
    facebookInput.disabled = true;

    const xInput = document.getElementById("x");
    xInput.value = student.socialLinks.x;
    xInput.disabled = true;

    const linkedinInput = document.getElementById("linkedin");
    linkedinInput.value = student.socialLinks.linkedin;
    linkedinInput.disabled = true;

    const githubInput = document.getElementById("github");
    githubInput.value = student.socialLinks.github;
    githubInput.disabled = true;

    // Hide the file input field
    const fileInput = document.getElementById("studentImage");
    fileInput.style.display = "none";

    // Create a container div for the student image with a custom aspect ratio
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("student-image-container");

    // Set the aspect ratio using padding-bottom (e.g., 60% for a custom ratio)
    imageContainer.style.paddingBottom = "60%"; // Adjust the percentage as needed

    // Create the student image
    const thumbnail = document.createElement("img");
    thumbnail.src = `/images/${student.id}.jpg`; // Assuming your image files are named based on student IDs
    thumbnail.alt = "Student Image";
    thumbnail.className = "student-thumbnail";

    // Append the image to the container
    imageContainer.appendChild(thumbnail);

    // Append the container to the form
    form.insertBefore(imageContainer, socialLinksDiv);

    // Hide the information icon and tooltip
    const infoIcon = document.querySelector(".warning-icon");
    if (infoIcon) {
        infoIcon.style.display = "none";
    }

    // Show "Edit This Student" button and hide others
    editStudentButton.style.display = "inline-block";
    addStudentButton.style.display = "none";
    updateStudentButton.style.display = "none";
}

// Check if viewId exists and fetch the corresponding student data
if (viewId) {
    fetch("/students.json")
        .then((response) => response.json())
        .then((data) => {
            const student = data.find((s) => s.id === viewId);
            if (student) {
                populateFormFieldsView(student);
            } else {
                console.error(`Student with ID ${viewId} not found.`);
            }
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
}

const editId = urlParams.get("editId");

// Function to populate the form fields
function populateFormFieldsEdit(student) {
    // Change the heading text to "View Student Information"
    const heading = document.getElementById("heading");
    headingText.textContent = "Update Student Information";

    const studentIdInput = document.getElementById("id");
    studentIdInput.value = student.id;
    studentIdInput.disabled = true;

    // Show "Update Student" button and hide others
    updateStudentButton.style.display = "inline-block";
    addStudentButton.style.display = "none";
    editStudentButton.style.display = "none";
}

// Check if editId exists and fetch the corresponding student data
if (editId) {
    fetch("/students.json")
        .then((response) => response.json())
        .then((data) => {
            const student = data.find((s) => s.id === editId);
            if (student) {
                populateFormFieldsEdit(student);
            } else {
                console.error(`Student with ID ${viewId} not found.`);
            }
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
}

// Function to display the custom modal with a message and an icon
function showModal(message, alertType) {
    const modal = document.getElementById('customModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalMessage = document.getElementById('modalMessage');
    const modalOkayBtn = document.getElementById('modalOkayBtn');
    const body = document.querySelector('body');

    // Set the modal content based on the alert type
    switch (alertType) {
        case 'success':
            modalIcon.className = 'fa fa-check-circle';
            modalIcon.style.color = 'green';
            break;
        case 'error':
            modalIcon.className = 'fa fa-triangle-exclamation';
            modalIcon.style.color = 'orange';
            // modalMessage.classList.add('error-message');
            break;
        default:
            modalIcon.className = 'fa fa-info-circle';
            modalIcon.style.color = 'blue';
    }

    modalMessage.textContent = message;

    // Display the modal in the vertical center of the screen
    modal.style.display = 'flex';
    modal.classList.add('show'); // Add the 'show' class for the animation

    // Add the class to the body element to prevent scrolling
    body.classList.add('modal-open');

    // Disable right-clicking while the modal is open
    document.addEventListener('contextmenu', preventContextMenu);

    // Handle the "Cancel" button click to close the modal and re-enable scrolling
    modalOkayBtn.addEventListener('click', () => {
        closeModal();
    });

    // Function to close the modal and remove animations
    function closeModal() {
        modal.classList.remove('show'); // Remove the 'show' class to trigger the fade-out animation
        setTimeout(() => {
            modal.style.display = 'none'; // Hide the modal after the animation completes
            // Remove the 'modal-open' class to re-enable scrolling
            body.classList.remove('modal-open');
            // Remove the contextmenu event listener
            document.removeEventListener('contextmenu', preventContextMenu);
        }, 300); // Adjust the timeout to match the animation duration
    }
}

// Function to prevent the context menu (right-click) while the modal is open
function preventContextMenu(event) {
    event.preventDefault();
}

// Example usage:
// showModal('This is a success message.', 'success');
// showModal('This is an error message.', 'error');

updateStudentButton.addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect data from form fields
    const studentId = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const school = document.getElementById("school").value || "No data available";
    const college = document.getElementById("college").value || "No data available";
    const hometown = document.getElementById("hometown").value || "No data available";
    const imageFile = document.getElementById("studentImage").files[0]; // Get the selected image file
    const facebook = document.getElementById("facebook").value || "";
    const x = document.getElementById("x").value || "";
    const linkedin = document.getElementById("linkedin").value || "";
    const github = document.getElementById("github").value || "";

    // Check if the student name is required
    const studentNameInput = document.getElementById('name');

    if (!studentNameInput.value) {
        // Add an event listener to reset the border color and remove the red placeholder text on name input change
        studentNameInput.addEventListener('input', function () {
            // Reset the border color
            studentNameInput.style.border = '';

            // Remove the red placeholder text
            studentNameInput.style.color = ''; // Reset the text color
            studentNameInput.placeholder = 'This field is required';
        });

        // Set the placeholder text to indicate that the field is required and make it red
        studentNameInput.style.color = 'red';
        studentNameInput.placeholder = 'This field is required';

        // Focus on the input field
        studentNameInput.focus();

        // Optionally, change the border color
        studentNameInput.style.border = '3px solid red';

        return; // Prevent further form submission
    }

    // Check if an image file is selected and required
    if (!imageFile) {
        const imageInput = document.getElementById('studentImage');

        // Add an event listener to reset the border color and hide the error message on file input change
        imageInput.addEventListener('change', function () {
            // Reset the border color
            imageInput.style.border = '';

            // Hide the error message
            imageError.style.display = 'none';
        });

        scrollToElement(imageInput);

        // Focus on the input field
        imageInput.focus();

        // Optionally, change the border color
        imageInput.style.border = '3px solid red';

        // Display the error message
        imageError.style.display = 'block';

        return; // Prevent further form submission
    }

    // Check if the selected file is in the JPG/JPEG format
    if (imageFile.type !== "image/jpeg" && imageFile.type !== "image/jpg") {
        const imageInput = document.getElementById('studentImage');
        imageInput.style.border = '3px solid red';

        // Display a modal alert
        showModal("Please select a valid JPG/JPEG image file.", 'error');

        // Add an event listener to the modal "Okay" button to scroll to the input field
        const modalOkayBtn = document.getElementById('modalOkayBtn');
        modalOkayBtn.addEventListener('click', () => {
            // Scroll to the student ID input field when the modal "Okay" button is clicked
            scrollToElement(imageInput);

            // Explicitly focus on the input field after a brief delay to ensure scrolling completes
            setTimeout(() => {
                // Focus on the input field
                imageInput.focus();
            });
        }, 300); // Adjust the delay as needed

        // Add an event listener to reset the border color and hide the error message on file input change
        imageInput.addEventListener('change', function () {
            // Reset the border color
            imageInput.style.border = '';

            // Hide the error message
            imageError.style.display = 'none';
        });

        return; // Prevent further form submission
    }

    // Check if the selected file size is within the limit of 2 MB
    if (imageFile.size > 2 * 1024 * 1024) {
        const imageInput = document.getElementById('studentImage');
        imageInput.style.border = '3px solid red';

        // Display a modal alert
        showModal("Image size must be less than or equal to 2 MB.", 'error');

        // Add an event listener to the modal "Okay" button to scroll to the input field
        const modalOkayBtn = document.getElementById('modalOkayBtn');
        modalOkayBtn.addEventListener('click', () => {
            // Scroll to the student ID input field when the modal "Okay" button is clicked
            scrollToElement(imageInput);

            // Explicitly focus on the input field after a brief delay to ensure scrolling completes
            setTimeout(() => {
                // Focus on the input field
                imageInput.focus();
            });
        }, 300); // Adjust the delay as needed

        // Add an event listener to reset the border color and hide the error message on file input change
        imageInput.addEventListener('change', function () {
            // Reset the border color
            imageInput.style.border = '';

            // Hide the error message
            imageError.style.display = 'none';
        });

        return; // Prevent further form submission
    }

    // Construct a FormData object to send the image file
    const formData = new FormData();
    formData.append("studentImage", imageFile);

    try {
        // Send a POST request to the server to update the student image
        const imageResponse = await fetch(`/update-student-image/${studentId}`, {
            method: "POST",
            body: formData,
        });

        if (imageResponse.ok) {
            // Image update successful
            console.log("Student image updated successfully");
        } else {
            // Image update failed
            console.error("Failed to update student image");
        }
    } catch (imageError) {
        console.error("Error updating student image:", imageError);
    }

    // Create an object to hold the updated student data
    const updatedStudentData = {
        id: studentId,
        name: name,
        school: school,
        college: college,
        hometown: hometown,
        socialLinks: {
            facebook: facebook,
            x: x,
            linkedin: linkedin,
            github: github,
        },
    };

    try {
        // Send a POST request to the server to update the student data
        const response = await fetch("/update-student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedStudentData),
        });

        if (response.ok) {
            // Update successful, show a confirmation message
            console.log("Student data updated successfully");
            // Display a modal alert
            showModal("Student data updated successfully.", 'success');

            // Handle the "Okay" button click to redirect to the dashboard
            const modalOkayBtn = document.getElementById('modalOkayBtn');
            modalOkayBtn.addEventListener('click', () => {
                // Redirect to the dashboard or perform other actions as needed
                window.location.href = "/dashboard";
            });
        } else {
            // Update failed, handle errors here
            console.error("Failed to update student data");
        }
    } catch (error) {
        console.error("Error updating student data:", error);
    }
});

function scrollToElement(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const targetY = rect.top - (windowHeight - rect.height) / 2 + window.scrollY;

    window.scrollTo({
        top: targetY,
        behavior: 'smooth', // Use 'auto' or 'smooth' for scrolling behavior
    });
}

// Function to check if a student ID already exists
async function isStudentIdExists(studentId) {
    try {
        // Fetch student data from students.json
        const response = await fetch('/students.json');
        const data = await response.json();
        return data.some(student => student.id === studentId);
    } catch (error) {
        console.error('Error checking student ID:', error);
        return false;
    }
}

// Add an event listener to the "Add Student" button
addStudentButton.addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect data from form fields
    const studentId = document.getElementById("id").value;

    // Check if the student ID is empty or contains only the common part
    // and also check if the id does not match the expected format
    // !/^\d{3}$/.test(studentId) ----- change the value "3" like the substr(-3) in dashboard.js
    if (!studentId || studentId.trim() === "B19" || !/^\d{3}$/.test(studentId)) {
        // Display a modal alert
        showModal("Please enter a valid student ID.", 'error');

        // Add an event listener to the modal "Okay" button to scroll to the input field
        const modalOkayBtn = document.getElementById('modalOkayBtn');
        modalOkayBtn.addEventListener('click', () => {
            // Set the student ID input field in red
            const studentIdInput = document.getElementById('id');
            studentIdInput.style.border = '3px solid red';

            // Set the placeholder text to indicate that the field is required and make it red
            studentIdInput.placeholder = 'This field is required';
            studentIdInput.style.setProperty('--placeholder-color', 'red');
            studentIdInput.style.color = 'red';

            // Scroll to the student ID input field when the modal "Okay" button is clicked
            scrollToElement(studentIdInput);

            // Explicitly focus on the input field after a brief delay to ensure scrolling completes
            setTimeout(() => {
                studentIdInput.focus();
            });
        }, 300); // Adjust the delay as needed

        // Add an input event listener to remove the red border and placeholder text when the user starts typing again
        studentIdInput.addEventListener('input', function () {
            studentIdInput.style.border = ''; // Remove the red border
            studentIdInput.style.color = ''; // Reset the text color
            studentIdInput.placeholder = ''; // Remove the placeholder text
            studentIdInput.focus(); // Focus on the input field to make the cursor blink
        });

        return; // Prevent further form submission
    }

    // Check if the student ID already exists
    const idExists = await isStudentIdExists(studentId);

    if (idExists) {
        // Display a modal alert
        showModal("The student ID already exists! Please either input data for a different ID or remove this student ID's data from the dashboard.", 'error');

        // Add an event listener to the modal "Okay" button to scroll to the input field
        const modalOkayBtn = document.getElementById('modalOkayBtn');
        modalOkayBtn.addEventListener('click', () => {
            // Set the student ID input field in red
            const studentIdInput = document.getElementById('id');
            studentIdInput.style.border = '3px solid red';
            studentIdInput.style.color = 'red';

            // Scroll to the student ID input field when the modal "Okay" button is clicked
            scrollToElement(studentIdInput);

            // Explicitly focus on the input field after a brief delay to ensure scrolling completes
            setTimeout(() => {
                studentIdInput.focus();
            });
        }, 300); // Adjust the delay as needed

        // Add an input event listener to remove the red border and focus on input when the user starts typing again
        studentIdInput.addEventListener('input', function () {
            studentIdInput.style.border = ''; // Remove the red border
            studentIdInput.style.color = ''; // Reset the text color
            studentIdInput.placeholder = ''; // Remove the placeholder text
            studentIdInput.focus(); // Focus on the input field to make the cursor blink
        });

        return; // Prevent further form submission
    }

    // Collect data from form fields
    const name = document.getElementById("name").value;
    const school = document.getElementById("school").value || "No data available";
    const college = document.getElementById("college").value || "No data available";
    const hometown = document.getElementById("hometown").value || "No data available";
    const imageFile = document.getElementById("studentImage").files[0]; // Get the selected image file
    const facebook = document.getElementById("facebook").value || "";
    const x = document.getElementById("x").value || "";
    const linkedin = document.getElementById("linkedin").value || "";
    const github = document.getElementById("github").value || "";

    // Check if the student name is required
    const studentNameInput = document.getElementById('name');

    if (!studentNameInput.value) {
        // Add an event listener to reset the border color and remove the red placeholder text on name input change
        studentNameInput.addEventListener('input', function () {
            // Reset the border color
            studentNameInput.style.border = '';

            // Remove the red placeholder text
            studentNameInput.style.setProperty('--placeholder-color', '');
            studentNameInput.placeholder = 'This field is required';
        });

        // Set the placeholder text to indicate that the field is required and make it red
        studentNameInput.style.setProperty('--placeholder-color', 'red');
        studentNameInput.placeholder = 'This field is required';

        // Focus on the input field
        studentNameInput.focus();

        // Optionally, change the border color
        studentNameInput.style.border = '3px solid red';

        return; // Prevent further form submission
    }

    // Check if an image file is selected and required
    if (!imageFile) {
        const imageInput = document.getElementById('studentImage');

        // Add an event listener to reset the border color and hide the error message on file input change
        imageInput.addEventListener('change', function () {
            // Reset the border color
            imageInput.style.border = '';

            // Hide the error message
            imageError.style.display = 'none';
        });

        scrollToElement(imageInput);

        // Focus on the input field
        imageInput.focus();

        // Optionally, change the border color
        imageInput.style.border = '3px solid red';

        // Display the error message
        imageError.style.display = 'block';

        return; // Prevent further form submission
    }

    // Check if the selected file is in the JPG/JPEG format
    if (imageFile.type !== "image/jpeg" && imageFile.type !== "image/jpg") {
        const imageInput = document.getElementById('studentImage');
        imageInput.style.border = '3px solid red';

        // Display a modal alert
        showModal("Please select a valid JPG/JPEG image file.", 'error');

        // Add an event listener to the modal "Okay" button to scroll to the input field
        const modalOkayBtn = document.getElementById('modalOkayBtn');
        modalOkayBtn.addEventListener('click', () => {
            // Scroll to the student ID input field when the modal "Okay" button is clicked
            scrollToElement(imageInput);

            // Explicitly focus on the input field after a brief delay to ensure scrolling completes
            setTimeout(() => {
                // Focus on the input field
                imageInput.focus();
            });
        }, 300); // Adjust the delay as needed

        // Add an event listener to reset the border color and hide the error message on file input change
        imageInput.addEventListener('change', function () {
            // Reset the border color
            imageInput.style.border = '';

            // Hide the error message
            imageError.style.display = 'none';
        });

        return; // Prevent further form submission
    }

    // Check if the selected file size is within the limit of 2 MB
    if (imageFile.size > 2 * 1024 * 1024) {
        const imageInput = document.getElementById('studentImage');
        imageInput.style.border = '3px solid red';

        // Display a modal alert
        showModal("Image size must be less than or equal to 2 MB.", 'error');

        // Add an event listener to the modal "Okay" button to scroll to the input field
        const modalOkayBtn = document.getElementById('modalOkayBtn');
        modalOkayBtn.addEventListener('click', () => {
            // Scroll to the student ID input field when the modal "Okay" button is clicked
            scrollToElement(imageInput);

            // Explicitly focus on the input field after a brief delay to ensure scrolling completes
            setTimeout(() => {
                // Focus on the input field
                imageInput.focus();
            });
        }, 300); // Adjust the delay as needed

        // Add an event listener to reset the border color and hide the error message on file input change
        imageInput.addEventListener('change', function () {
            // Reset the border color
            imageInput.style.border = '';

            // Hide the error message
            imageError.style.display = 'none';
        });

        return; // Prevent further form submission
    }

    // Construct a FormData object to send the image file
    const formData = new FormData();
    formData.append("studentImage", imageFile);

    try {
        // Send a POST request to the server to add the student image
        const imageResponse = await fetch(`/add-student-image/${studentId}`, {
            method: "POST",
            body: formData,
        });

        if (imageResponse.ok) {
            // Image update successful
            console.log("Student image added successfully");
        } else {
            // Image update failed
            console.error("Failed to add student image");
        }
    } catch (imageError) {
        console.error("Error adding student image:", imageError);
    }

    // Create an object to hold the updated student data
    const updatedStudentData = {
        id: studentId,
        name: name,
        school: school,
        college: college,
        hometown: hometown,
        socialLinks: {
            facebook: facebook,
            x: x,
            linkedin: linkedin,
            github: github,
        },
    };

    try {
        // Send a POST request to the server to add the student data
        const response = await fetch("/add-student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedStudentData),
        });

        if (response.ok) {
            // Update successful, show a confirmation message
            console.log("Student data added successfully");
            // Display a modal alert
            showModal("Student data added successfully.", 'success');

            // Handle the "Okay" button click to redirect to the dashboard
            const modalOkayBtn = document.getElementById('modalOkayBtn');
            modalOkayBtn.addEventListener('click', () => {
                // Redirect to the dashboard or perform other actions as needed
                window.location.href = "/dashboard";
            });
        } else {
            // Update failed, handle errors here
            console.error("Failed to add student data");
        }
    } catch (error) {
        console.error("Error adding student data:", error);
    }
});