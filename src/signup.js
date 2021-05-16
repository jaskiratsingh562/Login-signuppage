import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { Button } from "react-native-elements";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmpsw: "",
      error: ""
    };
  }
  handleusername = (value) => {
    this.setstate({
      username: value
    });
  };
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
  handleConfirmPsw = (value) => {
    this.setState({
      Confirmpsw: value
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
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: "Passwords don't match."
      });
      return false;
    }
    return true;
  };
  submit = () => {
    if (this.validate()) {
      this.props.navigation.navigate("main", {
        name: this.state.name,
        email: this.state.email
      });
    }
  };
  render() {
    return (
      <View>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("login")}
          >
            <Text style={styles.nonActive}>SignIn</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.active}>Signup</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 100 }}>
          <TextInput placeholder="user name" style={styles.inputField} />
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
            placeholder="confirm password"
            secureTextEntry={true}
            style={styles.inputField}
          />
          {this.state.error.length === 0 ? null : (
            <Text style={styles.error}>{this.state.error}</Text>
          )}
          <Button
            title="Sign Up"
            buttonStyle={styles.btnStyle}
            onPress={this.submit}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("termsandconditions")}
          >
            <Text style={styles.TandC}>terms and conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Signup;
