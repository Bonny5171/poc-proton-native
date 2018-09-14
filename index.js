import React, { Component } from 'react';

import { render, Window, App, Grid, Button, TextInput, 
  Area, Checkbox, ColorButton, Form, Menu, 
  Picker, ProgressBar, RadioButtons, Separator, Slider, Spinbox, StyledText } from 'proton-native';

import { View } from 'react-native';


class Example extends Component {
  render() {
    return (
      <App>
        <View style={styles.container}>
          testeste
        </View>
        <Menu label="1">
          <Menu.Item>1.1</Menu.Item>
          <Menu.Item>1.2</Menu.Item>
          <Menu.Item>1.3</Menu.Item>
        </Menu>
        <Menu label="2">
          <Menu.Item>2.1</Menu.Item>
          <Menu.Item>2.2</Menu.Item>
          <Menu.Item>2.3</Menu.Item>
        </Menu>
        <Window title="Example" size={{w: 500, h: 500}}>

          <Form>
            <ProgressBar value={-1} />
            <Separator />
            <StyledText style={{ fontSize: 16 }}>
              This is some text drawn onto an{' '}
              <StyledText style={{ color: 'red' }}>Area!</StyledText>
            </StyledText>
            <Separator />
            <Spinbox value={10} />
            <Separator />
            <Slider value={0} />
            <Separator />
            <RadioButtons>
              <RadioButtons.Item>Option 1</RadioButtons.Item>
              <RadioButtons.Item>Option 2</RadioButtons.Item>
            </RadioButtons>
            <Separator />
            <Picker>
              <Picker.Item>Option 1</Picker.Item>
              <Picker.Item>Option 2</Picker.Item>
              <Picker.Item>Option 3</Picker.Item>
            </Picker>
            <Separator />
            <TextInput label="Username" />
            <Separator />
            <TextInput label="Password" secure={true} />
            <Separator />
            <ColorButton />
            <Separator />
            <Grid padded={true}>
              <Button row={0} column={0}>
                Hello
              </Button>
              <TextInput row={0} column={1}>
                Hi
              </TextInput>
            </Grid>
          </Form>
        </Window>
      </App>
    );
  }
}

render(<Example />);