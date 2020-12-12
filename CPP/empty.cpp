
// constants won't change. They're used here to set pin numbers:
const int buttonPin = 5;     // the number of the pushbutton pin


void setup() {
  pinMode(buttonPin, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  int input = Serial.parseInt() ;

  if (input == 1) {
    digitalWrite(buttonPin, HIGH);
    Serial.println("digital write HIGH");
  } else {
    digitalWrite(buttonPin, LOW);
    Serial.println("digital write LOW");
  }
  delay(1000);
}
