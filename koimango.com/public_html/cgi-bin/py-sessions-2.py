#!/usr/bin/python3
import os

print("Cache-Control: no-cache")
print("Content-type: text/html\n\n")
print("<html>")
print("<head>")
print("<title>Python Sessions</title>")
print("</head>")
print("<body>")
print("<h1>Python Sessions Page 2</h1>")

if (os.environ.get("HTTP_COOKIE") != None and os.environ.get("HTTP_COOKIE") != "destroyed"):
    print("<tr><td>Cookie:</td><td>" + os.environ.get("HTTP_COOKIE")+ "</td></tr>\n")
else:
    print("<tr><td>Cookie:</td><td>None</td></tr>\n")
  

print("</table>")


print("<br />")
print("<a href=\"/cgi-bin/py-sessions-3.py\">Session Page 1</a>")
print("<br />")
print("<a href=\"/c-cgiform.html\">Python CGI Form</a>")
print("<br /><br />")

print("<form action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body></html>")