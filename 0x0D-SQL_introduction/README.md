command
9. Full creation

Write a script that creates a table second_table in the database hbtn_0c_0 in your
MySQL server and add multiples rows.
second_table description:
id INT
name VARCHAR(256)
score INT
The database name will be passed as an argument to the mysql command
If the table second_table already exists, your script should not fail
You are not allowed to use the SELECT and SHOW statements
Your script should create these records:
id = 1, name = “John”, score = 10
id = 2, name = “Alex”, score = 3
id = 3, name = “Bob”, score = 14
id = 4, name = “George”, score = 8
10. List by best

Write a script that lists all records of the table second_table of the database
hbtn_0c_0 in your MySQL server.
Results should display both the score and the name (in this order)
Records should be ordered by score (top first)
The database name will be passed as an argument of the mysql command
11. Select the best

Write a script that lists all records with a score >= 10 in the table second_table
of the database hbtn_0c_0 in your MySQL server.
Results should display both the score and the name (in this order)
Records should be ordered by score (top first)
The database name will be passed as an argument of the mysql command
12. Cheating is bad

Write a script that updates the score of Bob to 10 in the table second_table.
You are not allowed to use Bob’s id value, only the name field
The database name will be passed as an argument of the mysql command
13. Score too low

Write a script that removes all records with a score <= 5 in the table second_table
of the database hbtn_0c_0 in your MySQL server.
The database name will be passed as an argument of the mysql command
14. Average

Write a script that computes the score average of all records in the table
second_table of the database hbtn_0c_0 in your MySQL server.
The result column name should be average
The database name will be passed as an argument of the mysql command
15. Number by score

Write a script that lists the number of records with the same score in the table
second_table of the database hbtn_0c_0 in your MySQL server.
The result should display:
the score
the number of records for this score with the label number
The list should be sorted by the number of records (descending)
The database name will be passed as an argument to the mysql command
16. Say my name

Write a script that lists all records of the table second_table of the database
hbtn_0c_0 in your MySQL server.
Don’t list rows without a name value
Results should display the score and the name (in this order)
Records should be listed by descending score
The database name will be passed as an argument to the mysql command In this example, new data have been added to the table second_table
