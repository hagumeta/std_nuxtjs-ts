FROM php:7.4-apache

#PHP settings
RUN apt-get update \
    && apt-get install -y git \
                            vim \
                            zip \
                            unzip \
                            libzip-dev \
                            libxml2-dev \
                            libonig-dev \
                            supervisor \
                            busybox-static \
    && docker-php-ext-configure zip \
    && docker-php-ext-install pdo_mysql \
                                mbstring \
                                zip \
                                xml \
    && mv /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled \
    && pecl install stats-2.0.3 \
    && docker-php-ext-enable stats \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

#composer install
RUN curl -sS https://getcomposer.org/installer \
    | php \
    && mv composer.phar /usr/local/bin/composer

#set ENV
ENV TZ='Asia/Tokyo'

#set supservisor
RUN mkdir -p /var/log/supervisor

#set entrypoint
EXPOSE 80
COPY entrypoint.sh /bin/entrypoint.sh
ENTRYPOINT [ "/bin/entrypoint.sh" ]