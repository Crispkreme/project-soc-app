const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

const authenticate = (req, res, next) => {
  const userId = req.cookies?.userId;
  if (!userId) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }
  req.userId = userId;
  next();
};

const getUserByAuthToken = async (authToken) => {
    const [userId] = authToken.split(":");
    
    if (!userId) {
      return null;
    }
  
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE id = ?",
        [userId],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          if (results.length > 0) {
            resolve(results[0]);
          } else {
            resolve(null);
          }
        }
      );
    });
};

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project-soc-app",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

app.post("/register", async (req, res) => {
  const { name, email, password, age, phone, birthday } = req.body;

  if (!name || !email || !password || !age || !phone || !birthday) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO users (name, email, password, age, phone, birthday) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [name, email, hashedPassword, age, phone, birthday], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error while inserting user" });
      }
      res.status(201).json({ message: "User created successfully" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error while hashing password" });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both email and password" });
  }

  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database query error" });
    }

    if (result.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const user = result[0]; // Get the first result

    // Compare the password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Generate a simple token (or use user ID, timestamp, etc.)
    const token = `${user.id}:${new Date().getTime()}`;

    // Set token in HTTP-only cookie (for security)
    res.cookie("auth_token", token, {
      httpOnly: true, // Ensures the cookie cannot be accessed via JavaScript
      secure: false, // Set to true if using HTTPS
      maxAge: 3600000, // Expires in 1 hour
    });

    return res.json({ success: true, message: "Login successful" });
  });
});

app.get("/profile/:id", authenticate, (req, res) => {
  const userId = req.params.id;

  const query = "SELECT id, name, email FROM users WHERE id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: results[0] });
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("auth_token");

  return res.json({ success: true, message: "Logged out successfully" });
});

app.get("/check-login", async (req, res) => {
    if (req.cookies.auth_token) {
      try {
        const user = await getUserByAuthToken(req.cookies.auth_token);
        if (user) {
          res.json({
            success: true,
            userId: user.id,
          });
        } else {
          res.json({ success: false });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        res.json({ success: false });
      }
    } else {
      res.json({ success: false });
    }
  });
  

app.get("/users", async (req, res) => {
  try {
    const users = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });

    console.log("Fetched users:", users);
    res.json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
});

app.delete("/delete-user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (deletedUser) {
      res.json({ success: true, message: "User deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ success: false, message: "Failed to delete user" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
