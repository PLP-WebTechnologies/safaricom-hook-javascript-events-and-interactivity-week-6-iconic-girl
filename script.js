const bgButton = document.getElementById('bgButton');
const body = document.body;
let isBackgroundBlue = false;

bgButton.addEventListener('click', () => {
    body.style.backgroundColor = isBackgroundBlue ? 'white' : 'lightblue';
    isBackgroundBlue = !isBackgroundBlue;
});

const textSizeSlider = document.getElementById("textSizeSlider");
const resizableText = document.getElementById("resizableText");

textSizeSlider.oninput = function() {
    resizableText.style.fontSize = this.value + "px";
};

const modal = document.getElementById("myModal");
const modalButton = document.getElementById("modalButton");
const closeBtn = document.getElementById("closeModal"); // Get close button by ID

modalButton.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() { // Use the ID to close
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    let isValid = true;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }

    if (passwordInput.value.length < 8 || !/[A-Z]/.test(passwordInput.value) || !/\d/.test(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters, with one uppercase letter and one number.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
    else{
        alert("Form Submitted")
    }
});
const selectElement = document.getElementById('mySelect');
const messageDiv = document.getElementById('selectMessage');

selectElement.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  messageDiv.textContent = `You selected: ${selectedValue}`;
});