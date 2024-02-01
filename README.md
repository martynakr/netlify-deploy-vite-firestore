## Why do we need databases?

-   Store lots of information somewhere
-   every user has access to the most up to date information, for example with ecommerce, we need to know when an item is out of stock etc.
-   persist the data
-   if our fronted or backend is down, we still have the information safe in the db

## What kind of databases are out there?

NoSQL

### SQL

-   Structured Query Language
-   Every entity is a table
-   Tables have relationships
-   Enforced structure
-   Little to no duplication of data when done properly
-   If I have complex relationships in my db I might have to write complex queries to get what I'm after

## NoSQL / Documents

-   JSON in the cloud
-   No enforced structure
-   Duplicated data
-   It's a lot harder to set up relationships
-   Benefit is very fast lookup

## Firestore

Firestore is a document databae provided by firebase (a set of tools to simplify web development)

-   Popular choice in the industry
-   Real time updates

## CRUD

Create, Read, Update, Delete
