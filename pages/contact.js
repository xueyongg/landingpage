import _ from "lodash";
import React, { Component } from "react";
import {
  Modal,
  Header,
  Segment,
  Grid,
  Image,
  Container,
  Message,
  Button,
  List,
  Icon,
  Input,
  Menu,
  Dropdown,
  Divider,
  Visibility,
  Form,
  TextArea
} from "semantic-ui-react";
import TopMenu from "./components/menu";
import BottomMenu from "./components/bottom_menu";
import PageHeader from "./components/page/page_header";
import Head from "next/head";
export default class Contact extends Component {
  state = {
    first_name_error: false,
    last_name_error: false,
    email_error: false,
    about_error: false,
    hideSuccessMessage: true,
    hideErrorMessage: true,
    disableSubmit: true,
    form: {
      first_name: "",
      last_name: "",
      email: "",
      about: ""
    },
    loading: false,
    currentPage: "contact"
  };

  onChange(e) {
    let target = e.target.name;
    let value = e.target.value;
    let state = this.state;
    switch (target) {
      case "first_name":
        state.firstName = value;
        break;
      case "last_name":
        state.last_name = value;
        break;
      case "email":
        state.email = value;
        break;
      case "about":
        state.about = value;
        break;
    }
    if (value.length === 0) {
      state[`${target}_error`] = true;
    } else {
      state[`${target}_error`] = false;
    }
    state.hideErrorMessage = true;
    this.setState(state);
  }

  onSubmit(event) {
    event.preventDefault();
    let state = this.state;
    let { first_name, last_name, email, about } = state.form;
    if (!first_name || !last_name || !email || !about) {
      state.hideErrorMessage = false;
      if (!first_name) {
        state.first_name_error = true;
      }
      if (!last_name) {
        state.last_name_error = true;
      }
      if (!email) {
        state.email_error = true;
      }
      if (!about) {
        state.about_error = true;
      }
    } else {
      // Submit form, callback, change hideErrorMessage state to be false
      setTimeout(() => {
        state.loading = false;
        state.hideSuccessMessage = false;
        state.hideErrorMessage = true;
      }, 1000);
      state.loading = true;
    }
    this.setState(state);
  }
  render() {
    return (
      <div>
        <Head>
          <title>Contact me</title>
        </Head>
        <TopMenu currentPage={this.state.currentPage} />
        <PageHeader
          mobile={false}
          url={this.state.currentPage}
          headerColor={"black"}
          subHeaderColor={"black"}
          imageName={"contact"}
          subHeaderContent={"Let's have a little chat."}
          headerContent={"Contact me"}
          additionalSegmentStyle={{}}
          additionalHeaderStyle={{ fontWight: 700, zIndex: 1 }}
          additionalSubHeaderStyle={{ zIndex: 1 }}
        />

        <Container
          text
          style={{ backgroundColor: "#ffff", padding: "96px 48px" }}
        >
          <div className="login-form">
            <Grid
              style={{ height: "100%" }}
              verticalAlign="middle"
              textAlign="center"
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  Fix up a meet up with me
                </Header>
                <Form
                  size="large"
                  loading={this.state.loading}
                  style={{ textAlign: "left" }}
                >
                  <Segment stacked>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        id="form-subcomponent-shorthand-input-first-name"
                        label="First name"
                        placeholder="First name"
                        error={this.state.first_name_error}
                        value={this.state.first_name}
                        name="first_name"
                        onChange={(e, value) => this.onChange(e)}
                        autoFocus
                        required
                      />
                      <Form.Input
                        fluid
                        id="form-subcomponent-shorthand-input-last-name"
                        label="Last name"
                        placeholder="Last name"
                        error={this.state.last_name_error}
                        value={this.state.last_name}
                        onChange={(e, value) => this.onChange(e)}
                        name="last_name"
                        required
                      />
                    </Form.Group>
                    <Form.Input
                      fluid
                      icon="user"
                      label="Email Address"
                      iconPosition="left"
                      placeholder="Email Address"
                      error={this.state.email_error}
                      value={this.state.email}
                      onChange={(e, value) => this.onChange(e)}
                      name="email"
                      required
                    />
                    <Form.Field
                      control={TextArea}
                      label="About"
                      placeholder="Tell us more about you..."
                      error={this.state.about_error}
                      value={this.state.about}
                      onChange={(e, value) => {
                        this.onChange(e);
                      }}
                      name="about"
                      required
                    />

                    <Button
                      color="teal"
                      fluid
                      size="large"
                      onClick={event => this.onSubmit(event)}
                    >
                      Send Inquiry
                    </Button>
                  </Segment>
                </Form>
                <Message
                  hidden={this.state.hideSuccessMessage}
                  style={{ textAlign: "centered" }}
                  success
                  header="Form Completed"
                  content="Your request has been sent."
                />
                <Message
                  hidden={this.state.hideErrorMessage}
                  style={{ textAlign: "centered" }}
                  error
                  header="Error"
                  content="All fields should be filled in."
                />
              </Grid.Column>
            </Grid>
          </div>
        </Container>
        <BottomMenu currentPage={this.state.currentPage} />
      </div>
    );
  }
}
