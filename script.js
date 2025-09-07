// Navigate to home page after login or register
function redirectToHome() {
  setTimeout(() => {
    window.location.href = "home.html";
  }, 300); // slight delay so it feels natural
}

// === LOGIN ===
function handleLogin(event) {
  event.preventDefault();

  const mobile = document.getElementById("loginMobile").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!mobile || !password) {
    alert("Please enter both mobile number and password.");
    return;
  }

  // Show success toast
  const toast = document.getElementById("successToast");
  if (toast) {
    toast.textContent = "Login successful! Redirecting...";
    toast.classList.add("show");

    // Redirect after short delay
    setTimeout(() => {
      toast.classList.remove("show");
      window.location.href = "home.html";
    }, 300); // faster 300ms delay
  } else {
    // Fallback if toast not found
    window.location.href = "home.html";
  }
}


// === REGISTER ===
function handleRegister(event) {
  event.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("registerMobile").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!fullName || !email || !mobile || !password || !confirmPassword) {
    alert("Please fill in all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Show toast success message
  const toast = document.getElementById("successToast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    window.location.href = "home.html";
  }, 2000); // Show toast for 2 seconds before redirect
}


// === RECHARGE ===
function recharge() {
  const sound = document.getElementById("clickSound");
  if (sound) sound.play();

  const number = document.getElementById("phone").value.trim();
  const operator = document.getElementById("operator").value;
  const plan = document.getElementById("plan").value;

  if (!number || !/^\d{10}$/.test(number)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (!operator) {
    alert("Please select a mobile operator.");
    return;
  }

  if (!plan) {
    alert("Please select a recharge plan.");
    return;
  }

  const now = new Date();
  const dateTime = now.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });

  const status = Math.random() > 0.3 ? "Success" : "Failed";

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${number}</td>
    <td>${operator}</td>
    <td>${plan}</td>
    <td class="${status.toLowerCase()}">${status}</td>
    <td>${dateTime}</td>
  `;

  document.querySelector("#historyTable tbody").appendChild(newRow);
}
