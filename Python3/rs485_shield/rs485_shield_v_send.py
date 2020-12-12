#!/usr/bin/env python

import time
import serial
import os


send_str = [0x01, 0x06, 0x00, 0x00, 0x01, 0x00, 0x88, 0x5A]
ser = serial.Serial(port='/dev/serial0',baudrate =9600,bytesize=8,stopbits=2)
time.sleep(0.01)
ser.write(send_str)
