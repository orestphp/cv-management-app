# Nuxt - Laravel

## Technologies Used

   - FROM node:20.9.0-alpine
   - FROM mysql:8.0
   - FROM php:8.1.8-fpm-buster
   - FROM nginx:1.18-alpine
   - Nuxt2/Vue2
   - Laravel 9
   - xdebug 2

## Install

After 'git clone', inside repo:
```
$ make init
```
```
$ make up
```

NOTE: If you get "php artisan migrate" error, just do it manualy:
```
docker-compose exec app php artisan migrate:fresh --seed
```

### frontend
http://127.0.0.1:3000/

### api
http://localhost:8001/

### phpmyadmin
http://127.0.0.1:8081/
   - `user`
   - `password`

## Development

First user must be created via Tinker:
   - `docker exec -it cv-management2-app-1 php artisan tinker`
   - `$user = App\Models\User::where('email', 'admin@admin.com')->first();`
   - `$user->password = Hash::make('pass');`
   - `$user->save();`

NOTE: In this version 2, user can be created via Tinker only

## Command Glossary

   - `make down`
   - `make up`
   - `make dev`
   - `docker ps` - list all running containers
   - `docker exec -it <NAME> sh` - Enter container
   - `docker logs -f <container_id>` - see incomming logs for container


## Recently Updated to "v2"

📁 ./cv-management2
   2025-03-21 11:54:26.657380308 +0200  ./cv-management2/cookies.txt
   2025-03-21 22:37:59.985048243 +0200  ./cv-management2/docker-compose.yml
   2025-03-20 14:50:55.022623059 +0200  ./cv-management2/Makefile
   2025-03-21 02:43:14.461831129 +0200  ./cv-management2/README.md

📁 ./cv-management2/frontend/components/core
   2025-03-11 18:22:24.728996621 +0200  ./cv-management2/frontend/components/core/AppBar.vue
   2025-02-14 04:06:39.035906503 +0200  ./cv-management2/frontend/components/core/CoreDrawer.vue
   2025-02-09 18:02:53.979307136 +0200  ./cv-management2/frontend/components/core/CoreFooter.vue
   2025-02-09 18:02:53.979307136 +0200  ./cv-management2/frontend/components/core/CoreView.vue
   2025-02-09 18:02:53.979307136 +0200  ./cv-management2/frontend/components/core/Filter.vue

📁 ./cv-management2/frontend/components/material
   2025-02-09 18:02:53.979307136 +0200  ./cv-management2/frontend/components/material/Card.vue
   2025-02-09 18:02:53.979307136 +0200  ./cv-management2/frontend/components/material/ChartCard.vue
   2025-03-11 18:34:01.592732354 +0200  ./cv-management2/frontend/components/material/Dialog.vue
   2025-02-09 18:02:53.979307136 +0200  ./cv-management2/frontend/components/material/Notification.vue
   2025-02-09 18:02:53.979307136 +0200  ./cv-management2/frontend/components/material/StatsCard.vue

📁 ./cv-management2/frontend/store/app
   2025-02-09 18:02:53.983306988 +0200  ./cv-management2/frontend/store/app/getters.js
   2025-03-16 10:46:01.749339444 +0200  ./cv-management2/frontend/store/app/mutations.js
   2025-02-09 18:02:53.983306988 +0200  ./cv-management2/frontend/store/app/state.js

📁 ./cv-management2/api/resources/js
   2025-03-19 08:57:31.791808298 +0200  ./cv-management2/api/resources/js/app.js
   2025-02-09 18:02:53.975307284 +0200  ./cv-management2/api/resources/js/bootstrap.js

📁 ./cv-management2/api/tests/Feature
   2025-02-09 18:02:53.975307284 +0200  ./cv-management2/api/tests/Feature/ExampleTest.php
   2025-03-19 08:57:31.787808170 +0200  ./cv-management2/api/tests/Feature/ProfileTest.php

📁 ./cv-management2/api/app/Services
   2025-02-09 18:02:53.967307580 +0200  ./cv-management2/api/app/Services/BaseService.php
   2025-03-17 07:34:26.373539456 +0200  ./cv-management2/api/app/Services/EducationService.php
   2025-03-17 03:09:07.599756691 +0200  ./cv-management2/api/app/Services/WorkExperienceService.php

📁 ./cv-management2/api/app/Http/Requests
   2025-03-19 08:57:31.779807915 +0200  ./cv-management2/api/app/Http/Requests/ProfileUpdateRequest.php
   2025-02-09 18:02:53.963307728 +0200  ./cv-management2/api/app/Http/Requests/StoreCvRequest.php
   2025-02-09 18:02:53.963307728 +0200  ./cv-management2/api/app/Http/Requests/UpdateCvRequest.php

📁 ./cv-management2/api/routes
   2025-03-17 15:27:28.899229941 +0200  ./cv-management2/api/routes/api.php
   2025-02-09 18:02:53.975307284 +0200  ./cv-management2/api/routes/channels.php
   2025-02-09 18:02:53.975307284 +0200  ./cv-management2/api/routes/console.php
   2025-03-19 09:21:27.909927358 +0200  ./cv-management2/api/routes/web.php

📁 ./cv-management2/docker/mysql
   2025-03-08 18:52:10.427040592 +0200  ./cv-management2/docker/mysql/Dockerfile
   2025-02-15 12:23:28.670176083 +0200  ./cv-management2/docker/mysql/my.cnf

📁 ./cv-management2/docker/nginx
   2025-04-23 02:51:24.253302112 +0300  ./cv-management2/docker/nginx/default.conf
   2025-02-09 18:02:53.979307136 +0200  ./cv-management2/docker/nginx/Dockerfile

📁 ./cv-management2/docker/php
   2025-03-21 22:20:51.031162995 +0200  ./cv-management2/docker/php/Dockerfile
   2025-03-19 07:12:23.713909842 +0200  ./cv-management2/docker/php/php.ini


