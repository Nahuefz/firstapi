CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT()
);

INSERT INTO users(name, email) VALUES
    ('nahuel', 'nahuel@correo.com'),
    ('juan', 'juan@correo.com');