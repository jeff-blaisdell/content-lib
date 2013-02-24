# Content Library
---
### Description
An example static web resource project to demonstrate the use of modern front-end development tools such as Grunt.js, LESS, and Require.js.
---
### Nginx Server
An nginx server may be used to proxy several node applications.  Follow these instrutions to proxy content-lib @ localhost:80/app/content
* Download nginx server.
* Set env variable "NGINX_HOME"
* Start content-lib - "node server.js --port=3000"
* Run server-start.bat under content-libg/config director.
* Navigate to localhost:80/app/content/js/jquery/1.9.1/jquery.js
* To stop nginx open command prompt and execute "nginx.exe -s stop"