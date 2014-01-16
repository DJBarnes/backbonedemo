Backbone Demo
=============

<img src="http://backboneconf.com/img/backbone.png" alt="Backbone Demo" align="right" />
Backbone Demo is a small client side web application to demonstrate how to use backbone.js

A [working demo](http://barnesbrothers.homeserver.com/backbonedemo) of
the master branch is available.

#### Features

* Single Page Application.
* Built using backbone.js
* Uses AJAX to make all server requests.
* Utilizes a RESTful server side using [Slim Php](http://www.slimframework.com/).

#### Resources

Inspiration for this demo as well as some pieces of code were used from another backbone demo.

* [Backbone.js Wine Cellar Tutorial](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-1-getting-started/) by Christophe Coenraets

Branches
--------
Each branch sets a milestone for the project. Because of this design, it
is possible to switch the branch on github, and download the project at
any specific point in time as it was developed. It is also possible to
do a comparision between branches on github to see what changed from one
branch to the next. Below is a description of each branch.

#### Part1Html

[Part1Html](https://github.com/DJBarnes/backbonedemo/tree/part1html) is the core starting point of the application. The basic
file structure of the project is setup, as well as some boilerplate for
project. For everyone who wants to build this app from the ground up,
part 1 is as go a place to start as any.

#### Part2Util

[Part2Util](https://github.com/DJBarnes/backbonedemo/tree/part2util) adds a utility class that is borrowed from Christophe
Coenraets, and his [Backbone.js Wine Cellar Tutorial](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-1-getting-started/). The main purpose of the util.js file is to allow the loading of the templates that will be used to insert dynamic content into the DOM.

#### Part3Header

[Part3Header](https://github.com/DJBarnes/backbonedemo/tree/part3header) adds some backbone views, and a backbone router. It
demonstrates the process of retriving a template, adding it to a view,
and then rendering the view into the DOM. Although there is no data
coming from the server side as of yet, understanding what is going on
with how the router handles routes, and how the view gets created, and
inserted into the DOM is a key concept that should be understood before
moving on to the next part where data is added.

#### Part4Data

[Part4Data](https://github.com/DJBarnes/backbonedemo/tree/part4data) fills out the getData function in the main.js. It has two
parts to it. The first is using jQuery to fetch data from the server,
and then diplaying it inside the content area of the page as raw JSON.
The second part requires you to comment out the entire getData function
in main.js, and uncomment the currently commented parts of main.js.
Essentially you will be adding some lines to the list function, and
replacing the uncommented portion of the getData function with the
commented portion. Making these changes will not change the output, but
will take advantage of the Backbone models, collections, and fetch
method.

#### Part5Table

[Part5Table](https://github.com/DJBarnes/backbonedemo/tree/part5table) Makes two new views that are used to turn the data
portion into something nice to read. It will take the raw JSON data, and
use a template, along with the two new views to put the data into a nice
table in the content area.

#### Part6Edit

[Part6Edit](https://github.com/DJBarnes/backbonedemo/tree/part6edit) adds the ability to edit the information for a specific
item in the list. It does not however allow the user to update the
changes they make. It only adds an editable view that will be used to
allow updating. There is some restructuring that occurs in the app to
ensure that the animation works properly, as well as make sure that
there are no zombie views left over. Take care when working through this
part to note all of the changes in all of the files that may change.

#### Part7Update

[Part7Update](https://github.com/DJBarnes/backbonedemo/tree/part7update) finishes the edit and update functionality by allowing
the user to save the changes that they make to an item.

Installation
------------

The simplest way to install Backbone Demo is to clone the entire project to a web accessible directory on your webserver, or select the branch you would like to start at, and use the download as zip option to get the project at that stage.

```bash
$ git clone git@github.com:DJBarnes/backbonedemo
```

Import the .sql file located in the api directory of the master branch to your mysql database

```bash
$ mysql < pathToSql/backbonedemo.sql
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
