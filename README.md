# Ⅰ

## Outline

This project is an online library book sharing website. The purpose of developing this website is to help users find and comment on books they want to read or like. Project functions include user registration, retrieval of books, user adding comments and like buttons.

## Target population

The target users of this website are book collectors or researchers who often use books.

## Data structure

The entire website framework development stack is roughly divided into front-end, back-end and database. The front-end uses [React](https://reactjs.org/) to complete the compilation, and the back-end writes code based on [Express](https://expressjs.com/), and the database used is [Mangodb](https://mongoosejs.com/docs/guide.html).


# Ⅱ

## About Github repository

For the use of [Github](https://github.com/) repository, our team divides the data project into 5 different branches. The task items of each team member will be completed in their different project branches, which can effectively avoid data conflicts that may occur when team members submit data together. After the team members complete their task codes, make sure that they can be matched on the main branch if there is no error. Of course, the task of some team members is to manage all the code in the main, so they are approved to directly edit the code of the main branch.


# Ⅲ

## Description MVP

### Week 1 : 
We decided to use function as the division of labor to complete the overall project. The four people respectively completed the work of connecting the front-end and back-end of functions such as "Login", "add comment" and "get, find, update and delete API" and the database. In terms of code implementation, the initialization and establishment of the front-end and back-end database of the project have been completed.

### Week 2 :
We refine the grouping of functions into different pages for each person to complete. The pages include "home page", "Login page" and "bookDetail page". In terms of code, we have implemented the basic operation of some functions. For example, the "book.js" part can display book titles and user comments on the page, including users can add likes. However, the data is fixed and not connected, and there are some bugs.

### Week 3 :
This week we have completed most of the work, each page has bugs fixed, and supports display and jump. Some functions such as "Login", "add comment" and "Search" are all running normally.

### Week 4 :
This week we unified the data, which used to be the front-end or back-end test data, and now the data comes from the back-end database. And we improved the CSS design to make the page more beautiful. At the same time, we have refined many functions, such as the "add like" button, users can only add the number of likes once. The "login" part also requires the user to enter a password of more than 8 digits to protect user privacy.

### Week 5 :
Complete the final error checking, delete some redundant files and codes, and deploy the project on Heroku.


# Ⅳ

## Guide for code

Firstly, the "server" folder is the backend of the entire project, and the "src" is the backend folder of the entire project. The data account used by mangodb is: [dereksecondly@gmail.com](https://account.mongodb.com/account/login), and the password is: Batman007.






# Ⅴ

## Summary of continuing this project

This project is already a mature web page, with normal functions in all aspects, and the layout design is also biased towards commercialization. If people need to continue to improve to make the page more refined, they can improve the following points:

### 1. 
Due to time constraints, the page layout is relatively simple, and many places are left blank. The text size and content display are not particularly exquisitely blended. If there is enough time to complete the next improvement, we will add a lot of pictures and text fonts and presentation forms to make the page less monotonous.

### 2.
The page needs to better interact with the user. For example, a prompt box will pop up to tell the user if the password is incorrect. Including the comments added by the user has not been saved, you can also add a dialog box to prompt the user whether the user needs to save. However, these need more time to complete, if there is more time, the next step we will implement these functions to make the page more comprehensive.


# Ⅵ

## The role of team members to contribute

### Yaowen liang 46517995 :


### Yu Zhang 45675058 :


### Jinjia Bai 44464983 : 


### SANGGON JUNG 45605947 :


