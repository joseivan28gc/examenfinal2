const env = {
    database: 'basefinal', // Nombre de la base de datos
    username: 'basefinal_user', // Nombre de usuario
    password: 'xEaWYluoSVpfA59VeI20nP1TPdwO1rAB', // Contraseña
    host: 'dpg-cslrt252ng1s73be809g-a.oregon-postgres.render.com', // Host de la base de datos
    dialect: 'postgres', // Tipo de base de datos
    pool: {
      max: 5, // Máximo número de conexiones
      min: 0, // Mínimo número de conexiones
      acquire: 30000, // Tiempo máximo de espera para una conexión
      idle: 10000 // Tiempo máximo para una conexión inactiva antes de ser liberada
    }
  };
  
  module.exports = env;
  