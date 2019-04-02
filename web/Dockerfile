FROM mhart/alpine-node
ARG web_app_port=8000
ARG url_token=secret
  
RUN mkdir -p /app && mkdir -p /app/public

ADD package.json /app/package.json 
ADD server.js /app/server.js
RUN sed -i "s/DOCKER_WEB_APP_PORT/$web_app_port/g" /app/server.js
RUN sed -i "s/DOCKER_URL_TOKEN/$url_token/g" /app/server.js
RUN cd /app && npm install

CMD ["node", "/app/server.js"]
