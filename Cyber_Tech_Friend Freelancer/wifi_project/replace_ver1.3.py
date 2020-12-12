import os

def replace(SSID, PASSWORD):
    os.system('sudo rm -v /etc/wpa_supplicant/wpa_supplicant.conf')
    os.system('sudo touch /etc/wpa_supplicant/wpa_supplicant.conf')
    with open("/etc/wpa_supplicant/wpa_supplicant.conf", "a") as wpa:
        wpa.write("ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\ncountry=US\n\nnetwork={\n	ssid=\""+SSID+"\"\n	psk=\""+PASSWORD+"\"\n	key_mgmt=WPA-PSK\n}")
    os.system('sudo systemctl restart dhcpcd')

replace(input('SSID : '),input('Password : '))
