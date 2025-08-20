# MongoDB Commands

## Basic Commands

### Database Operations
```bash
# Show all databases
show dbs

# Create/Use a database
use database_name

# Show current database
db

# Drop/delete database
db.dropDatabase()
```

### Collection Operations
```bash
# Create collection
db.createCollection("collection_name")

# Show collections
show collections

# Drop/delete collection
db.collection_name.drop()
```

## CRUD Operations

### Create (Insert)
```bash
# Insert one document
db.collection_name.insertOne({field1: "value1", field2: "value2"})

# Insert multiple documents
db.collection_name.insertMany([
    {field1: "value1", field2: "value2"},
    {field1: "value3", field2: "value4"}
])
```

### Read (Query)
```bash
# Find all documents
db.collection_name.find()

# Find with pretty formatting
db.collection_name.find().pretty()

# Find with condition
db.collection_name.find({field1: "value1"})

# Find one document
db.collection_name.findOne({field1: "value1"})

# Count documents
db.collection_name.countDocuments()
```

### Update
```bash
# Update one document
db.collection_name.updateOne(
    {field1: "value1"}, // filter
    {$set: {field2: "new_value"}} // update
)

# Update many documents
db.collection_name.updateMany(
    {field1: "value1"}, // filter
    {$set: {field2: "new_value"}} // update
)
```

### Delete
```bash
# Delete one document
db.collection_name.deleteOne({field1: "value1"})

# Delete many documents
db.collection_name.deleteMany({field1: "value1"})
```

## Advanced Queries

### Query Operators
```bash
# Greater than
db.collection_name.find({field1: {$gt: 100}})

# Less than
db.collection_name.find({field1: {$lt: 100}})

# Greater than or equal
db.collection_name.find({field1: {$gte: 100}})

# Less than or equal
db.collection_name.find({field1: {$lte: 100}})

# Not equal
db.collection_name.find({field1: {$ne: "value1"}})

# In array
db.collection_name.find({field1: {$in: ["value1", "value2"]}})
```

### Sorting and Limiting
```bash
# Sort (1 for ascending, -1 for descending)
db.collection_name.find().sort({field1: 1})

# Limit results
db.collection_name.find().limit(5)

# Skip results
db.collection_name.find().skip(5)

# Combining sort, skip and limit
db.collection_name.find().sort({field1: 1}).skip(10).limit(5)
```

### Aggregation
```bash
# Basic aggregation
db.collection_name.aggregate([
    {$match: {field1: "value1"}},
    {$group: {_id: "$field2", total: {$sum: "$field3"}}}
])
```

## Indexes
```bash
# Create index
db.collection_name.createIndex({field1: 1})

# Show indexes
db.collection_name.getIndexes()

# Drop index
db.collection_name.dropIndex("index_name")
```

## Administration Commands
```bash
# Server status
db.serverStatus()

# Database stats
db.stats()

# Collection stats
db.collection_name.stats()

# User management
db.createUser({
    user: "username",
    pwd: "password",
    roles: ["readWrite", "dbAdmin"]
})
```