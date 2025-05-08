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


