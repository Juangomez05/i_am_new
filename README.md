<p align="center">
  <a href="https://laravel.com/" target="blank"><img src="https://laravel.com/img/logomark.min.svg" width="200" alt="Laravel Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Laravel</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Repositorio de inicio de TypeScript para el framework [Laravel](https://laravel.com/).

## Pruebas

```bash
# pruebas unitarias
$ php artisan test

# pruebas e2e
$ php artisan test:e2e

# cobertura de pruebas
$ php artisan test:cov

## Development

### Environment Variables

Create `.env` file,  use the `env.example` or copy this variables

```
```
# APP
CONTAINER_APP_NAME="i_am_new"
APP_PORT=8000

# DATABASE
DB_CONNECTION=pgsql
DB_HOST=pgsql
DB_PORT=3306
DB_DATABASE=iamnew
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

### Local

``` bash
# 1. Inicia el servidor de base de datos
$ docker compose up 

# 2. Instala PHP y Composer

# 3. Instala dependencias
$ composer install

# 4. Crea el archivo .env

# 5. Sincroniza la base de datos con el esquema de Eloquent
$ php artisan migrate

# 6. Ejecuta la aplicación
$ php artisan serve
```

## Deploy

```bash
# 1. Crea el archivo .env

# 2. Ejecuta los contenedores
$ docker compose up -d

# 3. Sincroniza el esquema de Eloquent con la base de datos
$ php artisan migrate
```

## Soporte

[Laravel](https://laravel.com/) es un proyecto de código abierto con licencia MIT. Puede crecer gracias a los patrocinadores y el apoyo de personas increíbles. Si deseas unirte, [lee más aquí](https://laravel.com/docs/contributions).

## Mantente en Contacto

- Autor - [Tu Nombre](https://tuperfil.com)
- Sitio web - [https://laravel.com](https://laravel.com/)
- Twitter - [@tuusuario](https://twitter.com/tuusuario)

## Licencia

Laravel está licenciado bajo [MIT](LICENSE).
