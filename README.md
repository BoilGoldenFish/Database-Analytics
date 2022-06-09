# Analytic Report

## CSE135 HW4 by Lainey Liu & Mingkun Sun

## Login Info
site (The dashboard and report might take a few seconds to load due the large amount of data)
1. [Login](http://reporting.koimango.com/login)
2. [dashboard](http://reporting.koimango.com) 
3. [detail report](http://reporting.koimango.com/detail)<br>

admin account
1. email: grader@ucsd.edu
2. username: grader
3. password: 12345

basic account
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
For the first chart, I choose to use the line chart to show the left, right, and middle mouse button clicking stats. because I think the line chart can better reflect the trend and changes. <br>
<br>
For the second chart, I choose to use a gauge graph to show how fast is the current loading time. I choose so because it is a vivid and also illustrative way to reflect the loading speed. It also provides the user with a bit fun to read the chart. <br>
<br>
For the grid, I choose to use an expandable rows table to record the page visit info. Each row has the info about which page the user enters and the corresponding enter time, when the user clicks on the row, it will expand and show the id, total loading time, and the user left time. I choose to do so because I want to provide the user with options to see the visit details or not, since there is a great possibility that the users might only need the info about which page the user enters at the time.

## Report
For the detail report, I want to report on the page loading time. I choose the pie chart, bar chart, and line chart to report the data. I first gives the user four pieces of direct data: "average time", "expected time upper bound", "best time", and "longest time" to give the user a general sense of the data. Then, I first use the pie chart to show at how many percents the page loading time was at least as fast as the "expected time upper bound", then I shows the users the data distribution at the level of "very fast", "fast", "medium", "slow", and "very slow" so that users knows about the data distribution. At the end, I used the line chart to display the variations along the timeline. <br>
Now the user would have a clear sense about loading time's upper bound and lower bound, distribution, and variation situation.