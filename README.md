# Content Library
---
### Description
An example static web resource project to demonstrate the use of modern front-end development tools such as Grunt.js, LESS, and Require.js.
Used in conjunction with product-designer.
---
### Node Supervisor
For quicker development install node-supervisor.  It will monitor server-side javascript and auto reload.
npm install -g supervisor
### Nginx Server
An nginx server may be used to proxy several node applications.  Follow these instrutions to proxy content-lib @ localhost:80/app/content
## Manually Startup
* Download nginx server.
* Run following commands:
	* CD to root of content-lib
		* node app.js OR supervisor app.js
	* CD to root of product-designer
		* node app.js OR supervisor app.js		
	* CD to root of nginx install.
		* nginx -c [dir containing nginx.conf]
			* content-lib/config/nginx/nginx.conf
	* Browse to http:\\localhost:80\app\product
## Window Script Based Startup.
* locate conf files located in content-lib/config/nginx
* Alter run.properties to reflect paths for your machine.
* Run start.bat
* To kill run stop.bat
* Prereqs: nginx install and node-supervisor
