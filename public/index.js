let featureButtons = [];
document.getElementById("createButton").addEventListener("click", () => {
  console.log("hi");
  const addedForm = document.createElement("div");
  document.querySelectorAll(".form").forEach((element) => {
    element.className = "show";
  });
  document.body.appendChild(addedForm);
  const features = async () => {
    const featuresRetrieved = await axios.get("/createForm");
    console.log(featuresRetrieved);
    featuresRetrieved.data.forEach((feature) => {
      const button = document.createElement("button");
      addedForm.appendChild(button);
      button.className = `${feature.id} feature`;
      button.innerHTML = feature.name;
    });
    featureButtons = document.querySelectorAll(".feature");
    console.log(featureButtons);
    featureButtons.forEach((feature) => {
      console.log(feature);
      feature.addEventListener("click", async () => {
        const formEntry = [];
        formEntry.push(document.getElementById("problem").value);
        formEntry.push(document.getElementById("error").value);
        formEntry.push(document.getElementById("commit").value);
        formEntry.push(feature.className.split(" ")[0]);
        const createForm = await axios.post("/create", formEntry);
        createForm.data == "ok"
          ? (document.body.style.background = "pink")
          : (document.body.style.background = "blue");
      });
    });
  };
  features();
});
