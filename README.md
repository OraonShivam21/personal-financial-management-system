# Personal Financial Management System
Personal Financial Management System is the API where users can first register and authenticate themselves and then they can record their transactions based on 2 different types i.e. income and expense. Users can also categorize their transactional records into various custom made categories. Each user will have their own custom category which will only be available to them. This system also enables users to get their monthly reports based on the type of transaction they made or they can also get category based reports as well. Users can also see full reports of all their transactions, like history record.

## Table of Contents
- [Deployed Link](#deployed-link)
- [Tech Stack](#tech-stack)
- [Specified Routes](#specified-routes)


## Deployed Link
Personal Financial Management System is being deployed on [render.com](https://render.com), feel free to check this link out: [Link to click](https://personal-financial-management-system.onrender.com/)

## Tech Stack
The Talent Trove website used these tech stacks as mentioned below for its creation:

- **Node.js:** With the help of Node.js and Node Package Manager, packages are being managed.
- **Express.js:** Express have been used for this project for fast and easy development.
- **JSON Web Token:** Is used for user authentication, so that a valid user may have access to their transactional portfolio.
- **Prisma:** For database management, Prisma simplifies database management queries, database migrations, readable data models etc.

## Specified Routes
These are the specified routes for this API:

- **Users**

    ```Register:``` **/user/register**
    
    ```Method:``` **POST**
    
    ```Input Data:```
    ```javascript
    {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "password": "johndoe123"
    }
    ```
    ```Result:```
    ```javascript
    { message: "You've been registered successfully!" }
    ```

    ```Login:``` **/user/login**

    ```Method:``` **POST**
    
    ```Input Data:```
    ```javascript
    {
        "email": "johndoe@example.com",
        "password": "johndoe123"
    }
    ```
    ```Result:```
    ```javascript
    {
        message: "User successfully logged in!",
        accessToken: "some jwt generated token"
    }
    ```

****
**Note: From here on all the routes are protected, so for accessing these routes, users have to login with their account and give the jwt token in the headers.authorization***

- **Category**
    
    ```Create Category:``` **/category**

    ```Method:``` **POST**
    
    ```Input Data:```
    ```javascript
    {
        "name": "sample category",
        "description": "(optional) sample category description"
    }
    ```
    ```Result:```
    ```javascript
    {
        message: "Successfully created new category",
        category: {
            // category object props
            id: "sample_category_id",
            name: "sample category",
            userId: "userId of user",
            description: "(optional) sample category description",
            createdAt: "date of creation"
        }
    }
    ```

    ```Get All Category Created by User:``` **/category**

    ```Method:``` **GET**
    
    ```Result:```
    ```javascript
    {
        categories: [
            // array of all the categories created by user
        ]
    }
    ```

    ```Get Category With ID:``` **/category/:id**
    
    ```Method:``` **GET**

    ```Result:```
    ```javascript
    {
        category: {
            // category object props
            id: ":id",
            name: "sample category",
            userId: "userId of user",
            description: "(optional) sample category description",
            createdAt: "date of creation"
        }
    }
    ```

    ```Update Category With ID:``` **/category/:id**

    ```Method:``` **PUT, PATCH**

    ```Input Data:```
    ```javascript
    {
        "name": "sample category",
        "description": "(optional) sample category description"
    }
    ```

    ```Result:```
    ```javascript
    {
        message: "Category updated successfully!",
        category: {
            // category object props
            id: "sample_category_id",
            name: "sample category",
            userId: "userId of user",
            description: "(optional) sample category description",
            createdAt: "date of creation"
        }
    }
    ```

    ```Delete A Category:``` **/category/:id**

    ```Method:``` **DELETE**

    ```Result:```
    ```javascript
    { message: "Category deleted successfully!" }
    ```

    ```Category Wise Expense Tracking:``` **/category/type/:category**
    
    ```Method:``` **GET**

    ```Result:```
    ```javascript
    {
        transactions: [
            // array of all transactions of the user with the selected category
        ]
    }
    ```

****
- **Transaction**

    ```Create New Transaction:``` **/transactions**

    ```Method:``` **POST**

    ```Input Data:```
    ```javascript
    {
        "category": "category e.g. grocery, rent, entertainment",
        "type": "income or expense",
        "amount": "amount in float value",
        "description": "(optional) sample transaction description"
    }
    ```

    ```Result:```
    ```javascript
    {
        message: "Successfully created new transaction",
        transaction: {
            id: "sample_transaction_id",
            userId: "userId of user",
            categoryId: "categoryId of category",
            type: "income or expense",
            amount: "amount in float value",
            date: "date of transaction",
            description: "(optional) sample description of transaction"
        }
    }
    ```

    ```Get All Transaction Made By User:``` **/transactions**

    ```Method:``` **GET**

    ```Result:```
    ```javascript
    { 
        message: "Found all the transactions",
        transactions: [
            // array of all the transactions made by user
        ]
    }
    ```

    ```Get Transaction by ID:``` **/transactions/:id**

    ```Method:``` **GET**

    ```Result:```
    ```javascript
    {
        transaction: {
            id: "sample_transaction_id",
            userId: "userId of user",
            categoryId: "categoryId of category",
            type: "income or expense",
            amount: "amount in float value",
            date: "date of transaction",
            description: "(optional) sample description of transaction"
        }
    }
    ```

    ```Update Transaction By ID:``` **/transactions/:id**

    ```Method:``` **PUT, PATCH**

    ```Input Data:```
    ```javascript
    {
        "category": "category e.g. grocery, rent, entertainment",
        "type": "income or expense",
        "amount": "amount in float value",
        "description": "(optional) sample transaction description"
    }
    ```

    ```Result:```
    ```javascript
    {
        message: "Transaction updated successfully!",
        transaction: {
            id: "sample_transaction_id",
            userId: "userId of user",
            categoryId: "categoryId of category",
            type: "income or expense",
            amount: "amount in float value",
            date: "date of transaction",
            description: "(optional) sample description of transaction"
        }
    }
    ```

    ```Delete A Transaction By ID:``` **/transactions/:id**

    ```Method:``` **DELETE**

    ```Result:```
    ```javascript
    { message: "Transaction deleted successfully!" }
    ```

****
- **Monthly Report**

    ```Monthly Report on Income or Expense:``` **/monthly-report/type/:type**

    ```Method:``` **GET**

    ```Result:```
    ```javascript
    {
        transactions: [
            // array of all the transactions user has registered which is of the type given as paramater :type
        ]
    }
    ```

    ```Monthly Report on Category:``` **/monthly-report/category/:category**

    ```Method:``` **GET**

    ```Result:```
    ```javascript
    {
        transactions: [
            // array of all the transactions user has registered which is of the category given as paramater :category
        ]
    }
    ```

    ```Monthly Report on Category:``` **/monthly-report/all-report**

    ```Method:``` **GET**

    ```Result:```
    ```javascript
    {
        report: {
            transactionTypeReport: [
                // all the transactions made by user under the specified type
            ],
            transactionCategoryReport: [
                // all the transactions made by user under the specified category
            ]
        } 
    }
    ```

*****
This concludes the documentation for Personal Financial Management System which is a RESTful API.