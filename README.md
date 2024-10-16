# Proyecto de Chat Cliente-Servidor en C

## Introducción
Este proyecto implementa un sistema de chat basado en un modelo cliente-servidor utilizando el lenguaje C. Los clientes pueden conectarse al servidor y seleccionar con quién desean comunicarse de una lista de usuarios conectados. El servidor maneja múltiples clientes simultáneamente mediante hilos (pthread), permitiendo una comunicación privada entre pares.

El objetivo principal del proyecto es permitir la interacción entre los clientes de manera segura y eficiente, con funcionalidades como el cambio de chat, desconexiones controladas, y gestión de múltiples conexiones.

## Desarrollo

### Características del Proyecto

- *Comunicación privada entre pares*: Cada cliente puede seleccionar con quién desea hablar de la lista de usuarios conectados.
- *Lista dinámica de usuarios*: Los clientes pueden ver los usuarios conectados en tiempo real.
- *Cambio de chat*: Los clientes pueden salir de una conversación y regresar a la lista de usuarios para seleccionar otro destinatario.

### Requisitos

- *Compilador GCC*: Se necesita GCC para compilar el código.
- *Biblioteca pthread*: La comunicación entre clientes se maneja con hilos (pthread), por lo que es necesario contar con la biblioteca pthread.

### Estructura de Archivos

- servidor.c: Código fuente del servidor.
- cliente.c: Código fuente del cliente.
- Makefile: Archivo para compilar y ejecutar el proyecto.
- README.md: manual de usuario.

### Cómo Compilar y Ejecutar

El proyecto incluye un *Makefile* para facilitar la compilación y ejecución del código.

#### 1. Compilar el proyecto

Para compilar tanto el servidor como el cliente, simplemente ejecuta el siguiente comando en la terminal:

```bash
make
```

Esto ejecutará las reglas del Makefile y compilará los archivos, generando los binarios servidor y cliente.

#### 2. Ejecutar el servidor
Para iniciar el servidor, utiliza el siguiente comando:

```bash
make run-server
```

El servidor estará ahora a la espera de conexiones en el puerto 8080. Verás un mensaje en la terminal indicando que el servidor está escuchando:

```bash
Servidor escuchando en el puerto 8080...
```

#### 3. Ejecutar el cliente
Para iniciar un cliente, abre otra terminal y utiliza el siguiente comando:

```bash
make run-client
```
El cliente se conectará al servidor en localhost (127.0.0.1) en el puerto 8080. Al iniciar, el cliente te pedirá que ingreses tu nombre de usuario.

Puedes iniciar múltiples clientes para simular varias conexiones, cada cliente en una terminal diferente.

#### 4. Interacción entre clientes
Una vez que estés conectado, el cliente recibirá la lista de usuarios disponibles y se te pedirá que elijas con quién deseas chatear. Solo verás los mensajes que tú y la persona seleccionada intercambien.

Ejemplo de flujo del cliente:

```bash
Introduce tu nombre de usuario: simon
Ver lista de usuarios conectados:

Usuarios conectados:
maria
juan

Escribe el nombre de la persona con la que quieres hablar (o presiona 'x' para salir):
```

Enviar mensajes: Los mensajes aparecerán con el formato "{Usuario}: mensaje" en ambas consolas (tanto para el remitente como para el destinatario).

Cambiar de conversación: Puedes presionar x en cualquier momento para salir del chat actual y regresar a la lista de usuarios.

Salir: Si el cliente cierra la conexión abruptamente (por ejemplo, usando Ctrl + C), el servidor detectará la desconexión e informará al servidor que se ha desconectado.

#### 1. Limpiar el proyecto
Si deseas eliminar los archivos binarios generados (servidor y cliente), puedes ejecutar:

```bash
make clean
```

#### Ejemplo de Uso
Cliente 1 (simon):

```bash
Introduce tu nombre de usuario: simon
Usuarios conectados:
maria
juan

Escribe el nombre de la persona con la que quieres hablar (o presiona 'x' para salir): majo

{majo}: Hola Simon, ¿cómo estás?
{Simon}: ¡Todo bien! ¿Y tú?
```

Cliente 2 (maria):
```bash
Introduce tu nombre de usuario: maria
Usuarios conectados:
simon
juan

Escribe el nombre de la persona con la que quieres hablar (o presiona 'x' para salir): simon

{Simon}: ¡Todo bien! ¿Y tú?
{majo}: Hola Simon, ¿cómo estás?
```

## 3. Aspectos Logrados y No Logrados

### Aspectos Logrados:
- Concurrencia en la gestión de múltiples clientes.
- Envío y recepción de mensajes entre usuarios.
- Uso de un protocolo TCP, adecuado para la aplicación.
- Interfaz de usuario basada en consola para el cliente.
- Implementación básica de un protocolo de chat tipo texto.

### Aspectos No Logrados o pendientes:
- Autenticación robusta y gestión de sesiones.
- Manejo exhaustivo de errores y desconexiones inesperadas.
- La interfaz en consola no es la más amigable o visualmente atractiva.
- Mejora en el control y terminación de hilos para evitar fugas de recursos.

## 4. Conclusiones

Este proyecto ha permitido implementar una solución de comunicación en tiempo real utilizando una arquitectura cliente-servidor basada en sockets TCP/IP. A lo largo del desarrollo, se abordaron desafíos técnicos relacionados con la concurrencia, la gestión de múltiples conexiones y la transferencia de mensajes entre clientes en una red.

La implementación de hilos (threads) en el servidor y el cliente permitió gestionar varias conexiones de manera concurrente. Esto aseguró que cada cliente pudiera enviar y recibir mensajes en paralelo sin interferir con otros usuarios. El protocolo diseñado permitió que los usuarios eligieran con quién chatear, facilitando la creación de canales de comunicación privados entre pares, proporcionando una experiencia de usuario controlada. Esta arquitectura puede expandirse en futuras iteraciones para soportar chats grupales.

Un aspecto clave fue el manejo adecuado de errores, como las desconexiones inesperadas de los clientes. Se utilizó la señal SIGPIPE para evitar que el servidor se cerrara abruptamente, asegurando que continuara funcionando de manera estable, lo cual es crucial para la robustez del sistema.

Aunque el proyecto ha cumplido con los requisitos iniciales, hay áreas que podrían mejorarse:

- *Escalabilidad:* Aunque el servidor puede manejar hasta 100 conexiones, se podría mejorar la escalabilidad mediante el uso de un pool de hilos o la distribución de la carga en varios servidores.
- *Protocolo de Mensajes:* Se podría desarrollar un protocolo más robusto con comandos explícitos, lo que permitiría extender la aplicación para incluir funcionalidades como conversaciones grupales, envío de archivos o emojis.

## 5. Referencias
- [Documentación de Sockets en C](https://www.geeksforgeeks.org/socket-programming-in-c-cpp/)
- [Guía de Pthreads](https://man7.org/linux/man-pages/man7/pthreads.7.html)
- [Referencia de GitHub para Makefiles](https://github.com/maks/MKdocs)
