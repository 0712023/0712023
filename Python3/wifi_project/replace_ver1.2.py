import os

def replace(SSID, PASSWORD):
    os.system('sudo rm -v /home/pi/workspace/old.conf')
    os.system('sudo touch /home/pi/workspace/new.conf')
    with open("/home/pi/workspace/new.conf", "a") as wpa:
        wpa.write("ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\ncountry=US\n\nnetwork={\n	ssid=\""+SSID+"\"\n	psk=\""+PASSWORD+"\"\n	key_mgmt=WPA-PSK\n}")

replace(input('SSID : '),input('Password : '))

#SSID : 0712023   PASSWORD : omin6743
#SSID : 0712023_5G   PASSWORD : omin6743
