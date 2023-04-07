FROM webdevops/php-nginx:8.2-alpine

ARG PROXY

ENV WEB_DOCUMENT_ROOT=/var/www/public
ENV PHP_DISPLAY_ERRORS=1
ENV PHP_MEMORY_LIMIT=2048M
ENV PHP_MAX_EXECUTION_TIME=-1

ENV DB_DATABASE=wifi
ENV DB_USERNAME=wifi
ENV DB_PASSWORD=qaz/8520*963.

WORKDIR /var/www/

RUN export http_proxy=${PROXY} \
    && export https_proxy=${PROXY} \
    && apk --no-cache add nodejs npm
