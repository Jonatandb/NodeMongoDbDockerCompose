## Conexión de dos imágenes de Docker, una con NodeJs y otra con MongoDB, mediante Docker Compose

### Creación de imagen de Docker:

    docker build -t nombreImagen .

    Es importante poner el punto al final, ya que hace referencia a la carpeta actual y es donde Docker buscará un archivo Dockerfile para crear la imagen con el nombre especificado.

### Ejecución de imagen (instanciación del contenedor):

    docker run -p 4000:3000 nombreImagen

    Donde:
        - 3000 Puerto en el que corre el servidor dentro del contendor

        - 4000 Puerto desde el que se accederá: http://localhost:4000

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
