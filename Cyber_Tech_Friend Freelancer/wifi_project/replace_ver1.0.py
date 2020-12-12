import os

def replace():
    os.system('sudo rm -v /home/pi/workspace/test.conf')
    os.system('sudo touch /home/pi/workspace/new.conf')
    with open("/home/pi/workspace/new.conf", "a") as wpa:
        wpa.write("test")

replace()
