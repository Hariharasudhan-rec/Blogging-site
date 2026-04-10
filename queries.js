use blogDB
db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "content", "author", "createdAt"],
      properties: {
        title: {
          bsonType: "string"
        },
        content: {
          bsonType: "string",
          minLength: 10
        },db.posts.insertOne({
  title: "My First Blog",
  content: "This is a detailed MongoDB blog content",
  author: "Hari",
  tags: ["mongodb", "blog"],
  createdAt: new Date(),
  likes: 5
})
        author: {
          bsonType: "string"
        },
        tags: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        createdAt: {
          bsonType: "date"
        },
        likes: {
          bsonType: "int",
          minimum: 0
        }
      }
    }
  },
  validationAction: "error"
})
db.posts.insertOne({
  title: "Short",
  content: "Too short",
  author: "Hari"
})
// View all posts
db.posts.find()

// Pretty format
db.posts.find().pretty()

// Filter by author
db.posts.find({ author: "Hari" })
// Update one document
db.posts.updateOne(
  { title: "My First Blog" },
  { $set: { likes: 10 } }
)

// Add new tag
db.posts.updateOne(
  { title: "My First Blog" },
  { $push: { tags: "database" } }
)
// Delete one document
db.posts.deleteOne({ title: "My First Blog" })

// Delete all documents
db.posts.deleteMany({})

// Drop the collection
db.posts.drop()

