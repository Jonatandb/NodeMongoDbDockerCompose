## Conexión de dos imágenes de Docker, una con NodeJs y otra con MongoDB, mediante Docker Compose

### **Creación de imagen de Docker:**

    docker build -t nombreImagen .

_- Es importante poner el punto al final, ya que hace referencia a la carpeta actual y es donde Docker buscará un archivo Dockerfile para crear la imagen con el nombre especificado._

### **Ejecución de imagen (instanciación del contenedor):**

    docker run -p 4000:3000 nombreImagen

_Donde:_

- 3000 Puerto en el que corre el servidor dentro del contendor

- 4000 Puerto desde el que se accederá: http://localhost:4000

### **Uso de docker-compose:**

    docker-compose build

- Busca en la carpeta actual un archivo docker-compose.yml y crea las imágenes dentro descritas para cada servicio especificado.

  - Se debe ejecutar cada vez que se modifica el archivo docker-compose.yml para que se actualicen las imágenes.

  **_docker-compose up_**

  - Busca en la carpeta actual un archivo docker-compose.yml e instancia los contenedores para los servicios dentro descritos, utilizando las imagenes creadas mediante la ejecución de "docker-compose build"

    - Acceso a la app mediante:

      - http://localhost:5000

  **_docker-compose stop_**

  - Detiene los contendores

### **Accediendo a un contenedor en ejecución:**

    docker ps -a (para ver contendores en ejecución)
    docker exec -t nombreContenedor bash

---

### **Páginas consultadas:**

Adding a remote

- https://help.github.com/en/github/using-git/adding-a-remote

Fundamentos de Git - Obteniendo un repositorio Git

- https://git-scm.com/book/es/v2/Fundamentos-de-Git-Obteniendo-un-repositorio-Git

GitHub - Participando en Proyectos

- https://git-scm.com/book/es/v2/GitHub-Participando-en-Proyectos

Node en Docker Hub

- https://hub.docker.com/_/node

Mongo en Docker Hub

- https://hub.docker.com/_/mongo

Docker Compose failed to build - Filesharing has been cancelled

- https://stackoverflow.com/questions/60754297/docker-compose-failed-to-build-filesharing-has-been-cancelled

  - Tuve que especificar en la configuración de recursos de Docker, la ruta a la carpeta que vinculé con un volumen de Docker, por temas de seguridad de la versión de Docker que estoy usando.

Disable logging for one container in Docker-Compose

- https://stackoverflow.com/questions/34590317/disable-logging-for-one-container-in-docker-compose
