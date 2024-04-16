# Database

## Class Recording

1. [Database class 1](https://youtu.be/dwVAs2ysdM4)

## What is a database?

- Learning objectives
1.  understand the ACID properties of database.
2.  unserstand the difference between relational and non-relational database.


A database is a structured collection of data that is organized in such a way that it can be easily accessed, managed, and updated. It acts as a centralized repository for storing and retrieving information. Databases are used in a wide range of applications, from simple tasks like storing contact information to complex systems like managing large-scale business operations.

In a database, data is typically organized into tables, which consist of rows and columns. Each row represents a single record or entry, while each column represents a specific attribute or field of the data.

Databases are crucial for businesses, organizations, and applications to efficiently store, retrieve, and manipulate data. They come in various types, including relational databases (like MySQL, PostgreSQL, and Oracle), NoSQL databases (such as MongoDB and Cassandra), and others tailored to specific needs and use cases.


## STEP-1  Types of database

- What all we’ll learn today -
- Simple - SQL vs NoSQL, how to create Postgres Databases, How to do CRUD on them
- Advance - Relationships, Joins, Transactions

- There are a few types of databases, all service different types of use-cases

**NoSQL databases**

1. Store data in a `schema-less` fashion. Extremely lean and fast way to store data. 

2. Example - MongoDB.

**Graph databases**

1. Data is stored in the form of a graph. Specially useful in cases where `relationships` need to be stored (social networks)

2. Examples - Neo4j
 
 **Vector databases**

 1. Stores data in the form of vectors
 2. Useful in Machine learning
 3. Examples - Pinecone

 **SQL databases**

1. Stores data in the form of rows
2. Most full stack applications will use this
3. Examples - MySQL, Postgres


**What is a relational DBMS?**

A relational DBMS is a database management system (DBMS) that stores data in the form of relations or tables. This data can be accessed by the user through the use of SQL, which is a standard database query language.
What is relational DBMS explain with example?

A relational database management system (RDBMS) is a database management system (DBMS) that is based on the relational model as introduced by E. F. Codd. Examples of relational database management systems include Oracle, IBM DB2, Microsoft SQL Server, MySQL, and PostgreSQL.

## Step 2 - Why not NoSQL

You might’ve used MongoDB 
It’s schemaless properties make it ideal to for bootstraping a project fast.
But as your app grows, this property makes it very easy for data to get curropted

**What is schemaless?**

Different rows can have different schema (keys/types)

**Problems?**
1. Can lead to inconsistent database
2. Can cause runtime errors 
3. Is too flexible for an app that needs strictness
 
**Upsides?**
1. Can move very fast
2. Can change schema very easily


## Step 3 - Why SQL?

**SQL databases have a strict schema. They require you to**

1. Define your schema
2. Put in data that follows that schema
3. Update the schema as your app changes and perform migrations
 
**So there are 4 parts when using an SQL database.**

1. Running the database.
2. Using a library that let’s you connect and put data in it.
3. Creating a table and defining it’s schema.
4. Run queries on the database to interact with the data (Find/Insert/Update/Delete)



### Resourses for installation and practice.

1. The Odin Project -

[Odin Project - DATABASE COURSE](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/databases)

 
## STEP - 4 installation

**Install PostgreSQL**

[Install PostgreSQL](https://database.guide/what-do-i-need-to-run-sql/)


[PostgresSQL Tutorial](https://www.postgresql.org/docs/current/tutorial-install.html)


**ACID**

[ACID Definition](https://database.guide/what-is-acid-in-databases/)

**What is NoSQL database**

[NoSQL Database](https://aws.amazon.com/nosql/)





## Step 5 - Using a library that let’s you connect and put data in it.

1. psql
psql is a terminal-based front-end to PostgreSQL. It provides an interactive command-line interface to the PostgreSQL (or TimescaleDB) database. With psql, you can type in queries interactively, issue them to PostgreSQL, and see the query results.

2. pg

pg is a Node.js library that you can use in your backend app to store data in the Postgres DB (similar to mongoose). We will be installing this eventually in our app.


## Why is SQL important?
SQL is important because it is how you interact directly with databases. Yes, you might be able to work with databases through libraries and not use or write any SQL, but knowing what is happening underneath will prove to be an invaluable asset.

## Step 6  - Creating a table and defining it’s schema.

**Table in SQL**

A single database can have multiple tables inside. 
Think of them as collections in a MongoDB database.
`SQL` stands for `Structured query language`. It is a language in which you can describe what/how you want to put data in the database.
To create a table, the command to run is - 

![SQL Database Design](./images/SQL1.png)

**What is a database schema?**

A database schema defines how data is organized within a relational database; this is inclusive of logical constraints such as, table names, fields, data types and the relationships between these entities.

```js
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

```

There are a few parts of this SQL statement, let’s decode them one by one

1. CREATE TABLE users

`CREATE TABLE users:` This command initiates the creation of a new table in the database named `users`.

2. id SERIAL PRIMARY KEY

- `id:` The name of the first column in the users table, typically used as a unique identifier for each row (user). Similar to _id in mongodb
- `SERIAL:` A PostgreSQL-specific data type for creating an auto-incrementing integer. Every time a new row is inserted, this value automatically increments, ensuring each user has a unique id.
- `PRIMARY KEY:` This constraint specifies that the id column is the primary key for the table, meaning it uniquely identifies each row. Values in this column must be unique and not null.

3.  email VARCHAR(255) UNIQUE NOT NULL,
- `email:` The name of the second column, intended to store the user's username.
- `VARCHAR(50):` A variable character string data type that can store up to 50 characters. It's used here to limit the length of the username.
- `UNIQUE:` This constraint ensures that all values in the username column are unique across the table. No two users can have the same username.
- `NOT NULL:` This constraint prevents null values from being inserted into the username column. Every row must have a username value.

4. password VARCHAR(255) NOT NUL

Same as above, can be non uniqye

5. created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

- `created_at:` The name of the fifth column, intended to store the timestamp when the user was created.
- `TIMESTAMP WITH TIME ZONE:` This data type stores both a timestamp and a time zone, allowing for the precise tracking of when an event occurred, regardless of the user's or server's time zone.
- `DEFAULT CURRENT_TIMESTAMP:` This default value automatically sets the created_at column to the date and time at which the row is inserted into the table, using the current timestamp of the database server.

## Step 7 - Interacting with the database

`There are 4 things you’d like to do with a database`

1. `INSERT`

```js
INSERT INTO users (username, email, password)
VALUES ('username_here', 'user@example.com', 'user_password');
```

`Notice how you didn’t have to specify the id  because it auto increments`

2. UPDATE

```js

UPDATE users
SET password = 'new_password'
WHERE email = 'user@example.com';
```

3. DELETE

```js
DELETE FROM users
WHERE id = 1;
```

4. Select

```js
SELECT * FROM users
WHERE id = 1;
```

