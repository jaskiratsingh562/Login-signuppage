import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Text } from "react-native-elements";
import styles from "./styles";
import { Button } from "react-native-elements";

class forgotpsw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      conirmpsw: "",
      error: ""
    };
  }
  handleEmail = (value) => {
    this.setState({
      email: value
    });
  };
  handlePsw = (value) => {
    this.setState({
      password: value
    });
  };
  handleconfirmPsw = (value) => {
    this.setState({
      confirmpsw: value
    });
  };
  validate = () => {
    this.setState({
      error: ""
    });

    const expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!expression.test(this.state.email)) {
      this.setState({
        error: "Invalid email"
      });
      return false;
    } else if (this.state.password.length === 0) {
      this.setState({
        error: "Password can not be empty"
      });
      return false;
    } else if (this.state.password.length < 8) {
      this.setState({
        error: "Password too short"
      });
      return false;
    } else if (this.state.password !== this.state.confirmpsw) {
      this.setState({
        error: "passwords don't match"
      });
      return false;
    }
    return true;
  };
  submit = () => {
    if (this.validate()) {
      this.props.navigation.navigate("main");
    }
  };
  render() {
    return (
      <View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.active}>SignIn</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("signup")}
          >
            <Text style={styles.nonActive}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginTop: 100 }}>
          <TextInput
            placeholder="email"
            keyboardType={"email-address"}
            style={styles.inputField}
          />
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Confirm password"
            secureTextEntry={true}
            style={styles.inputField}
          />
          {this.state.error.lengh === 0 ? null : (
            <Text style={styles.error}> {this.state.error} </Text>
          )}
          <Button
            title="Login"
            buttonStyle={styles.btnStyle}
            onPress={this.submit}
          />
        </View>
      </View>
    );
  }
}

export default forgotpsw;
