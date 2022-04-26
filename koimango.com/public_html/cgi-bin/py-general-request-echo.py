#!/usr/bin/python3
import os
import sys


print("Cache-Control: no-cache")
print("Content-type: text/html\n\n")
print("<html><head><title>General Request Echo</title></head>\
    <body><h1 align=center>General Request Echo</h1>\
  	<hr/>\n")
printf("<table>\n")
printf("<tr><td>Protocol:</td><td>" + str(os.environ.get("SERVER_PROTOCOL"))+ "</td></tr>\n")
printf("<tr><td>Method:</td><td>" + str(os.environ.get("REQUEST_METHOD")) + "</td></tr>\n")
printf("<tr><td>Message Body:</td><td> %s</td></tr>\n", fgets(str, 1000, stdin))
print("</body></html>")