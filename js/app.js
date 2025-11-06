const firstnameInput = document.getElementById('firstname');
const lastnamesInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const dateInput = document.getElementById('hire_date');
const photoInput = document.getElementById('photo');

const tbody = document.getElementById('employeeList');
const submit = document.getElementById('submit');

submit.addEventListener("click", (event) => {

    event.preventDefault()

    const firstname = firstnameInput.value;
    const lastname = lastnamesInput.value;
    const email = emailInput.value;
    const date = dateInput.value;
    const photo = photoInput.files[0];

    const tr = document.createElement('tr');

    const photoCell = document.createElement('td');
    const photoImg = document.createElement('img');
    photoImg.src = "images/" + photo.name;
    photoImg.alt = 'Employee Photo';
    photoImg.style.width = '50px';
    photoImg.style.height = '50px';
    photoCell.appendChild(photoImg);

    const firstnameCell = document.createElement('td');
    firstnameCell.textContent = firstname;

    const lastnameCell = document.createElement('td');
    lastnameCell.textContent = lastname;

    const emailCell = document.createElement('td');
    emailCell.textContent = email;

    const dateCell = document.createElement('td');
    dateCell.textContent = date;

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'


    deleteBtn.addEventListener("click", (event) => {
        confirm("Are you sure you want to delete this employee?")
        tr.style.display = 'none'
    })

    tr.appendChild(photoCell);
    tr.appendChild(firstnameCell);
    tr.appendChild(lastnameCell);
    tr.appendChild(emailCell);
    tr.appendChild(dateCell);
    tr.appendChild(deleteBtn)

    tbody.appendChild(tr);
});


