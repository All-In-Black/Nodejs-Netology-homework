db.books.insertMany([
{
title: 'To Kill a Mockingbird',
description: "A novel by Harper Lee",
authors: 'Harper Lee'
},
{
title: "The Great Gatsby",
description: "A novel by F. Scott Fitzgerald",
authors: "F. Scott Fitzgerald"
},
])

db.books.find({title: "To Kill a Mockingbird"})

db.books.updateOne(
    {_id: ObjectId(1)},
    {$set: {description: "A classic American novel",  authors: "F. Scott Fitzgerald"}}
)
