
function addStudent() {
    const name = document.getElementById("studentName").value;

    const li = document.createElement("li");
    li.textContent = name;

    document.getElementById("studentList").appendChild(li);

}
