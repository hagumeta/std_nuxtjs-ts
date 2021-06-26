#!/bin/bash

COMPOSER_MEMORY_LIMIT=-1 composer install
chmod -R 777 /var/www/html/storage
php artisan migrate --force
php artisan config:cache

a2enmod rewrite
/usr/bin/supervisord