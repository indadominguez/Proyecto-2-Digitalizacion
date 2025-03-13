# Ciclo de vida del dato (5b):
## ¿Cómo se gestionan los datos desde su generación hasta su eliminación en tu proyecto?

**En el caso del gestor de tareas, los datos se gestionan de la siguiente forma:**

- Generación de datos: Los datos se generan cuando el usuario ingresa una nueva tarea, con campos como el nombre de la tarea, la fecha de vencimiento y la prioridad.
- Almacenamiento: Estos datos se almacenan localmente en el navegador, utilizando localStorage o sessionStorage para persistir las tareas.
- Modificación: Si el usuario edita una tarea o cambia su estado (completada/pending), los datos se actualizan en el almacenamiento local.
- Eliminación: Los datos se eliminan cuando el usuario decide borrar una tarea. La eliminación actualiza el almacenamiento local, removiendo la entrada asociada.

## ¿Qué estrategia sigues para garantizar la consistencia e integridad de los datos?

**Para garantizar la consistencia e integridad:**

-Uso de validaciones de entrada para asegurarse de que la información de las tareas (como fecha de vencimiento o nombre) esté en el formato adecuado antes de ser almacenada.
-Uso de una estrategia de actualización atomica donde los datos de las tareas se actualizan completamente cuando se modifica un valor para evitar datos parcialmente actualizados.

## Si no trabajas con datos, ¿cómo podrías incluir una funcionalidad que los gestione de forma eficiente?

Si en un futuro decido trabajar con una base de datos externa (por ejemplo, Firebase o una base de datos en la nube), podría integrar API REST para gestionar la creación, actualización, lectura y eliminación de datos, además de usar técnicas de sincronización y caché para garantizar la eficiencia.

# Almacenamiento en la nube (5f):
## Si tu software utiliza almacenamiento en la nube, ¿cómo garantizas la seguridad y disponibilidad de los datos?

**Si integrara almacenamiento en la nube:**

- **Cifrado de datos:** Utilizaría cifrado tanto en tránsito (HTTPS) como en reposo para garantizar la seguridad de los datos.
- **Autenticación:** Implementaría autenticación segura utilizando protocolos como OAuth para proteger el acceso a los datos.
- **Copias de seguridad:** Realizaría copias de seguridad automáticas periódicas para asegurar la disponibilidad de los datos en caso de fallo del sistema.

## ¿Qué alternativas consideraste para almacenar datos y por qué elegiste tu solución actual? 

Para el almacenamiento en este momento, he optado por localStorage porque no requiere una infraestructura externa y es adecuado para un proyecto pequeño como un gestor de tareas local. Alternativas consideradas incluyen Firebase para una opción basada en la nube, que permite una sincronización en tiempo real entre diferentes dispositivos.

## Si no usas la nube, ¿cómo podrías integrarla en futuras versiones?

En futuras versiones, puedo integrar Firebase o AWS S3 para almacenar los datos de tareas en la nube y ofrecer funcionalidades como la sincronización entre dispositivos y accesibilidad desde cualquier lugar.

# Seguridad y regulación (5i):

## ¿Qué medidas de seguridad implementaste para proteger los datos o procesos en tu proyecto?

Actualmente, el proyecto utiliza localStorage para almacenar las tareas. Aunque los datos se mantienen seguros a nivel del navegador, la seguridad de los datos depende de la seguridad del dispositivo del usuario.

## ¿Qué normativas (e.g., GDPR) podrían afectar el uso de tu software y cómo las has tenido en cuenta?

El Reglamento General de Protección de Datos (GDPR) podría afectar si los datos de las tareas contienen información personal identificable. 

**Para cumplir con el GDPR:**

- Los datos almacenados no deben ser personales ni sensibles (en este caso, tareas).
- Debería ofrecer una opción para eliminación de datos de manera transparente.
- Si en un futuro se implementara la nube, habría que establecer políticas de privacidad claras y permitir el acceso y eliminación de datos.
  
## Si no implementaste medidas de seguridad, ¿qué riesgos potenciales identificas y cómo los abordarías en el futuro?

El principal riesgo actual es la falta de cifrado de los datos almacenados localmente. En futuras versiones, se puede implementar un cifrado local de los datos o integrar un sistema de autenticación de usuario para acceder a las tareas, mejorando la seguridad general del proyecto.

# Implicación de las THD en negocio y planta (2e):
## ¿Qué impacto tendría tu software en un entorno de negocio o en una planta industrial?

En un entorno de negocio, este software podría mejorar la gestión de tareas y el seguimiento de proyectos, asegurando que los equipos puedan organizarse mejor, priorizar y cumplir plazos más eficazmente.

## ¿Cómo crees que tu solución podría mejorar procesos operativos o la toma de decisiones?

Mi solución ayudaría a los equipos a gestionar tareas de manera más visual y eficiente. Al integrar filtros como prioridad y fecha de vencimiento, los usuarios pueden ver rápidamente qué tareas son más críticas y necesitan ser atendidas primero, optimizando así los flujos de trabajo y mejorando la toma de decisiones.

## Si tu proyecto no aplica directamente a negocio o planta, ¿qué otros entornos podrían beneficiarse?

Esta aplicación también sería útil en entornos educativos, como gestión de proyectos de estudiantes o en pequeños equipos de trabajo. Además, podría beneficiar a usuarios individuales que gestionan sus actividades cotidianas.

# Mejoras en IT y OT (2f):
## ¿Cómo puede tu software facilitar la integración entre entornos IT y OT? 

El software como un gestor de tareas podría facilitar la integración entre IT y OT mediante la automatización de procesos que requieren tareas específicas. En una planta industrial, por ejemplo, puede gestionarse un calendario de mantenimiento preventivo de equipos y sistemas.

## ¿Qué procesos específicos podrían beneficiarse de tu solución en términos de automatización o eficiencia?

Los procesos relacionados con la asignación y seguimiento de tareas en tiempo real pueden automatizarse para que, por ejemplo, cuando una tarea se marque como completada, automáticamente se inicie el siguiente paso en el proceso.

## Si no aplica a IT u OT, ¿cómo podrías adaptarlo para mejorar procesos tecnológicos concretos?

Para adaptarlo a un contexto IT o OT, podría integrarse con herramientas de automatización de tareas o sistemas de monitoreo de actividad que actualicen las tareas en función de eventos en la red o la planta, permitiendo una mayor eficiencia y menos intervención manual.

# Tecnologías Habilitadoras Digitales (2g):
## ¿Qué tecnologías habilitadoras digitales (THD) has utilizado o podrías integrar en tu proyecto?

Actualmente, las tecnologías habilitadoras digitales como localStorage para el almacenamiento y JavaScript para la interfaz de usuario son clave en este proyecto. En el futuro, podría integrar APIs RESTful para conectar con bases de datos en la nube o integrar tecnologías como Firebase para la sincronización en tiempo real de tareas.

## ¿Cómo mejoran estas tecnologías la funcionalidad o el alcance de tu software?

LocalStorage mejora la funcionalidad del software permitiendo almacenar tareas de manera persistente sin la necesidad de una base de datos externa, y JavaScript permite una experiencia de usuario interactiva y dinámica.

## Si no has utilizado THD, ¿cómo podrías implementarlas para enriquecer tu solución?

Para enriquecer el proyecto, podría integrar tecnologías como APIs RESTful para acceder y gestionar tareas desde diferentes dispositivos, así como Firebase o AWS Lambda para el almacenamiento de datos en la nube y la sincronización en tiempo real, ampliando así el alcance del software.
