#!/usr/bin/python3
import os
import sys


print("Cache-Control: no-cache")
print("Content-type: text/html\n\n")
print("<html><head><title>General Request Echo</title></head>\
    <body><h1 align=center>General Request Echo</h1>\
  	<hr/>\n")
print("<table>\n")
print("<tr><td>Protocol:</td><td>" + str(os.environ.get("SERVER_PROTOCOL"))+ "</td></tr>\n")
print("<tr><td>Method:</td><td>" + str(os.environ.get("REQUEST_METHOD")) + "</td></tr>\n")
print("<tr><td>Message Body:</td><td>\n")
for line in sys.stdin:
  print("</td><td>")
  print(line)
  print("\n<br/>")
print("</body></html>")