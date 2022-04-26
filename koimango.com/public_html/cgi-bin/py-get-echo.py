#!/usr/bin/python3
from urllib.parse import urlparse, parse_qs
import os
print("Cache-Control: no-cache")
print("Content-type: text/html\n\n")
print("<html><head><title>GET query string</title></head>\
    <body><h1 align=center>GET query string</h1>\
  	<hr/>\n")

print("Raw query string: " + str(os.environ.get("QUERY_STRING")))
print("<br/><br/>")
print("<table> Formatted Query String:")
parsed_url = urlparse(os.environ.get("QUERY_STRING"))
parse_qs(parsed_url.query)
print("</body></html>")