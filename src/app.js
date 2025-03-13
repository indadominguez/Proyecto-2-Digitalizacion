// Obtenemos las referencias a los elementos de la UI
const taskNameInput = document.getElementById('task-name');
const taskDescriptionInput = document.getElementById('task-description');
const dueDateInput = document.getElementById('due-date');
const prioritySelect = document.getElementById('priority');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const activeCount = document.getElementById('active-count');
const completedCount = document.getElementById('completed-count');

// Función para obtener tareas del localStorage
function getTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

// Función para guardar las tareas en el localStorage
function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Función para renderizar las tareas en la lista
function renderTasks(tasks) {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    if (task.completed) taskItem.classList.add('completed');
    
    taskItem.innerHTML = `
      <div>
        <strong>${task.name}</strong> - ${task.priority} - Vencimiento: ${task.dueDate}
        <p>${task.description}</p>
      </div>
      <div>
        <button onclick="deleteTask(${index})">Eliminar</button>
        <button onclick="toggleCompletion(${index})">${task.completed ? 'Desmarcar' : 'Marcar como completada'}</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });

  // Actualizar contadores
  const activeTasks = tasks.filter(task => !task.completed).length;
  const completedTasks = tasks.filter(task => task.completed).length;
  activeCount.textContent = activeTasks;
  completedCount.textContent = completedTasks;
}

// Función para agregar una nueva tarea
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

  // Limpiar los campos de entrada
  taskNameInput.value = '';
  taskDescriptionInput.value = '';
  dueDateInput.value = '';
  prioritySelect.value = 'low';
}

// Función para eliminar una tarea
function deleteTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks(tasks);
}

// Función para marcar una tarea como completada o desmarcarla
function toggleCompletion(index) {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  renderTasks(tasks);
}

// Función para filtrar tareas
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

// Event listeners
addTaskButton.addEventListener('click', addTask);
document.getElementById('filter-all').addEventListener('click', () => filterTasks('all'));
document.getElementById('filter-active').addEventListener('click', () => filterTasks('active'));
document.getElementById('filter-completed').addEventListener('click', () => filterTasks('completed'));

// Inicializar la aplicación
renderTasks(getTasks());

