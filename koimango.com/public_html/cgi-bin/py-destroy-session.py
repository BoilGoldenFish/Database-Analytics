#!/usr/bin/python3
print("Cache-Control: no-cache")
print("Set-Cookie: token=destroyed")
print("Content-type: text/html\n\n")

print("<html>")
print("<head><title>Python Session Destroyed</title><script src=\"../collector.js\" defer></script></head>")
print("<body>")
print("<h1>Python Session Destroyed</h1>")

print("<a href=\"/cgi-bin/py-sessions-1.py\">Back to Page 1</a>")
print("<br />")
print("<a href=\"/cgi-bin/py-sessions-2.py\">Back to Page 2</a>")
print("<br />")
print("<a href=\"/cgi-bin/py-cgiform.py\">Python CGI Form</a>")

print("</body>")
print("</html>")