```javascript
// Correct use of $inc operator in MongoDB update
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"field": 1}});
```