javascript:(function(){
  var userInput = prompt("Enter the element ID to search:");
  if(!userInput) return;

  var element = document.getElementById(userInput);
  if(!element) {
    alert("Element with ID '" + userInput + "' not found.");
    return;
  }

  var options = [];
  var childNodes = element.querySelectorAll("[role=option],[role=listitem],option,li");
  for(var i = 0; i < childNodes.length; i++) {
    options.push(childNodes[i].innerText);
  }

  if(!options.length) {
    alert("No option or list item elements found within the element.");
    return;
  }

  // Create a modal element with list and buttons
  var modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  var modalContent = document.createElement("div");
  modalContent.style.cssText = `
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  `;
  var listTitle = document.createElement("h3");
  listTitle.innerText = "Found Options/List Items:";
  var optionList = document.createElement("ul");
  for(var i = 0; i < options.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerText = options[i];
    optionList.appendChild(listItem);
  }
  var closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.onclick = function() {
    modal.parentNode.removeChild(modal);
  }
  var copyButton = document.createElement("button");
  copyButton.innerText = "Copy";
  copyButton.onclick = function() {
    navigator.clipboard.writeText(options.join("\n"));
    alert("List copied to clipboard!");
  }
  modalContent.appendChild(listTitle);
  modalContent.appendChild(optionList);
  modalContent.appendChild(closeButton);
  modalContent.appendChild(copyButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
})();
