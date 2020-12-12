var id = msg.payload[1] ;
var data_package_json = flow.get('data_package_json') || {} ;

if (id == 1) {
  data_package_json = {} ;
  data_package_json.zone1 = msg.payload ;
  flow.set('data_package_json', data_package_json) ;
} else if (id == 2) {
  data_package_json.zone2 = msg.payload ;
  flow.set('data_package_json', data_package_json) ;
} else if (id == 3) {
  data_package_json.zone3 = msg.payload ;
  flow.set('data_package_json', data_package_json) ;
} else if (id == 4) {
  data_package_json.zone4 = msg.payload ;
  flow.set('data_package_json', data_package_json) ;
} else if (id == 5) {
  data_package_json.zone5 = msg.payload ;
  flow.set('data_package_json', data_package_json) ;
} else if (id == 6) {
  data_package_json.zone6 = msg.payload ;
  flow.set('data_package_json', data_package_json) ;
  msg.payload = data_package_json ;
  return msg ;
}
