#!/usr/bin/python3
import os
name = ""
try:
    name = input()
    print("Cache-Control: no-cache")
    name = name.split('=')[1]
    if len(name) > 0:
        print("Content-type: text/html")
        print("Set-Cookie: " + name + "\n\n")
    else:
        print("Content-type: text/html\n\n")
except EOFError: 
    name = os.environ.get("HTTP_COOKIE")


print("<html>")
print("<head>")
print("<title>Python Sessions</title>")
print("</head>")
print("<body>")
print("<h1>Python Sessions Page 1</h1>")

if len(name) > 0:
    print("<tr><td>Cookie:</td><td>" + name + "</td></tr>\n")
elif (os.environ.get("HTTP_COOKIE") != None and os.environ.get("HTTP_COOKIE") == "destroyed"):
    print("<tr><td>Cookie:</td><td>%s</td></tr>\n" + os.environ.get("HTTP_COOKIE"))
else:
    print("<tr><td>Cookie:</td><td>None</td></tr>\n")
  
print("</table>")


print("<br />")
print("<a href=\"/cgi-bin/py-sessions-2.py\">Session Page 2</a>")
print("<br />")
print("<a href=\"/py-cgiform.html\">Python CGI Form</a>")
print("<br /><br />")

print("<form action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body></html>")