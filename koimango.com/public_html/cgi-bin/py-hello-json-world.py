#!/usr/bin/python3
from datetime import datetime
# import cgitb
import socket

# cgitb.enable()
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
now = datetime.now()

print("Cache-Control: no-cache")
print("Content-type: application/json\n\n")
print("{\n\t\"message\": \"Hello World\",")
print("\t\"date\": \"{}\",".format(now.strftime("%A %B %d %H:%M:%S %Y")))
print("\t\"currentIP\": \""+s.getsockname()[0]+"\"\n}")
