express-mongoose-mvc
====================

This is a template of Web application, developed using MVC pattern with [Node.js](http://nodejs.org), [ExpressJS](http://expressjs.com), and [Mongoose ODM](http://mongoosejs.com). This repository is used as a basic template so that you can use it to get started fast. Just clone this repo, and start coding. The explanation and documentation will be written directly in source code. If you want, you may also use this as a template to create your own framework.

Todos
-----
* More docs 
* Tests

Run
---

* Configure and populate data (mongoDB):

If you don't use **systemd**:

~~~
$ mkdir data
$ ls -la
total ..
drwxr-xr-x 4 bpdp users  4096 Dec 15 11:00 .
drwxr-xr-x 8 bpdp users  4096 Dec 13 21:31 ..
...
...
...
drwxr-xr-x 2 bpdp users  4096 Dec 12 08:05 data
...
...
...
$ mongod --dbpath ./data --rest
~~~

If you use **systemd**:

~~~
[root@bpdp-arch ~]# systemctl start mongodb
[root@bpdp-arch ~]# systemctl status mongodb
mongodb.service - High-performance, schema-free document-oriented database
   Loaded: loaded (/usr/lib/systemd/system/mongodb.service; disabled)
   Active: active (running) since Fri 2013-05-17 07:27:45 WIT; 4s ago
 Main PID: 1634 (mongod)
   CGroup: name=systemd:/system/mongodb.service
           └─1634 /usr/bin/mongod --quiet --config /etc/mongodb.conf

May 17 07:27:45 bpdp-arch systemd[1]: Started High-performance, schema-free document-oriented database.
May 17 07:27:45 bpdp-arch mongod[1634]: Fri May 17 07:27:45.375
May 17 07:27:45 bpdp-arch mongod[1634]: Fri May 17 07:27:45.375 warning: 32-bit servers don't have journaling enabled by default. Please use --journal if y...urability.
May 17 07:27:45 bpdp-arch mongod[1634]: Fri May 17 07:27:45.375
May 17 07:27:45 bpdp-arch mongod[1634]: all output going to: /var/log/mongodb/mongod.log
[root@bpdp-arch ~]# cat /etc/mongodb.conf 
# See http://www.mongodb.org/display/DOCS/File+Based+Configuration for format details
# Run mongod --help to see a list of options

bind_ip = 127.0.0.1
quiet = true
dbpath = /var/lib/mongodb
logpath = /var/log/mongodb/mongod.log
logappend = true
[root@bpdp-arch ~]# 
~~~

* Activate mongoDB client and do some commands to create db and its data:

Now, to populate some fake data example, you may use **populate.js**:

~~~
$ mongo localhost:27017/mydb populate.js
~~~

or, if you think you are some kind of super duper creature and prefer to use manual way, follow these steps:

~~~
$ mongo
MongoDB shell version: 2.4.4-pre
connecting to: test
> db
test
> use mydb
switched to db mydb
> show dbs
local	(empty)
> emp1 = { name : "Zaky", address : "Griya Purwa Asri" }
{ "name" : "Zaky", "address" : "Griya Purwa Asri" }
> emp2 = { name : "Ahmad", address : "Purwomartani", email : "zakyahmadaditya@gmail.com" }
{
	"name" : "Ahmad",
	"address" : "Purwomartani",
	"email" : "zakyahmadaditya@gmail.com"
}
> emp3 = { name : "Aditya", address : "Kalasan", phone: "08787878787" }
{ "name" : "Aditya", "address" : "Kalasan", "phone" : "08787878787" }
> db.employees.insert( emp1 )
> db.employees.insert( emp2 )
> db.employees.insert( emp3 )
> show dbs
local	(empty)
mydb	0.0625GB
> db
mydb
> show collections
employees
system.indexes
> db.employees.find()
{ "_id" : ObjectId("50c74b63a7f83cba11e6b21e"), "name" : "Zaky", "address" : 
	"Griya Purwa Asri" }
{ "_id" : ObjectId("50c74b6da7f83cba11e6b21f"), "name" : "Ahmad", "address" : 
	"Purwomartani", "email" : "zakyahmadaditya@gmail.com" }
{ "_id" : ObjectId("50c74b79a7f83cba11e6b220"), "name" : "Aditya", "address" : 
	"Kalasan", "phone" : "08787878787" }
> db.employees.find( {name : "Ahmad"} )
{ "_id" : ObjectId("50c74b6da7f83cba11e6b21f"), "name" : "Ahmad", "address" : 
	"Purwomartani", "email" : "zakyahmadaditya@gmail.com" }
> db.employees.findOne()
{
	"_id" : ObjectId("50c74b63a7f83cba11e6b21e"),
	"name" : "Zaky",
	"address" : "Griya Purwa Asri"
}
> db.employees.find().limit(2)
{ "_id" : ObjectId("50c74b63a7f83cba11e6b21e"), "name" : "Zaky", "address" : 
	"Griya Purwa Asri" }
{ "_id" : ObjectId("50c74b6da7f83cba11e6b21f"), "name" : "Ahmad", "address" : 
	"Purwomartani", "email" : "zakyahmadaditya@gmail.com" }
> 
~~~

See the Schema in models/db.js and also mongoDB docs. This is only an example of my own fake data.

* Install needed Node.js modules

~~~
$ npm install
~~~

Note: 
Node-gyp need Python 2, not Python 3. If you happen to get errors
because of this, please adjust your Python installation

* execute server:

~~~
$ node app.js
~~~

* Results:
	* http://localhost:3000/ => the same as vanilla ExpressJS app
	* http://localhost:3000/employees => list of employees (currently in JSON
format)

Author
------

* Bambang Purnomosidi D. P. [web](http://bpdp.name), [twitter](http://twitter.com/#!/bpdp), [Facebook](http://www.facebook.com/bambangpdp).

History
-------

See [CHANGELOGS.md](CHANGELOGS.md) for more information.


License
-------

~~~
The MIT License (MIT)
Copyright (c) 2013, Bambang Purnomosidi D. P.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
~~~
