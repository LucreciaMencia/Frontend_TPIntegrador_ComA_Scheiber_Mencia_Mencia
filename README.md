# Mi Menu

Mi Menu es una página web de comidas donde se podrá ver el menú de diferentes restaurantes. 
Los usuarios logueados dependiendo de su rol tendran diferentes funcionalidades:
* Restaurantes: podran crear comidas (editarlas y eliminarlas).
* Comensales: podran ver los menus de los restaurantes y valorarlos.

## Requisitos de instalación

Para poder realizar estos pasos es necesario que tenga instalado los siguientes softwares:
* Visual Studio Code (o algún otro editor de código).
* MySql (puede ser Workbench).
* Node.js (v18.17.0).

### Frontend
1. Crear una carpeta en la computadora donde vaya a clonar el repositorio.
2. Abrir la carpeta con Visual Studio Code (o el editor que use).
3. Copiar el link ssh del repositorio público.
4. Abrir la terminal en el Visual Studio Code y en ella escribir el siguiente comando para clonar el repositorio:
   git clone -link del repositorio-
5. Una vez clonado el repositorio, instalar todas las dependencias, haciendo en la terminal:
   npm install
6. Para ejecutar el programa debe escribir en la terminal:
   npm start

### Backend

1. Crear una carpeta en la computadora donde vaya a clonar el repositorio.
2. Abrir la carpeta con Visual Studio Code (o el editor que use).
3. Copiar el link ssh del repositorio público.
4. Abrir la terminal en el Visual Studio Code y en ella escribir el siguiente comando para clonar el repositorio:
   git clone -link del repositorio-
5. Una vez clonado el repositorio, instalar todas las dependencias, haciendo en la terminal:
    npm install
7. Con su mysql crear una base de datos y dentro de la misma  copiar el archivo base_de_datos.sql
8. Configurar la base de datos a su mysql, cambiando dentro de la carpeta "database" y del archivo "Database.js" los datos del constructor acorde a los datos de su mysql y la base de datos que creo.
9. Para ejecutar el programa debe escribir en la terminal del VSC: 
   npx nodemon App.js
