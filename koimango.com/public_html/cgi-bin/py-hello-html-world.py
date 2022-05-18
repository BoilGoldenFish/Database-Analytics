#!/usr/bin/python3
from datetime import datetime
import cgitb
import socket

cgitb.enable()
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
now = datetime.now()


print("Cache-Control: no-cache")
print("Content-type: text/html\n\n")
print("<html><head><title>Hello CGI World</title><script src=\"../collector.js\" defer></script></head>\
    <body><h1 align=center>Hello HTML World</h1>\
  	<hr/>\n")

print("Hello World<br/>\n")
print("This program was generated at: {}\n<br/>".format(now.strftime("%A %B %d %H:%M:%S %Y")))
print("Your current IP address is: {}<br/>".format(s.getsockname()[0]))

print("</body></html>")