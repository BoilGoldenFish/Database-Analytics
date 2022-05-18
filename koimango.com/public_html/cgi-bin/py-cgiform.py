#!/usr/bin/python3


print("Cache-Control: no-cache")
print("Set-Cookie: token=")
print("Content-type: text/html\n\n")
print("<!doctype html>")
print("<html>")

print("<head>")
print("<title>CGI Form</title><script src=\"../collector.js\" defer></script>")
print("</head>")

print("<body>")
print("<h1 align=\"center\">Session Test</h1>")
print("<hr>")
print("<label for=\"cgi-lang\">CGI using Python</label>")
print("<form action=\"/cgi-bin/py-sessions-1.py\" method=\"Post\" id=\"form\">")
print("<label>What is your name? <input type=\"text\" name=\"username\" autocomplete=\"off\"></label>")
print("<br>")
print("<input type=\"submit\" value=\"Test Sessioning\">")
print("</form>")

print("<a href=\"/\" style=\"display:inline-block;margin-top:20px;\">Home</a>")

print("</body>")

print("</html>")
