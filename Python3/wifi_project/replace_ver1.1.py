import os

def replace():
    os.system('sudo rm -v /home/pi/workspace/test.conf')
    os.system('sudo touch /home/pi/workspace/new.conf')
    with open("/home/pi/workspace/new.conf", "a") as wpa:
        wpa.write("ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\ncountry=US\n\nnetwork={\n	ssid=\"skku\"\n	key_mgmt=NONE\n}")

replace()
