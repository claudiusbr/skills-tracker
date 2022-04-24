// this stops the form from refreshing the page after being submitted
document
  .getElementById("my-form")
  .addEventListener("submit", (e) => e.preventDefault());

// TODO: make sure duplicate skills are not allowed on list
// TODO: plus button that shows the text input form
// TODO: little bit of css

// TODO: sanitise formElement input
const addSkill = (formElement) => {
  const skillName = formElement.name.value;
  if (skillName) {
    createListItem(skillName);
  }
};

const getIdFromUserInput = (userInput) =>
  userInput.toLowerCase().replaceAll(/\W/g, "");

const clearInputField = () => document.getElementById("my-form").reset();

const createListItem = (skillName) => {
  const ul = document.getElementById("list");
  const li = document.createElement("li");

  const skillId = getIdFromUserInput(skillName);
  const removeSkillButton = document.createElement("button");
  const skillSpan = document.createElement("span");

  removeSkillButton.addEventListener("click", (e) => li.remove());

  removeSkillButton.appendChild(document.createTextNode("-"));
  skillSpan.appendChild(document.createTextNode(skillName));
  li.setAttribute("id", skillId);
  li.appendChild(skillSpan);
  li.appendChild(createSkillSelector(skillId));
  li.appendChild(removeSkillButton);
  ul.appendChild(li);
  clearInputField();
};

// TODO sanitise skillId input
const createSkillSelector = (skillId) => {
  const dropDown = document.createElement("select");
  dropDown.name = "skill-level-selector";
  dropDown.id = "skill-level-selector-" + skillId;

  ["Novice", "Beginner", "Competent", "Proficient", "Expert"].forEach(
    (level) => {
      const skillLevelOption = document.createElement("option");
      skillLevelOption.value = level.toLowerCase();
      skillLevelOption.innerHTML = level;
      dropDown.add(skillLevelOption);
    }
  );
  return dropDown;
};
