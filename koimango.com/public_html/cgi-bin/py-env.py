#!/usr/bin/python3
import os
print("Cache-Control: no-cache")
print("Content-type: text/html\n\n")
print("<html><head><title>Environment Variables</title><script src=\"../collector.js\" defer></script></head>\
    <body><h1 align=center>Environment Variables</h1>\
  	<hr/>\n")

environment_items = dict(**os.environ)

for env_key in environment_items:
    print(env_key, environment_items[env_key])
    print("\n<br/>")
print("</body></html>")