const env = {
    database: 'postgresql', // Nombre de la base de datos
    username: 'examenfinal2_user', // Nombre de usuario
    password: 'm4er4qhn75APuRme0444S3udGLwqEfaU', // Contraseña
    host: 'ddpg-cslsujd6l47c73aah2b0-a.oregon-postgres.render.com', // Host de la base de datos
    dialect: 'postgres', // Tipo de base de datos
    pool: {
      max: 5, // Máximo número de conexiones
      min: 0, // Mínimo número de conexiones
      acquire: 30000, // Tiempo máximo de espera para una conexión
      idle: 10000 // Tiempo máximo para una conexión inactiva antes de ser liberada
    }
  };
  
  module.exports = env;
  