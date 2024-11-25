//Este modulo nos permite enviar correos
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({path: '.env'});

const correoRegistro = async(info)=>{
  const transport = nodemailer.createTransport({
    host:process.env.CORREO_HOST,
    port:process.env.CORREO_PORT,
    auth:{
      user:process.env.CORREO_USER,
      pass:process.env.CORREO_PASS,
    },
  });
  const {nombre, correo, token}=info;
  await transport.sendMail({
    from:'juchbriones@gmail.com',
    to:correo,
    subject:'Confirma tu registro',
    html:`   
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Enebo - confiramcion</title>
          <link rel="icon" href="http://localhost:3000/img/images_pagina/logo-JP-icon.png">
          <link rel="stylesheet" href="/css/styles.css">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
      </head>
      <body>
          <header class="header" id="header">
              <div class="header__menu-container">
                  <div class="header__principal-logo">
                      <a href="/"><img class="logo-pagina-image" src="http://localhost:3000/img/images_pagina/logo-pagina.png"></a>
                  </div>
              </div>
          </header>
          <h1>¡Hola, ${nombre}!</h1>
          <p>Gracias por registrarte. Todo el equipo de Enebo esta muy emocionado de tenerte a bordo, con los mejores precios y ofertas.</p>
          <p>Haz clic en el siguiente enlace para confirmar tu dirección de correo:</p>
          <a href="http://localhost:3000/login/confirmarInscripcion/${token}">Confirmar correo</a>
      </body>
      </html>
    `
  });
};

export {correoRegistro};
