#include <LiquidCrystal.h>

// initialise
LiquidCrystal lcd(8, 9, 4, 5, 6, 7);

//const int ledPin = 11;
String inData = "";
char nstr;
void setup() {
//  pinMode(ledPin, OUTPUT); 
  lcd.begin(16, 2);
  Serial.begin(57600);
  Serial.write("READY");
}

void loop() {
while (Serial.available() > 0)
    {
        char recieved = Serial.read();
        if(recieved != '\n'){
          inData += recieved; 
        }
        // Process message when new line character is recieved
        if (recieved == '\n')
        {
            Serial.print("Arduino Received: ");
            Serial.print(inData);
            inData.trim();
            lcd.clear();
            lcd.print(inData);
            // You can put some if and else here to process the message juste like that:
            inData = ""; // Clear recieved buffer
        }
    }
}
