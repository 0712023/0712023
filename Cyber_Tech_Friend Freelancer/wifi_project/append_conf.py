from ConfigParser import SafeConfigParser
parser = SafeConfigParser()
parser.read('sample.ini')

a = parser.get('SECTION', 'email')
parser.set('SECTION', 'email', a + ', user3@example.com, user4@example.com')
with open('sample.ini', 'wb') as f:
    parser.write(f)


#https://docs.python.org/3/library/configparser.html
