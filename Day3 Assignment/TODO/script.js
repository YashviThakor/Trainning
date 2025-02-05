document.addEventListener("DOMContentLoaded", () => {
    const inputTodo = document.getElementById("input-todo");
    const buttonTodo = document.getElementById("button-todo");
    const ulTodo = document.getElementById("ul-todo");
    const deleteAll = document.getElementById("deleteAll");
    const statusCodeElement = document.getElementById("status-code");
    const statusMessageElement = document.getElementById("status-message");
  
    const axiosInstance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/",
    });
  
    const getAllTodos = async () => {
      try {
        const res = await axiosInstance.get("/todos?_limit=5");
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
  
    const updateStatusBox = (status, message) => {
      statusCodeElement.textContent = `Status: ${status}`;
      statusMessageElement.textContent = `Message: ${message}`;
    };
  
    const createTodo = (task, id) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-start";
      li.dataset.id = id;
      li.innerHTML = `<span class="text-todo">${task}</span>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-danger">Edit</button>
          <button type="button" class="btn btn-warning">Delete</button>
        </div>`;
      ulTodo.appendChild(li);
    };
  
    buttonTodo.addEventListener("click", () => {
      const text = inputTodo.value.trim();
      if (!text) return;
  
      axiosInstance.post("/todos", { title: text, completed: false }).then((res) => {
        updateStatusBox(res.status, JSON.stringify(res.data));
        createTodo(text, res.data.id);
      });
  
      inputTodo.value = "";
      saveAllTodo();
    });
  
    ulTodo.addEventListener("click", (e) => {
      const li = e.target.closest(".list-group-item");
      const todoId = li.dataset.id;
  
      if (!li) return;
  
      if (e.target.classList.contains("btn-warning")) {
        li.remove();
        axiosInstance.delete(`/todos/${todoId}`).then((res) => {
          updateStatusBox(res.status, JSON.stringify(res.data));
        });
        saveAllTodo();
      }
  
      if (e.target.classList.contains("btn-danger")) {
        const taskText = li.querySelector(".text-todo");
  
        if (e.target.textContent === "Edit") {
          const input = document.createElement("input");
          input.type = "text";
          input.className = "edit-text";
          input.value = taskText.textContent;
          li.replaceChild(input, taskText);
          e.target.textContent = "Set";
        } else {
          const input = li.querySelector(".edit-text");
          if (!input) return;
  
          const newText = input.value.trim();
          const span = document.createElement("span");
          span.className = "text-todo";
          span.textContent = newText;
          li.replaceChild(span, input);
          e.target.textContent = "Edit";
  
          axiosInstance.put(`/todos/${todoId}`, { title: newText, completed: false }).then((res) => {
            updateStatusBox(res.status, JSON.stringify(res.data));
          });
  
          saveAllTodo();
        }
      }
    });
  
    const saveAllTodo = () => {
      const allTodos = [...document.querySelectorAll(".text-todo")].map((task) => task.textContent);
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
    };
  
    const loadAllTodo = async () => {
      const allTodos = await getAllTodos();
      allTodos.forEach((element) => {
        createTodo(element.title, element.id);
      });
    };
  
    const deleteAllTodos = () => {
      if (confirm("Do you really want to delete all Todos?")) {
        ulTodo.innerHTML = "";
        localStorage.clear();
        updateStatusBox("Cleared", "All todos have been deleted.");
      }
    };
  
    deleteAll.addEventListener("click", deleteAllTodos);
    loadAllTodo();
  });
  