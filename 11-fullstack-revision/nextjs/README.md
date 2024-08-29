docker run --name my-nextapp -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=mydatabase -p 5433:5432 -d postgres

postgresql://myuser:mypassword@localhost:5432/mydatabase
