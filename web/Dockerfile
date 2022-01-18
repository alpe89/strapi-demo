FROM node:16.13.2-alpine as build-step
WORKDIR /web

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:stable-alpine

COPY --from=build-step /web/dist /usr/share/nginx/html
COPY --from=build-step /web/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]