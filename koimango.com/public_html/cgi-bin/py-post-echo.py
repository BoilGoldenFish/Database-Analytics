#!/usr/bin/python3

import sys


print("Cache-Control: no-cache")
print("Content-type: text/html\n\n")
print("<html><head><title>POST Message Body</title><script src=\"../collector.js\" defer></script></head>\
    <body><h1 align=center>POST Message Body</h1>\
  	<hr/>\n")

print("Message Body: ")
for line in sys.stdin:
  print(line)
  print("\n<br/>")
print("</body></html>")