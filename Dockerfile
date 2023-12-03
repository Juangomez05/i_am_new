# Utiliza la imagen oficial de PHP como imagen base
FROM php:7.4-apache

# Establece el directorio de trabajo en el contenedor
WORKDIR /var/www/html

# Instala dependencias
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip

# Instala extensiones de PHP
RUN docker-php-ext-install pdo pdo_mysql zip

# Habilita módulos de Apache
RUN a2enmod rewrite

# Copia el código de la aplicación al contenedor
COPY . .

# Establece los permisos correctos
RUN chown -R www-data:www-data storage bootstrap
