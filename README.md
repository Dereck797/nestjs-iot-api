<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Teslo API

1. Clonar proyecto
2. ```yarn install```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker-compose up -d
```

6. Levantar: ```yarn start:dev```

7. Utilizar la siguiente url para crear un registro y su respectivo payload
```
localhost:3000/api/plants

{
    "uuid":"225b5412-6891-4ae8-979c-d9120dc1594b",
    "temperature": 10,
    "humidity": 10,
    "startTime": "2015-10-26T07:46:36.611Z", 
    "finalTime": "2015-10-26T07:46:36.611Z"
}
```

