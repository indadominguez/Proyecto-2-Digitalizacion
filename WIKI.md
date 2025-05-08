
# 📄 DOCUMENTACIÓN TÉCNICA - Gestor de Tareas

## 🧾 Descripción

Este proyecto es una aplicación web de gestión de tareas desarrollada en JavaScript, HTML y CSS. Permite a los usuarios añadir, visualizar, completar, eliminar y filtrar tareas. Las tareas se almacenan en el navegador mediante `localStorage`.

---

## ⚙️ Funcionalidades

- ✅ Añadir tareas con nombre, descripción, fecha de vencimiento y prioridad.
- ✅ Marcar tareas como completadas o desmarcarlas.
- ✅ Eliminar tareas individuales.
- ✅ Filtrar por:
  - Todas las tareas
  - Solo tareas activas
  - Solo tareas completadas
- ✅ Persistencia local con `localStorage`.

---

## 🧩 Estructura del Código (`app.js`)

### **Función: `getTasks()`**
Recupera las tareas desde `localStorage`.

### **Función: `saveTasks(tasks)`**
Guarda las tareas en `localStorage`.

### **Función: `renderTasks(tasks)`**
Dibuja las tareas en pantalla.

### **Función: `addTask()`**
Crea una nueva tarea a partir de los datos del formulario.

### **Función: `deleteTask(index)`**
Elimina la tarea en la posición indicada.

### **Función: `toggleCompletion(index)`**
Cambia el estado de completado de una tarea.

### **Función: `filterTasks(status)`**
Filtra las tareas según su estado (`all`, `active`, `completed`).

---

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 📦 Almacenamiento

- Se utiliza `localStorage` para guardar las tareas localmente en el navegador del usuario. No se requiere backend.

---

## 📁 Archivos

- `index.html`: Estructura de la interfaz.
- `src/styles.css`: Estilos del gestor.
- `src/app.js`: Lógica de la aplicación (documentada).
- `DOCUMENTACION.md`: Este archivo de referencia técnica.

---

## 📌 Notas

- Todo el contenido puede ser fácilmente internacionalizado.
- No se necesita instalación: el proyecto funciona localmente abriendo el archivo `index.html`.

---

## 🧑‍💻 Autor

**SimpleTask** - Proyecto académico de gestión de tareas.

---

## 📝 Detalles del Código

A continuación se presenta el código completo de la aplicación `app.js`, con comentarios explicativos:

```javascript
// Obtenemos las referencias a los elementos de la interfaz
const taskNameInput = document.getElementById('task-name');
const taskDescriptionInput = document.getElementById('task-description');
const dueDateInput = document.getElementById('due-date');
const prioritySelect = document.getElementById('priority');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const activeCount = document.getElementById('active-count');
const completedCount = document.getElementById('completed-count');

// Recupera las tareas almacenadas en localStorage
function getTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

// Guarda el array de tareas en localStorage
function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Renderiza las tareas en pantalla
function renderTasks(tasks) {
  taskList.innerHTML = ''; // Limpia la lista antes de renderizar

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    if (task.completed) taskItem.classList.add('completed');

    // Contenido HTML para cada tarea
    taskItem.innerHTML = `
      <div>
        <strong>${task.name}</strong> - ${task.priority} - Vencimiento: ${task.dueDate}
        <p>${task.description}</p>
      </div>
      <div>
        <button onclick="deleteTask(${index})">Eliminar</button>
        <button onclick="toggleCompletion(${index})">
          ${task.completed ? 'Desmarcar' : 'Marcar como completada'}
        </button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });

  // Actualiza los contadores de tareas activas y completadas
  const activeTasks = tasks.filter(task => !task.completed).length;
  const completedTasks = tasks.filter(task => task.completed).length;
  activeCount.textContent = activeTasks;
  completedCount.textContent = completedTasks;
}

// Añade una nueva tarea y actualiza el almacenamiento y la vista
function addTask() {
  const newTask = {
    name: taskNameInput.value,
    description: taskDescriptionInput.value,
    dueDate: dueDateInput.value,
    priority: prioritySelect.value,
    completed: false
  };

  const tasks = getTasks();
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks(tasks);

  // Limpia los campos del formulario
  taskNameInput.value = '';
  taskDescriptionInput.value = '';
  dueDateInput.value = '';
  prioritySelect.value = 'low';
}

// Elimina una tarea por índice
function deleteTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1); // Elimina una tarea del array
  saveTasks(tasks);
  renderTasks(tasks);
}

// Cambia el estado de completado de una tarea
function toggleCompletion(index) {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  renderTasks(tasks);
}

// Filtra las tareas según su estado: todas, activas o completadas
function filterTasks(status) {
  const tasks = getTasks();
  if (status === 'all') {
    renderTasks(tasks);
  } else if (status === 'active') {
    renderTasks(tasks.filter(task => !task.completed));
  } else if (status === 'completed') {
    renderTasks(tasks.filter(task => task.completed));
  }
}

// Listeners para los botones
addTaskButton.addEventListener('click', addTask);
document.getElementById('filter-all').addEventListener('click', () => filterTasks('all'));
document.getElementById('filter-active').addEventListener('click', () => filterTasks('active'));
document.getElementById('filter-completed').addEventListener('click', () => filterTasks('completed'));

// Inicializa la vista con las tareas guardadas
renderTasks(getTasks());
