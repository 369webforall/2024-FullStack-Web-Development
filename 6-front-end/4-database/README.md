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

