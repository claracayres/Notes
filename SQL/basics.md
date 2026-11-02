## What's SQL?
SQL is a standard language for accessing and manipulating databases.
Not case-sensitive

### RDBMS
The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns and rows.


### SELECT
Used to select data from a database.

Syntax:
```sql
SELECT column1, column2, ...
FROM table_name;
```

to select all columns

```sql
SELECT * FROM table_name;
```

#### SELECT DISTINCT
Used to return only distinct (unique) values.

Syntax:

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

By using the COUNT() function with the DISTINCT keyword, we can count the number of unique values.

```sql
SELECT COUNT(DISTINCT column) FROM table_name;
```

*The COUNT(DISTINCT column_name) is not supported in Microsoft Access databases.*

Workaround for MS Access:
```sql
SELECT Count(*) AS DistinctCountries
FROM (SELECT DISTINCT Country FROM Customers);
```

### WHERE
Used to filter records, extract onlu those records that fulfill a specific condition.
Example:

```sql
SELECT * FROM Customers
WHERE Country = 'Mexico';
```

Syntax:

```sql
SELECT column1, column2, ...
FROM table_name;
WHERE condition;
```
Quotes are necessary around text values, however numeric fields should not be enclosed in quotes.

*The WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.*

Can be used operators other than the ```=``` to filter a search.

| Operator  | Description | 
|---|---------------------|
| = |        Equal        |
| > |    Greater than     |
| < |      Less than      |
| >= |     Greater than or equal       |
| <= |    Less than or equal     |
| <> |Not equal. Note: In some versions of SQL this operator may be written as !=|
| BETWEEN |        Between a certain range        |
| LIKE |    Search for a pattern     |
| IN |To specify multiple possible values for a column|

###  ORDER BY
Used to sort the result-set in ascending or descending order.
ASC for default.

Syntax:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

DESC

```sql
SELECT * FROM Products
ORDER BY Price DESC; 
```
Several Columns

The following SQL statement selects all customers from the "Customers" table - and sorts it by the "Country" and the "CustomerName" column.

This means that it sorts it first by Country, and if some records have the same Country, it sorts them by CustomerName.

```sql
SELECT * FROM Customers
ORDER BY Country, CustomerName; 
```

Combine ASC and DESC:
```sql
SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC; 
```

### AND
Used to filter records based on more the one condition.

*Displays a record if <b>all</b> the conditions are TRUE*

Syntax:

```sql
SELECT column1, column2, ...;
FROM table_name;
WHERE condition1 AND condition2 AND condition3 ...; 
```

### OR
Used to filter records based on more than one condition.

The OR operator displays a record if any of the conditions are TRUE.

Syntax:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
```
OR and AND can be combined.

Example:

```sql
SELECT * FROM Customers;
WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%'); 
```

### NOT
Used to return values where records DO NOT match the specified condition.
|OPERATORS|
-----------
|NOT LIKE|
|NOT BETWEEN|
|NOT IN|
|IS NOT NULL|
|NOT EXISTS|

Syntax:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
```

### INSERT INTO
Used to insert new content in a table.

Syntax:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...); 
```
if inserting new values to all columns you can omit the column names. Values must be in the same oder as the columns in the table.

### NULL
Unknown, missing or inapplicable data in a database field.
To test a null value:
IS NULL and IS NOT NULL

Syntax:

```sql
SELECT column_names
FROM table_name
WHERE column_name IS (NOT) NULL; 
```

### UPDATE
Used to update or modify values in a table.

Syntax:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition; 
```

*If you omit the WHERE clause, all records will be updated* 

### DELETE
Used to Delete data from a table.

Syntax:

```sql
DELETE FROM table_name WHERE condition;
```

*If you omit the WHERE clause, the data will be deleted without deleting the table.*

To delete a table you can use DROP.

Syntax:

```sql
DROP TABLE table_name:
```
