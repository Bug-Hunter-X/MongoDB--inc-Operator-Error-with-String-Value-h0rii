# MongoDB $inc Operator Error with String Value

This repository demonstrates a common error when using the `$inc` operator in MongoDB updates.  The `$inc` operator is designed to increment numeric fields.  Attempting to increment a field with a string value will result in an error.

## Bug
The original code incorrectly attempts to increment a field with a string value:
```javascript
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"field": "value"}});
```

## Solution
The corrected code uses a numeric value for the increment:
```javascript
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"field": 1}});
```
