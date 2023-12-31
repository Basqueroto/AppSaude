const btnCreate = document.querySelector(".create");
    /* const reminders = JSON.parse(localStorage.getItem("reminders")) || []; */
    if (!localStorage.getItem("reminders")) {
    localStorage.setItem("reminders", JSON.stringify([]));
    }

    btnCreate.addEventListener("click", function() {

    const modal = document.createElement("div");
    modal.className = "modal";

    const modalTitle = document.createElement("h4");
    modalTitle.textContent = "Criar a ação";
    modal.appendChild(modalTitle);

    const modalTitleInput = document.createElement("input");
    modalTitleInput.type = "text";
    modalTitleInput.placeholder = "Título da ação";
    modal.appendChild(modalTitleInput);

    const modalStartTimeInput = document.createElement("input");
    modalStartTimeInput.type = "datetime-local";
    modalStartTimeInput.placeholder = "Data e hora de início";
    
    const now = new Date();
    const formattedNow = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}T${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    modalStartTimeInput.value = formattedNow;
    
    modal.appendChild(modalStartTimeInput);

    const modalEndTimeInput = document.createElement("input");
    modalEndTimeInput.type = "datetime-local";
    modalEndTimeInput.placeholder = "Data e hora de término";

    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedTomorrow = `${tomorrow.getFullYear()}-${(tomorrow.getMonth() + 1).toString().padStart(2, "0")}-${tomorrow.getDate().toString().padStart(2, "0")}T${tomorrow.getHours().toString().padStart(2, "0")}:${tomorrow.getMinutes().toString().padStart(2, "0")}`;
    modalEndTimeInput.value = formattedTomorrow;
    
    modal.appendChild(modalEndTimeInput);

    const modalDescriptionInput = document.createElement("input");
    modalDescriptionInput.type = "text";
    modalDescriptionInput.placeholder = "Descrição da ação";
    modal.appendChild(modalDescriptionInput);

    const createButton = document.createElement("button");
    createButton.textContent = "Criar";
    createButton.addEventListener("click", function() {
    const title = modalTitleInput.value;
    const startTime = modalStartTimeInput.value;
    const endTime = modalEndTimeInput.value;
    const description = modalDescriptionInput.value;

    if (title && startTime && endTime && description) {
        const reminder = {
        title: title,
        startTime: startTime,
        endTime: endTime,
        description: description,
    };

    const storedReminders = JSON.parse(localStorage.getItem("reminders"));
    storedReminders.push(reminder);
    localStorage.setItem("reminders", JSON.stringify(storedReminders));

    modalTitleInput.value = "";
    modalStartTimeInput.value = "";
    modalEndTimeInput.value = "";
    modalDescriptionInput.value = "";

    update();

    modal.style.display = "none";
    }
    });
    modal.appendChild(createButton);

    const modalCloseButton = document.createElement("button");
    modalCloseButton.textContent = "Fechar";
    modalCloseButton.addEventListener("click", function() {
      modal.style.display = "none";
    });
    modal.appendChild(modalCloseButton);

    document.body.appendChild(modal);

    modal.style.display = "block";
    });

    function update() {
      const newAddDiv = document.querySelector(".new-add");
      newAddDiv.innerHTML = "";

      const storedReminders = JSON.parse(localStorage.getItem("reminders"));

      for (let i = 0; i < storedReminders.length; i++) {
      const reminder = storedReminders[i];

      const reminderDiv = document.createElement("div");
        reminderDiv.className = "reminder";

        const checkboxDiv = document.createElement("div");
        checkboxDiv.className = "checkbox";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = reminder.completed;
        checkbox.addEventListener("change", function() {
          check(reminder, checkbox, titleDiv, favoriteButton, emojiButton, storedReminders);
        });
        checkboxDiv.appendChild(checkbox);
        reminderDiv.appendChild(checkboxDiv);

        const titleDiv = document.createElement("div");
        titleDiv.className = "title";
        titleDiv.textContent = reminder.title;
        if (reminder.completed) {
      // titleDiv.style.textDecoration = "line-through"; 
    }

        titleDiv.addEventListener("click", function() {
          if (!reminder.completed) {
        edit(reminder, i, storedReminders);
        }
        });
        reminderDiv.appendChild(titleDiv);

        // const editButtonDiv = document.createElement("div");
        // editButtonDiv.className = "edit-button";

        // const editButton = document.createElement("button");
        // editButton.textContent = "Editar";
        // editButton.addEventListener("click", function() {
        
        // });
        // editButtonDiv.appendChild(editButton);
        // reminderDiv.appendChild(editButtonDiv);

        const deleteButtonDiv = document.createElement("div");
        deleteButtonDiv.className = "delete-button";

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        // deleteButton.textContent = "Excluir";
        deleteButton.addEventListener("click", function() {
          storedReminders.splice(i, 1);
          localStorage.setItem("reminders", JSON.stringify(storedReminders));
          update();
        });

        deleteButtonDiv.appendChild(deleteButton);
        reminderDiv.appendChild(deleteButtonDiv);

        newAddDiv.appendChild(reminderDiv);
      }
    }

update()

  function edit(reminder, index, storedReminders) {
        const modalEdit = document.createElement("div");
        modalEdit.className = "modal";

        const modalTitle = document.createElement("h4");
        modalTitle.textContent = "Editar ação";
        modalEdit.appendChild(modalTitle);

        const modalTitleInput = document.createElement("input");
        modalTitleInput.type = "text";
        modalTitleInput.value = reminder.title;
        modalEdit.appendChild(modalTitleInput);

        const modalStartTimeInput = document.createElement("input");
        modalStartTimeInput.type = "datetime-local";
        modalStartTimeInput.value = reminder.startTime;
        modalEdit.appendChild(modalStartTimeInput);

        const modalEndTimeInput = document.createElement("input");
        modalEndTimeInput.type = "datetime-local";
        modalEndTimeInput.value = reminder.endTime;
        modalEdit.appendChild(modalEndTimeInput);

        const modalDescriptionInput = document.createElement("input");
        modalDescriptionInput.type = "text";
        modalDescriptionInput.value = reminder.description;
        modalEdit.appendChild(modalDescriptionInput);

        const updateButton = document.createElement("button");
        updateButton.textContent = "Atualizar";
        updateButton.addEventListener("click", function() {
          reminder.title = modalTitleInput.value;
          reminder.startTime = modalStartTimeInput.value;
          reminder.endTime = modalEndTimeInput.value;
          reminder.description = modalDescriptionInput.value;
          
          localStorage.setItem("reminders", JSON.stringify(storedReminders));
          update();
          modalEdit.style.display = "none";
        });
        modalEdit.appendChild(updateButton);

        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancelar";
        cancelButton.addEventListener("click", function() {
            modalEdit.style.display = "none";
        });
        modalEdit.appendChild(cancelButton);

        document.body.appendChild(modalEdit);

        modalEdit.style.display = "block";
        }