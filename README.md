Backbone Demo [![Backbone version](http://backbonejs.org/docs/images/backbone.png)](http://backbonejs.org/)
=====

<img src="http://backboneconf.com/img/backbone.png" alt="Backbone Demo" align="right" />
Backbone Demo is a small client side web application to demonstrate how to use backbone.js

There is a [working demo](http://barnesbrothers.homeserver.com/backbonedemo) of
the master branch.

#### Features

* Single Page Application.
* Built using backbone.js
* Uses AJAX to make all server requests.
* Utilizes a RESTful server side using [Slim Php](http://www.slimframework.com/).

#### Resources

Inspiration for this demo as well as some pieces of code were used from another backbone demo.

* [Backbone.js Wine Cellar Tutorial](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-1-getting-started/) by Christophe Coenraets

Installation
------------

The simplest way to install Backbone Demo is to clone the entire project to a web accessible directory on your webserver.

ex:
```bash
$ git clone git@github.com/DJBarnes:backbonedemo
```

Import the .sql file located in -------- to your mysql database

```bash
$ mysql < backbonedemo.sql
```

Change the database credentials in the api/index.php file so that the
application has access to the database:

```php
function getConnection() {
  $dbhost = "127.0.0.1";
  $dbuser = "username";
  $dbpass = "password";
  $dbname = "backbonedemo";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
  $dbh -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $dbh;
}
```
**Make sure that the ModRewrite module is on for your apache server,
otherwise the .htaccess file will not do it's job, and you will have
failed calls to the server for data.

Issues
------

This demo is in no way the defacto guide on how to use backbone.js, and
makes no attempt to be that. It does a great job of showing some of the
key features of the framework without using very many additional libraries.
Care has been taken to ensure that there are no zombie views and events
running around, however because this is very much a work in progress,
this demo is not perfect.

Development
-----------

* This is the current Documentation.
* Source hosted at [GitHub](https://github.com/DJBarnes/backbonedemo).

#### Author

[David Barnes](https://github.com/DJBarnes)
