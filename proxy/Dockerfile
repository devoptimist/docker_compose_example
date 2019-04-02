FROM nginx:alpine
ARG hname=www.example.com
ARG url_token=secret
ARG auth_user=user
ARG auth_pass=password
ARG web_app_port=8000

RUN apk add --update openssl apache2-utils && \
    rm -rf /var/cache/apk/*

RUN mkdir -p /etc/nginx/ssl/ && mkdir -p /etc/apache2

RUN openssl req -subj '/CN=$hname' -x509 -newkey rsa:4096 -nodes -keyout /etc/nginx/ssl/$hname.key -out /etc/nginx/ssl/$hname.cert -days 365
RUN htpasswd -b -c /etc/apache2/.htpasswd $auth_user $auth_pass

COPY nginx.conf /etc/nginx/nginx.conf
RUN  sed -i "s/DOCKER_HOSTNAME/$hname/g" /etc/nginx/nginx.conf
RUN  sed -i "s/DOCKER_URL_TOKEN/$url_token/g" /etc/nginx/nginx.conf
RUN  sed -i "s/DOCKER_WEB_APP_PORT/$web_app_port/g" /etc/nginx/nginx.conf
