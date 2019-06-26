FROM nginx:stable

WORKDIR /usr/share/nginx/html

RUN apt-get update

RUN apt-get upgrade

RUN apt-get install -y curl software-properties-common

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get install -y git nodejs

RUN git clone https://github.com/bmdefreitas/desafio-front-end.git

RUN cd desafio-front-end && npm install && npm run build && cd .. && cp -r ./desafio-front-end/dist/* . && rm -rf desafio-front-end

RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
