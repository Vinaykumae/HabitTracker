document.getElementById("newHabit").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addHabit();
    }
});

function addHabit() {
    const habitText = document.getElementById("newHabit").value.trim();
    if (habitText === "") return;
    
    const li = document.createElement("li");
    
    li.innerHTML = `
        ${habitText} 
        <button onclick="toggleDone(this)">Mark as Done</button>
    `;
    
    document.getElementById("habitsList").appendChild(li);
    document.getElementById("newHabit").value = "";
}

function toggleDone(buttonElement) {
    const li = buttonElement.parentNode;
    
    if (li.classList.contains("done")) {
        li.classList.remove("done");
        buttonElement.textContent = "Mark as Done";
    } else {
        li.classList.add("done");
        buttonElement.textContent = "Undo";
    }
}
