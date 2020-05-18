Blockly.JavaScript['mcp342x_read_form_channel'] = function(block) {
  var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code=`

  #FUNCTION
  int readsensor(int pin1 ,int pin2, int pin3){
    digitalWrite(p1,pin1);
    digitalWrite(p2,pin2);
    digitalWrite(p3,pin3);
    static int16_t  result;
    myADC.startConversion();
    myADC.getResult(&result);
    Serial.println(result);
  }
  #END
  `
  
  if(value_channel== 1){
    code += `
    readsensor(0,0,0);
    `;
  }
  else if (value_channel== 2){
    code += `
    readsensor(0,0,1);
    `;
  }
  else if (value_channel== 3){
    code += `
    readsensor(0,1,0);
    `;
  }
  else if (value_channel== 4){
    code += `
    readsensor(0,1,1);
    `;
  }
  else if (value_channel== 5){
    code += `
    readsensor(1,0,0);
    `;
  }
  else if (value_channel== 6){
    code += `
    readsensor(1,1,0);
    `;
  }
  else if (value_channel== 7){
    code += `
    readsensor(1,1,1);
    `;
  }
  else if (value_channel== 8){
    code += `
    readsensor(1,0,1);
    `;
  }
 
  return code;
};

Blockly.JavaScript['mcp342x_begin__resolution'] = function(block) {
  var dropdown_mcp342x_size = block.getFieldValue('MCP342X_SIZE');
  var dropdown_mcp342x_gain = block.getFieldValue('MCP342X_GAIN');
  var value_pin1 = Blockly.JavaScript.valueToCode(block, 'pin1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pin2 = Blockly.JavaScript.valueToCode(block, 'pin2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pin3 = Blockly.JavaScript.valueToCode(block, 'pin3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  #VARIABLE
  int p1 = ${value_pin1};
  int p2 = ${value_pin2};
  int p3 = ${value_pin3};
  #END
  #SETUP
  pinMode(p1, OUTPUT);
  pinMode(p2, OUTPUT);
  pinMode(p3, OUTPUT);
  #END
#EXTINC
#include  <Wire.h>
#include  <MCP342X.h>
#END

#VARIABLE
 MCP342X myADC;
#END


  Wire.begin(); 
  TWBR = 12;
  Serial.begin(9600);  
  myADC.configure( MCP342X_MODE_CONTINUOUS |
    MCP342X_CHANNEL_1 |
    ${dropdown_mcp342x_size} |
    ${dropdown_mcp342x_gain}
  );
`;

  return code;
};