#!/usr/bin/python3
import os

print("Cache-Control: no-cache")
print("Content-type: text/html\n\n")
print("<html>")
print("<head>")
print("<title>Python Sessions</title>")
print("</head>")
print("<body>")

print("<h1>Go Sessions Page 2</h1>")

temp = os.Getenv("HTTP_COOKIE").split(";")[0]
name = temp.split('=')[0]
token = temp.split('=')[1]

if name =="token" and token!="destroyed" and token!="":
    print("Name: " + token)
else:
    print("No name found for the session")

print ("<br/><br/>")
print ("<a href=\"/cgi-bin/py-sessions-1.py\">Session Page 1</a><br/>")
print ("<a href=\"/cgi-bin/py-cgiform.py\">Python CGI Form</a><br />")
print ("<form style=\"margin-top:30px\" action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print ("<button type=\"submit\">Destroy Session</button>")
print ("</form>")
print ("<a href=\"https://koimango.com>Home</a><br/>")

print("</body></html>")