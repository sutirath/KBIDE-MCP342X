Blockly.Blocks['mcp342x_read_form_channel'] = {
  init: function() {
    this.appendValueInput("channel")
        .setCheck("Number")
        .appendField("MCP342X_read form channel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "Number");
    this.setColour(210);
 this.setTooltip("MCP342X_read form channel");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mcp342x_begin__resolution'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MCP342X_begin _resolution")
        .appendField(new Blockly.FieldDropdown([["12_bit","MCP342X_SIZE_12BIT"], ["14_bit","MCP342X_SIZE_14BIT"], ["16_bit","MCP342X_SIZE_16BIT"]]), "MCP342X_SIZE")
        .appendField("GAIN")
        .appendField(new Blockly.FieldDropdown([["1X","MCP342X_GAIN_1X"], ["2X","MCP342X_GAIN_2X"], ["4X","MCP342X_GAIN_4X"], ["8X","MCP342X_GAIN_8X"]]), "MCP342X_GAIN");
    this.appendValueInput("pin1")
        .setCheck("Number")
        .appendField("pin1");
    this.appendValueInput("pin2")
        .setCheck("Number")
        .appendField("pin2");
    this.appendValueInput("pin3")
        .setCheck("Number")
        .appendField("pin3");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("MCP342X_begin _resolution");
 this.setHelpUrl("");
  }
};