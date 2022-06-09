# Analytic Report

## CSE135 HW4 by Mingkun Sun & Lainey Liu

## Login Info
site
1. [Login](http://reporting.koimango.com/login)
2. [dashboard & detail report](http://reporting.koimango.com)
admin account
1. email: grader@ucsd.edu
2. username: grader
3. password: 12345
basic acount
1. email: koi@ucsd.edu
2. username: koi
3. password: 12345

## Authentication
For this part, I created a batabase with JSON server to store the user informations. I utilized the library of json-server and json-server-auth. I chose to use the JSON server because it has built-in REST api functions and I just need to add in more cutomized routes which greatly lessened my workload. <br>
<br>
I uses the library "json-server-auth" mainly to encrypt the user password as it automatically calls the "bcrypt" hashing function. <br>
<br>
In the JSON server, each user has the fields including "username, email, password, admin" (Other status is also allowed to pass in when register with post method). I also have a fake user to keep track that whether there currently has any active session, if so, the server would automatically log the active user with the corresponging user info. Once the user clicks on logout button, the server would erase the information inside the fake user, and user has to re-login if he/ she want to access the content.

## Dashboard

## Report
