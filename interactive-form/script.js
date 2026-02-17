const form = document.getElementById("applicationForm");
const successMessage = document.getElementById("successMessage");

const fields = {
  name: {
    validate: (value) => value.length >= 3,
    message: "Name must be at least 3 characters",
  },
  email: {
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: "Enter a valid email",
  },
  phone: {
    validate: (value) => /^[0-9]{10}$/.test(value),
    message: "Enter a valid 10-digit phone number",
  },
  password: {
    validate: (value) => value.length >= 6,
    message: "Password must be at least 6 characters",
  },
  confirmPassword: {
    validate: (value) => value === document.getElementById("password").value,
    message: "Passwords do not match",
  },
};

Object.keys(fields).forEach((id) => {
  const input = document.getElementById(id);

  input.addEventListener("input", () => {
    validateField(id);
  });
});

function validateField(id) {
  const input = document.getElementById(id);
  const errorElement = input.nextElementSibling;
  const value = input.value.trim();

  if (!fields[id].validate(value)) {
    input.classList.add("error-border");
    input.classList.remove("success-border");
    errorElement.textContent = fields[id].message;
    return false;
  } else {
    input.classList.remove("error-border");
    input.classList.add("success-border");
    errorElement.textContent = "";
    return true;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  Object.keys(fields).forEach((id) => {
    if (!validateField(id)) {
      isValid = false;
    }
  });

  if (isValid) {
    successMessage.textContent = "Application Submitted Successfully!";
    successMessage.classList.add("show");
    form.reset();

    setTimeout(() => {
      successMessage.classList.remove("show");
      successMessage.textContent = "";
    }, 3000);

    document.querySelectorAll("input").forEach((input) => {
      input.classList.remove("success-border");
    });
  }
});
