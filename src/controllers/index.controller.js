const { response } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "firstapi",
  port: "5432",
});

const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM users");
  res.status(200).json(response.rows);
  console.log(response.rows);
};

const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  res.json(response.rows);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;

  const response = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email]
  );
  console.log(response);
  res.json({
    message: "User Added Successfully",
    body: {
      user: { name, email },
    },
  });
};

const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const response = await pool.query(
    "UPDATE users SET (name, email) WHERE id = $1",
    [id]
  );
  console.log(response);
  res.json({
    message: "User Updated Successfully",
    body: {
      user: { name, email },
    },
  });
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  const response = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  console.log(response);
  res.json(`User ${id} deleted successfully`);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
