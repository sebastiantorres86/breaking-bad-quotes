# API'S, REST API'S Y REQUEST

## API'S

- API = Application Programing Interface
- Funciones, métodos que ofrece una librería para ser utilizada por otro software.
- Web Service es cuando podemos conectarnos a un servicio vía web.
- Para acceder al servicio hay que enviar una petición estructurada.
- Usaualmente se utiliza JSON.
- Ejemmplo: Google Maps API

## REST API'S

- REST = Representational State Transfer
- Puede ser diseñada en cualquier lenguaje
- REST describe como deben ponerse a disposición los recursos.
- La API debe responder a los Request de HTTP: GET, POST, PUT, PATCH, DELETE.
- Cada API tiene sus propias reglas, métodos, estructuras.

## REST API, ENDPOINTS Y REQUEST

- Una REST API cuanta con Endpoints (o Urls) para hacer operaciones CRUD
- Listar todos los clientes GET /clientes
- Obtener un solo cliente GET /clientes/10
- Crear un nuevo cliente POST /clientes
- Editar un cliente PUT /clientes/3
- Borrar un cliente DELETE /clientes/8

## CONSULTAR API'S CON REACT

Las 3 formas más comunes de consultar API's con React son:

- Fetch API y Ajax (nativo de JavaScript)
- Axios
- jQuery Ajax
