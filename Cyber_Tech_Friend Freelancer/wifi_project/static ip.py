import os

#def network_setup(ip_add,net_mask):
def network_setup(new_ip):
        os.system('sudo ifconfig wlan0 down')
        os.system('sudo ifconfig wlan0 ' + new_ip)
        #os.system('sudo ifconfig wlan0 ' + new_ip + ' netmask '+ net_mask)
        os.system('sudo ifconfig wlan0 up')

network_setup(input('New ip : '))
#network_setup(input('new ip : '),input('new netmask : '))
