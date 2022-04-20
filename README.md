# Database-Analytics

Team member: Mingkun Sun, Jinglin Liu

Server link: koimango.com

Details of Github auto deploy setup:
  We first create an empty repo in the server containing version control information of our website, then we implement the post-receive 
  file to make the hook executable. Then we create a remote in our local working folder served as living server.
Username/password info for logging into the site:
  username: grader@165.232.133.246
  password: 123
  
  website login: 
    username: grader
    password: 123
    
Summary of changes to HTML file in DevTools after compression:
  File size become smaller
  
Summary of removing 'server' header: 
  We first download mod_security to the server, then we went to the config file called security.config in which we changed two things: 
the first we change the ServerTokens from On to Full, then we change the ServerSignature to SecServerSignature and adjust its value to
the name we want

Extra credit: Analytics configuration
