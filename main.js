// this stops the form from refreshing the page after being submitted
document
  .getElementById("myform")
  .addEventListener("submit", (e) => e.preventDefault());

// TODO: sanitise input
// TODO: make sure duplicate skills are not allowed on list
// TODO: plus button that shows the text input form
// TODO: little bit of css

// this function takes form inputs and manipulates the dom with them
const addSkill = (formElement) => {
  const skillName = formElement.name.value;
  if (skillName) {
    createListItem(skillName);
  }
};

const getIdFromUserInput = (userInput) =>
  userInput.toLowerCase().replaceAll(/\W/g, "");

const createListItem = (skillName) => {
  const ul = document.getElementById("list");
  const li = document.createElement("li");

  const skillId = getIdFromUserInput(skillName);
  const removeSkillButton = document.createElement("button");
  const skillSpan = document.createElement("span");

  removeSkillButton.addEventListener("click", (event) => li.remove());

  removeSkillButton.appendChild(document.createTextNode("-"));
  skillSpan.appendChild(document.createTextNode(skillName));
  li.setAttribute("id", skillId);
  li.appendChild(skillSpan);
  li.appendChild(removeSkillButton);
  ul.appendChild(li);
};
