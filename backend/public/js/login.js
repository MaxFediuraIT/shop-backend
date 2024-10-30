const login = async (e) => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  const response = await fetch("/login", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  if (result.status === "ok") {
    window.location.href = "../html/index.html";
  } else {
    alert(result.message);
  }
};
