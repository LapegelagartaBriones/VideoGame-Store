SET NAMES 'utf8mb4';
DROP DATABASE IF EXISTS enebo;

CREATE DATABASE IF NOT EXISTS enebo DEFAULT CHARACTER SET utf8mb4;

USE enebo;


CREATE TABLE roles(
	id_rol		INTEGER NOT NULL AUTO_INCREMENT,
    nombre		VARCHAR(40) NOT NULL,
    PRIMARY KEY(id_rol)
)DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE usuarios(
	id_usuario	 INTEGER NOT NULL AUTO_INCREMENT,
    username	 VARCHAR(40) NOT NULL UNIQUE,
    email		 VARCHAR(100) NOT NULL UNIQUE,
    password	 VARCHAR(100) NOT NULL UNIQUE,
    confirmado	 BOOLEAN DEFAULT FALSE,
    token		 VARCHAR(50) NOT NULL, 
    id_rol		 INTEGER NOT NULL,
    PRIMARY KEY(id_usuario),
    FOREIGN KEY(id_rol) REFERENCES roles(id_rol)
)DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE plataformas(
	id_plataforma INTEGER NOT NULL AUTO_INCREMENT,
    nombre		  VARCHAR(15) NOT NULL,
    PRIMARY KEY(id_plataforma)
)DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE juegos(
	id_juego INTEGER NOT NULL AUTO_INCREMENT,
    nombre	 VARCHAR(50) NOT NULL, 
    portada  VARCHAR(100) NOT NULL,
    id_plataforma INTEGER NOT NULL, 
	trailer		  VARCHAR(100) NOT NULL,
    descripcion	  VARCHAR(2000) NOT NULL,
    precio		  VARCHAR(20) NOT NULL,
    PRIMARY KEY(id_juego),
    FOREIGN KEY(id_plataforma) REFERENCES plataformas(id_plataforma)
)DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE carrito(
	id_carrito INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    PRIMARY KEY(id_carrito)
)DEFAULT CHARACTER SET UTF8MB4;


CREATE TABLE juegosCarrito(
	id_juegosCarrito INTEGER NOT NULL AUTO_INCREMENT,
    id_juego INTEGER NOT NULL,
    id_carrito INTEGER NOT NULL,
    PRIMARY KEY(id_juegosCarrito),
    FOREIGN KEY(id_juego)REFERENCES juegos(id_juego),
    FOREIGN KEY(id_carrito)REFERENCES carrito(id_carrito)
)DEFAULT CHARACTER SET UTF8MB4;


CREATE TABLE usuarioCarrito(
	id_usuarioCarrito		INTEGER NOT NULL AUTO_INCREMENT,
    id_usuario				INTEGER NOT NULL,
    id_carrito				INTEGER NOT NULL,
    PRIMARY KEY(id_usuarioCarrito),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY(id_carrito) REFERENCES carrito(id_carrito)
)DEFAULT CHARACTER SET UTF8MB4;



INSERT INTO roles(nombre) VALUES('administrador');
INSERT INTO roles(nombre) VALUES('cliente');
INSERT INTO plataformas(nombre) VALUES('PLAYSTATION');
INSERT INTO plataformas(nombre) VALUES('XBOX');
INSERT INTO plataformas(nombre) VALUES('NINTENDO');
INSERT INTO carrito(nombre)VALUES('ALPHA');
INSERT INTO carrito(nombre)VALUES('BETHA');
INSERT INTO carrito(nombre)VALUES('DESEOS');

INSERT INTO usuarios(username, email, password, confirmado, token, id_rol)VALUES('lilagart','eneboAdmin@gmail.com','admin','1','1','1');

INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('Horizon: Forbidden West', 'http://localhost:3000/img/images_productos/PLAYSTATION/HorizonForbiddenWest_playstation.jpg','1','https://www.youtube.com/embed/rw-TJfL-w2g?si=arfKt29dwh7pofS9','Únete a Aloy mientras desafía el Oeste Prohibido, una frontera majestuosa, aunque peligrosa, en la que se ocultan nuevas y misteriosas amenazas. Explora tierras remotas, enfréntate a máquinas más grandes e imponentes y descubre increíbles tribus en tu regreso a un futuro lejano en el mundo apocalíptico de Horizon. La tierra se muere. Las rugientes tormentas y una desolación imparable causan estragos entre lo que queda de la humanidad, unas cuantas tribus dispersas, mientras nuevas y temibles máquinas merodean por sus fronteras. La vida en la Tierra se enfrenta a una nueva extinción y nadie sabe por qué. Solo Aloy es capaz de descubrir los secretos que hay detrás de estas amenazas, y restablecer el orden y el equilibrio en el mundo. Por el camino, se reunirá con viejos amigos, forjará alianzas con nuevas facciones en guerra y descubrirá la herencia de un antiguo pasado, mientras que intenta permanecer un paso por delante de un nuevo y aparentemente invencible enemigo.','1020.88');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('Elden Ring', 'http://localhost:3000/img/images_productos/PLAYSTATION/EldenRing_PLAYSTATION.jpg','1','https://www.youtube.com/embed/E3Huy2cdih0?si=SR2J1khwgi-BRqJ_','Blande el poder del Anillo Elden y conviértete en un Señor Elden en las Tierras Entremedias.  La Orden Dorada ha sido rota.  En las Tierras Entremedias gobernadas por la Reina Marika la Eterna, el Anillo Elden, la fuente del Árbol Erd, ha sido destrozado. Los descendientes de Marika, todos semidioses, reclamaron los fragmentos del Anillo de Elden conocidos como las Grandes Runas, y la mancha de locura de su nueva fuerza desencadenó una guerra: La Devastación. Una guerra que significó el abandono por parte de la Gran Voluntad. Y ahora la guía de la gracia será traída a los Deslucidos que fueron rechazados por la gracia del oro y exiliados de las Tierras Intermedias. Vosotros, los muertos que aún vivís, cuya gracia se perdió hace mucho tiempo, seguid el camino hacia las Tierras Intermedias, más allá del mar brumoso, para pararos ante el Anillo de Elden. Y conviértete en el Señor Elden.','1225.05');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('Ratchet & Clank: Una dimensión aparte', 'http://localhost:3000/img/images_productos/PLAYSTATION/Ratchet&Clank_PLAYSTATION.jpg','1','https://www.youtube.com/embed/zzEx0vmlURg?si=rMawfJF_KGm2lxdi','Ábrete paso en una aventura interdimensional. Salta de una dimensión a otra con Ratchet y Clank para derrotar a un emperador malvado de otra realidad. Explora a toda velocidad una variedad de mundos llenos de acción, gráficos alucinantes y un arsenal demencial, con la llegada explosiva de los aventureros intergalácticos a la consola PS5.','1429.23');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('The Last Of Us Part II', 'http://localhost:3000/img/images_productos/PLAYSTATION/TheLastOfUsPII_PLAYSTATION.jpg','1','https://www.youtube.com/embed/cvnmQdGetZE?si=bs6fSZg0VTrEm5MJ','Enfrenta las devastadoras repercusiones físicas y emocionales de las acciones de Ellie. Cinco años después de su peligroso viaje a través de unos Estados Unidos pospandemia, Ellie y Joel logran establecerse en Jackson, Wyoming. Vivir entre una próspera comunidad de sobrevivientes les ha concedido paz y estabilidad, a pesar de la amenaza constante de los infectados y de otros sobrevivientes más desesperados. Cuando un evento violento interrumpe esa paz, Ellie se embarca en un viaje incesante para obtener justicia y llegar a un cierre. A medida que caza a los responsables uno por uno, deberá enfrentarse a las devastadoras repercusiones físicas y emocionales de sus acciones.','990.00');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('HADES', 'http://localhost:3000/img/images_productos/PLAYSTATION/Hades_PLAYSTATION.jpg','1','https://www.youtube.com/embed/RXq0yBmfiC8?si=b9weCPG-0EO8NTs','Desafía al dios de los muertos y escapa del inframundo. Hades, ganador de más de 50 premios de juego del año, es un juego de mazmorras rogue-like hack and slash, ahora disponible por primera vez en PlayStation. Empuña los poderes y las armas míticas del Olimpo para liberarte de las garras del mismo dios de los muertos, al mismo tiempo que te haces más poderoso y desvelas más la historia con cada intento único de fuga. Ayudado por su familia ampliada, que incluye a Zeus, Atenea y otros dioses del Olimpo, los esfuerzos de Zagreo se ven impulsados con potenciaciones temporales (conocidas como bendiciones) que se pueden seleccionar de acuerdo a tu estilo de juego y mejoras permanentes que se pueden conseguir durante cada recorrido. Hades combina los mejores aspectos de los títulos aclamados de Supergiant, incluida la acción trepidante de Bastion, la rica atmósfera y la profundidad de Transistor y la narrativa impulsada por personajes de Pyre.','255.02');


INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('Cuphead', 'http://localhost:3000/img/images_productos/XBOX/CupHead_XBOX.jpg','2','https://www.youtube.com/embed/X9Qv0awym7A?si=mkPkgDz8JI-DU7_y','Cuphead es un juego de acción clásico estilo "dispara y corre" que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30, los aspectos  visual y sonoro están diseñados con esmero empleando las mismas técnicas de la época, es decir, animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz. Juega como Cuphead o Mugman (en modo de un jugador o cooperativo) y cruza mundos extraños, adquiere nuevas armas, aprende poderosos supermovimientos y descubre secretos ocultos mientras procuras saldar tu deuda con el diablo.','283.38');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('NieR:Automata BECOME AS GODS Edition', 'http://localhost:3000/img/images_productos/XBOX/NierAutomata_XBOX.jpg','2','https://www.youtube.com/embed/Rx3v171IWyQ?si=w3q-3TJqX6VFC7AG','Unos invasores de otro mundo han atacado inesperadamente desplegando unas formas de vida mecánicas. A fin de obtener una ventaja decisiva, los humanos envían a luchar una nueva unidad de infantería androide denominada YoRHa. NieR:Automata™, que ha recibido múltiples premios y críticas muy positivas, es un nuevo proyecto en el género de los videojuegos de rol que combina a la perfección una acción y una historia fascinantes. NieR:Automata™ BECOME AS GODS Edition incluye el impactante contenido descargable 3C3C1D119440927*, que contiene los atuendos "Traje sugerente" para 2B, "Traje de muchacho" para 9S y "Traje destructor" para A2. Después de completar las nuevas misiones secundarias de este paquete, podrás disfrutar del juego vistiendo estos atuendos de NieR Replicant. Las misiones secundarias consisten en tres desafíos de combate diferentes en tres localizaciones distintas. Este escenario también incluye una pista de música especial, "Deserving of Life", fruto de la colaboración de NieR:Automata con el grupo de rock amazarashi.','304.40');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('Ori and the Will of the Wisps', 'http://localhost:3000/img/images_productos/XBOX/Ori_XBOX.jpg','2','https://www.youtube.com/embed/iDVmEE0Fl5M?si=JJjglTdcCiv_blG_','Descubre el verdadero destino de Ori Sumérgete en una aventura a través de un gran y exótico mundo en el que encontrarás imponentes enemigos y desafiantes acertijos a lo largo de tu aventura, en esta secuela que debes jugar sí o sí completamente optimizada para la Xbox Series X y Xbox Series S. Ori, el pequeño espíritu, no es ajeno al peligro, pero cuando un vuelo fatídico pone en riesgo el camino del Ku la lechuza, se requerirá mucho más que solo valentía para reunir nuevamente a su familia, restaurar un territorio desolado y descubrir su verdadero destino. De los creadores del aclamado juego de acción de plataformas Ori and the Blind Forest llega una aventura en un mundo repleto de amigos y enemigos que cobran vida en ilustraciones impresionantes creadas a mano. Sumérgete en una banda sonora original completamente orquestada, Ori and the Will of the Wisps continúa con el legado de Moon Studios de acción de plataformas rigurosamente diseñada además de una narrativa profundamente emotiva.','263.67');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('Red Dead Redemption 2', 'http://localhost:3000/img/images_productos/XBOX/RDRII_XBOX.jpg','2','https://www.youtube.com/embed/rQJa3fLGgdE?si=ZarRodiMeCzbW_mb','Estados Unidos, 1899. El fin del salvaje oeste ha comenzado a medida que los hombres de la ley cazan las últimas bandas de criminales. Los que no se rindan o cedan, morirán. Después de que un atraco en el pueblo de Blackwater sale muy mal, Arthur Morgan y la banda Van der Linde se ven obligados a huirse. Con agentes federales y los mejores cazarrecompensas persiguiéndolos, la banda debe robar, atracar y luchar por el duro corazón de Estados Unidos para sobrevivir. Mientras las cada vez más profundas grietas internas amenazan a destruir la banda, Arthur debe elegir entre sus propios ideales y su lealtad a la banda que lo crió. Red Dead Redemption 2, desarrollado por los creadores de Grand Theft Auto V y Red Dead Redemption, es una historia épica sobre la vida en Estados Unidos en el despertar de la época moderna.','494.67');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('Sekiro Shadow Die Twice', 'http://localhost:3000/img/images_productos/XBOX/Sekiro_XBOX.jpg','2','https://www.youtube.com/embed/GxM6-hPj0jE?si=ligm5o9u51zTeKA4','Forja tu propio camino en busca de venganza en la aventura aclamada por la crítica, del desarrollador From Software, creadores de la serie Dark Souls.  En Sekiro™: Shadows Die Twice encarnas al "lobo manco", un guerrero desfigurado y caído en desgracia que ha sido rescatado al borde de la muerte. Tras jurar proteger a un joven señor descendiente de un antiguo linaje, te conviertes en el objetivo de despiadados enemigos, entre ellos el peligroso clan Ashina. Cuando el joven señor es capturado, nada te detendrá en tu peligrosa aventura por restituir tu honor, ni siquiera la muerte.  Explora el Japón de la era Sengoku de finales del siglo XVI, un brutal periodo de constante conflicto, mientras te enfrentas a inconmensurables enemigos en un mundo oscuro y tortuoso. Despliega un arsenal de instrumentos protésicos letales y poderosas habilidades ninja, al mismo tiempo que combinas el sigilo, la verticalidad y transversalidad, y los viscerales combates cara a cara en una sangrienta confrontación. Véngate. Restituye tu honor. Mata con ingenio.','650.00');


INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('The Legend of Zelda: Breath of the Wild', 'http://localhost:3000/img/images_productos/NINTENDO/ZeldaBreathWild_NINTENDO.jpeg','3','https://www.youtube.com/embed/ofH5ptn5w-A?si=wovFDlr7MAKp3opf','Olvida todo lo que sabes acerca de los juegos de la serie The Legend of Zelda. Explora y descubre un mundo lleno de aventuras en The Legend of Zelda: Breath of the Wild, una nueva saga que rompe los esquemas de la aclamada serie. Viaja a través de praderas y bosques, y alcanza cimas de montañas mientras descubres cómo cayó en la ruina el reino de Hyrule en esta emocionante aventura al aire libre. Ahora con Nintendo Switch, tu aventura será más libre y extensa que nunca. Lleva tu consola y vive una gran aventura como Link de la manera que más te guste.','1199.00');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('The Legend of Zelda: Tears of the Kingdom ', 'http://localhost:3000/img/images_productos/NINTENDO/ZeldaTearsOfTheKingdom_NINTENDO.jpg','3','https://www.youtube.com/embed/sjxLF4IYnJc?si=mzdNpxDDFd9FgQ0n','Explora la vasta superficie y los cielos de Hyrule Una épica aventura a través de la superficie y los cielos de Hyrule te espera en The Legend of Zelda™: Tears of the Kingdom, disponible exclusivamente para la consola Nintendo Switch™. En esta secuela del juego The Legend of Zelda: Breath of the Wild, decidirás tu propio camino a través de los extensos paisajes de Hyrule y las islas que flotan en los vastos cielos. ¿Podrás aprovechar el poder de las nuevas habilidades de Link para luchar contra las malévolas fuerzas que amenazan al reino?','1007.28');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('Kirby y la Tierra Olvidada', 'http://localhost:3000/img/images_productos/NINTENDO/KirbyLaTierraOlvidada_NINTENDO.jpg','3','https://www.youtube.com/embed/ZKNYy6IOUSE?si=jzTnV9q9SjpwQ7lX','¡Una aventura en 3D que te dejará con la boca abierta! Explora un nuevo mundo misterioso en solitario o en compañía de otra persona, descubre nuevas habilidades de copia y enfréntate a todo tipo de bestias en Kirby y la tierra olvidada para Nintendo Switch.','851.30');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('Animal Crossing: New Horizons', 'http://localhost:3000/img/images_productos/NINTENDO/AnimalCrossingNewHorizons_NINTENDO.jpg','3','https://www.youtube.com/embed/5YPxiTLMcdg?si=lD5tUBGjcN4I_YJS','Escapa a tu propia isla paradisiaca Escapa a una isla desierta y crea tu propio paraíso mientras exploras, creas y personalizas en el juego Animal Crossing: New Horizons. Tu isla cuenta con riquezas naturales que podrás utilizar para construir de todo, desde herramientas hasta objetos que harán tu vida más placentera. Podrás cazar insectos al amanecer, decorar tu pequeño paraíso durante el día o disfrutar del atardecer en la playa mientras pescas en el océano. La hora del día y la estación coinciden con las de la vida real, así que cada día en la isla es una oportunidad para encontrar y descubrir sorpresas. Muestra tu isla a tu familia y amigos, o empaca tus cosas y visita la de ellos. Ya sea que juegues en línea* o con otros a tu lado**, la vida isleña es mucho mejor cuando la puedes compartir. Sin necesidad de subirte a un avión podrás conocer a un elenco de encantadores residentes llenos de personalidad. Algunas caras conocidas como Tom Nook y Canela brindarán sus servicios y con todo gusto te ayudarán a construir tu comunidad. Date una escapada a tu isla… como quieras, cuando quieras y donde quieras.','1199.00');
INSERT INTO juegos(nombre, portada, id_plataforma, trailer, descripcion, precio) VALUES('Luigis Mansion 3', 'http://localhost:3000/img/images_productos/NINTENDO/LuigisMansion3_NINTENDO.jpg','3','https://www.youtube.com/embed/T9s0hLDUCu8?si=XFkYeDguBjIBzCj5','El hotel está encantado. Mario está desaparecido. Y la única esperanza es… ¿¡Luigi?! Luigi ha sido invitado al hotel El Gran Descanso Real, ¡pero cuando Mario y sus amigos desaparecen, nuestro héroe de verde tendrá que superar sus miedos para poder salvarlos! Ataca, sopla y aspira a los fantasmas con la nueva Succionaentes GO-1000 y trabaja en conjunto con Gomiluigi para superar los complicados artilugios y traviesos jefes de cada piso temático. Entra a la Torre del Horror y forma equipo con 8 jugadores para juego cooperativo en modo local* o en línea**. Intenta derrotar a todos los fantasmas, rescatar a todos los toads y cumplir con los objetivos antes de que se acabe el tiempo… ¡en la Torre del Horror! Y para más locura de minijuegos compite en equipos en el Parque de Conmociones. Ya sea que explores el hotel con amigos o en solitario, serás absorbido por la música de ambiente y la espantosa decoración de cada espeluznante esquina que explores. ¿Por qué no disfrutar de los panoramas y sonidos cinematográficos con un amigo? En la aventura principal, tú y un amigo podrán disfrutar juntos como Luigi y Gomiluigi en un juego cooperativo para dos. Gomiluigi puede caminar sobre picos, cruzar por lugares pequeños y puede ayudar a Luigi a superar los obstáculos que por sí solo no podría superar. No está de más tener a un amigo en este hotel; tal vez no sea tan tenebroso, ¡pero Luigi no piensa lo mismo!','1199.00');

