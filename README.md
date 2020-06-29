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

        docker-compose up

  - Busca en la carpeta actual un archivo docker-compose.yml e instancia los contenedores para los servicios dentro descritos, utilizando las imagenes creadas mediante la ejecución de "docker-compose build"

    - Acceso a la app mediante:

      - http://localhost:5000

  _docker-compose stop_ - Detiene los contendores

---

### Páginas consultadas:

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
