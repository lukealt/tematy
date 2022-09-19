let makeRequest = () => {
  if (document.getElementById("input").value === "") {
    return;
  }

  let req = new XMLHttpRequest();
  req.open("POST", "https://tematy-jd.herokuapp.com/createEntry", true);
  req.setRequestHeader("Content-Type", "application/json");
  req.send(
    JSON.stringify({
      text: document.getElementById("input").value,
    })
  );

  req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status == 200) {
      console.log(req.responseText);
    }
  };
  document.getElementById("input").value = "";
};
