README
"# 📝 MongoDB Blogging Project

## 📌 Project Overview
This project demonstrates a simple Blogging System using MongoDB. It includes:
- Collection creation with schema validation
- CRUD operations (Create, Read, Update, Delete)
- Data validation using JSON Schema

## 🛠️ Technologies Used
- MongoDB
- MongoDB Shell (mongosh)

## 📂 Database Setup
use blogDB

## 📁 Create Collection with Validation
db.createCollection(""posts"", {
  validator: {
    $jsonSchema: {
      bsonType: ""object"",
      required: [""title"", ""content"", ""author"", ""createdAt""],
      properties: {
        title: { bsonType: ""string"" },
        content: { bsonType: ""string"", minLength: 10 },
        author: { bsonType: ""string"" },
        tags: { bsonType: ""array"", items: { bsonType: ""string"" } },
        createdAt: { bsonType: ""date"" },
        likes: { bsonType: ""int"", minimum: 0 }
      }
    }
  },
  validationAction: ""error""
})

## ➕ Insert Valid Document
db.posts.insertOne({
  title: ""My First Blog"",
  content: ""This is a detailed MongoDB blog content"",
  author: ""Hari"",
  tags: [""mongodb"", ""blog""],
  createdAt: new Date(),
  likes: 5
})

## ❌ Insert Invalid Document
db.posts.insertOne({
  title: ""Short"",
  content: ""Too short"",
  author: ""Hari""
})

## 🔍 Read Operations
db.posts.find()
db.posts.find().pretty()
db.posts.find({ author: ""Hari"" })

## ✏️ Update Operations
db.posts.updateOne(
  { title: ""My First Blog"" },
  { $set: { likes: 10 } }
)

db.posts.updateOne(
  { title: ""My First Blog"" },
  { $push: { tags: ""database"" } }
)

## 🗑️ Delete Operations
db.posts.deleteOne({ title: ""My First Blog"" })
db.posts.deleteMany({})

## ⚠️ Drop Collection
db.posts.drop()

## 👨‍💻 Author
Hariharasudhan P

## 🚀 How to Run
1. Open MongoDB shell (mongosh)
2. Run the commands step by step
"

