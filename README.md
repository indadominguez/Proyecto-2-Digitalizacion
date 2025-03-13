# SimpleTask - Gestor de Tareas

**SimpleTask** 

Es una aplicación web de gestión de tareas que permite a los usuarios agregar, editar, eliminar, marcar como completadas y filtrar tareas. Las tareas se pueden clasificar por prioridad (baja, media o alta) y fecha de vencimiento. La aplicación también guarda las tareas localmente en el navegador utilizando `localStorage`, lo que permite que las tareas persistan incluso después de recargar la página.

**Para hacer el trabajo un poco diferente al resto de la clase, he decidido hacer el script, utilizando HTML, CSS y JavaScript**

## Características

- **Agregar tarea**: Los usuarios pueden agregar nuevas tareas con un nombre, fecha de vencimiento y prioridad.
- **Editar tarea**: Permite modificar el nombre de una tarea existente.
- **Eliminar tarea**: Los usuarios pueden eliminar tareas de la lista.
- **Marcar como completada**: Permite marcar una tarea como completada o desmarcarla.
- **Filtrar tareas**: Los usuarios pueden filtrar las tareas para ver solo las tareas pendientes, completadas o todas las tareas.
- **Ordenar tareas**: Las tareas se ordenan por prioridad (alta, media, baja) y fecha de vencimiento.
- **Persistencia**: Las tareas se guardan en el almacenamiento local del navegador, lo que asegura que no se pierdan al recargar la página.

## Tecnologías utilizadas

- **HTML**: Estructura básica de la aplicación web.
- **CSS**: Estilos y diseño de la interfaz de usuario.
- **JavaScript**: Funcionalidad de la aplicación, incluyendo la lógica para agregar, eliminar, marcar tareas como completadas y guardar las tareas en `localStorage`.
- **localStorage**: Utilizado para guardar las tareas de manera persistente en el navegador del usuario.


# Aplicación de Conceptos Clave:
## 1. Ciclo de vida del dato:

El ciclo de vida del dato describe todas las etapas que un dato atraviesa desde su creación hasta su eliminación. En el caso de SimpleTask, podemos observar lo siguiente:

- Creación del dato: Los usuarios ingresan datos al agregar una tarea (nombre, fecha de vencimiento, prioridad). Esta información se crea en el navegador y se almacena localmente en el localStorage.
- Uso del dato: Los datos se utilizan en la interfaz para mostrar las tareas, realizar filtros y realizar acciones como completar o eliminar tareas.
- Almacenamiento: El almacenamiento se realiza a través de localStorage, un espacio en el navegador que permite la persistencia de datos. Esto asegura que las tareas no se pierdan al recargar la página.
- Modificación: Los datos pueden modificarse a través de acciones como editar una tarea o marcarla como completada, lo que se refleja directamente en la UI y se guarda nuevamente en localStorage.
- Eliminación: Los usuarios pueden eliminar tareas, lo que implica que los datos se eliminan de la lista y se actualizan en el almacenamiento local.
- Este ciclo asegura que el dato se gestione de manera eficiente a lo largo de su vida útil dentro de la aplicación.

## 2. Seguridad:

Aunque la seguridad no es un enfoque principal en este proyecto (ya que se trata de una aplicación local sin interacción con servidores externos), hay algunas medidas que pueden aplicarse, tales como:

- Validación de entrada: Se asegura que el nombre de la tarea no esté vacío antes de agregarlo. Esto previene la creación de tareas vacías o incorrectas.
- Almacenamiento local seguro: Aunque el almacenamiento local (como localStorage) no es lo más seguro para datos sensibles, en este caso los datos no contienen información confidencial. En una aplicación real, deberíamos usar cifrado para almacenar información sensible de manera más segura.
- Protección contra manipulación del almacenamiento: El uso de localStorage no es seguro contra modificaciones por parte del usuario (por ejemplo, un usuario podría manipular los datos en las herramientas de desarrollo del navegador). Para aplicaciones reales que manejan información sensible, es recomendable utilizar bases de datos seguras y medidas de autenticación.

## 3. Almacenamiento en la nube:

Aunque en este proyecto se utiliza localStorage, es posible mejorar la aplicación utilizando un sistema de almacenamiento en la nube. El almacenamiento en la nube ofrece varias ventajas, como la accesibilidad desde diferentes dispositivos, la escalabilidad, la seguridad y la sincronización de datos entre múltiples usuarios.

Si se trasladara esta aplicación a la nube, podría usarse una base de datos como Firebase Firestore o AWS DynamoDB, que permitirían:

- Sincronización en tiempo real entre diferentes dispositivos.
- Acceso desde cualquier lugar y por diferentes usuarios.
- Mayor seguridad para la información almacenada, con políticas de acceso más estrictas y autenticación.
- Implicaciones de las Tecnologías Habilitadoras Digitales (THD):
  
**1. Impacto en IT (Tecnologías de la Información):**
Las Tecnologías Habilitadoras Digitales (THD) son tecnologías que facilitan el avance de la digitalización y la transformación de los negocios. En el contexto de esta aplicación:

- **Almacenamiento en la nube y Big Data:** La utilización de cloud computing permite una mayor escalabilidad y accesibilidad de los datos. Si la aplicación se ampliara para incluir múltiples usuarios o datos más grandes, un sistema de almacenamiento en la nube sería esencial para manejar estos datos de manera eficiente.

- **Interoperabilidad:** Las aplicaciones basadas en la nube permiten la integración de diferentes plataformas y servicios. Si la aplicación se expandiera, podría integrarse con otros sistemas de gestión de tareas o plataformas externas para ofrecer una experiencia más completa.

- **Automatización:** A medida que se añaden más funciones (como notificaciones, recordatorios, etc.), la automatización de tareas y flujos de trabajo sería una implicación directa de las tecnologías habilitadoras. Esto podría reducir la necesidad de intervención manual.


**2. Impacto en OT (Tecnologías Operativas):**
- **Accesibilidad remota y colaboración:** Si se implementara un almacenamiento en la nube y la aplicación tuviera capacidades de múltiples usuarios, esto permitiría una gestión de tareas colaborativa, lo que tiene un impacto directo en las tecnologías operativas. Los equipos podrían trabajar juntos de manera más eficiente, y el acceso remoto a las tareas sería más fácil.

- **Mantenimiento y actualizaciones:** Con el uso de plataformas basadas en la nube, el mantenimiento de la aplicación se puede realizar de forma centralizada, lo que significa que los usuarios no tienen que actualizar manualmente la aplicación en sus dispositivos. Esto mejora la experiencia del usuario y reduce el tiempo de inactividad.

- **Seguridad y monitoreo:** En un sistema basado en la nube, las tecnologías operativas pueden involucrar la monitorización constante de las bases de datos y la infraestructura para detectar posibles fallos o vulnerabilidades, lo que mejora la estabilidad y seguridad de la aplicación a largo plazo.
