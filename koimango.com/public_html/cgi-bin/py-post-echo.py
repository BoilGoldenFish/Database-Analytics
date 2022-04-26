#!/usr/bin/python3

import sys


print("Cache-Control: no-cache")
print("Content-type: text/html\n\n")
print("<html><head><title>POST Message Body</title></head>\
    <body><h1 align=center>POST Message Body</h1>\
  	<hr/>\n")

print("Message Body: " + str(sys.stdin) + "\n<br/>")
print("</body></html>")