ueries


About MySQL

MySQL is an open source database management software that helps users store, organize, and retrieve data. It is a very powerful program with a lot of flexibility—this tutorial will provide the simplest introduction to MySQL

How to Install MySQL on Ubuntu and CentOS If you don't have MySQL installed on your droplet, you can quickly download it.

Ubuntu:

sudo apt-get install mysql-server

How to Access the MySQL shell Once you have MySQL installed on your droplet, you can access the MySQL shell by typing the following command into terminal:

mysql -u root -p

After entering the root MySQL password into the prompt (not to be confused with the root droplet password), you will be able to start building your MySQL database.

Two points to keep in mind:

All MySQL commands end with a semicolon; if the phrase does not end with a semicolon, the command will not execute.

Also, although it is not required, MySQL commands are usually written in uppercase and databases, tables, usernames, or text are in lowercase to make them easier to distinguish. However, the MySQL command line is not case sensitive. (source: https://www.digitalocean.com/community/tutorials/a-basic-mysql-tutorial)

What you should learn from this project

At the end of this project you are expected to be able to explain to anyone, without the help of Google:
How to create a new MySQL user
How to manage privileges for a user to a database or table
What’s a PRIMARY KEY
What’s a FOREIGN KEY
How to use NOT NULL and UNIQUE constraints
How to retrieve datas from multiple tables in one request
What are subqueries
What are JOIN and UNION


Exercises

0. My privileges!

Write a script that lists all privileges of the MySQL users user_0d_1 and user_0d_2 on your server.
1. Root user

Write a script that create
