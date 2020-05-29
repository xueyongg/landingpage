import { Component } from "react";
import {
  Modal,
  Header,
  Grid,
  Image,
  Container,
  List,
  Icon,
  Label,
} from "semantic-ui-react";

export default class Portfolio_table extends Component {
  state = {
    title: "",
    link: "",
    descriptions: "",
    date: "",
    duration: "",
    skills: "",
    baseurl: "",
    screenshots: "",
  };
  componentDidMount() {
    this.setState({ ...this.props, loading: false });
  }

  render() {

    const {
      title,
      link,
      descriptions,
      date,
      duration,
      skills,
      baseurl,
      screenshots,
    } = this.props.project;
    return (
      <Grid.Row key={this.props.index}>
        <Grid.Column width={3}>
          <Header as="h4" content="Date and duration of project" />
          <p>{date}</p>
          <p>({duration})</p>
        </Grid.Column>
        <Grid.Column textAlign="left" width={10}>
          {link !== "" ? (
            <Header as="h3" content={title} icon textAlign="center">
              {title}
              <Header.Subheader as="a" href={link} target="_blank">
                Check me out
              </Header.Subheader>
            </Header>
          ) : (
              <Header as="h3" content={title} textAlign="center" />
            )}

          <List as="ul" link>
            {descriptions.map((description, i) => {
              return (
                <List.Item as="li" key={i}>
                  {description}
                </List.Item>
              );
            })}
          </List>
          <Grid>
            <Grid.Row columns={3}>
              {screenshots.map((screenshot, i) => {
                if (screenshot)
                  return (
                    <Grid.Column key={i}>
                      <Modal
                        basic
                        centered
                        closeIcon
                        style={{ top: "15%" }}
                        trigger={
                          <Image
                            alt={baseurl + screenshot}
                            bordered
                            rounded
                            src={baseurl + screenshot}
                            style={{ borderWidth: 3 }}
                          />
                        }
                      >
                        {link ? (
                          <Header
                            as="a"
                            content={title}
                            href={link}
                            icon="file outline"
                          />
                        ) : (
                            <Header content={title} icon="file outline" />
                          )}
                        <Modal.Content>
                          <Image
                            alt={
                              baseurl + "large/" + screenshot.replace("tn_", "")
                            }
                            centered
                            fluid
                            rounded
                            src={
                              baseurl + "large/" + screenshot.replace("tn_", "")
                            }
                            style={{
                              width: "100%",
                              maxHeight: "calc(100vh - 90px)",
                              // overflowY: "auto",
                              cursor: "auto",
                            }}
                          />
                        </Modal.Content>
                      </Modal>
                    </Grid.Column>
                  );
              })}
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column width={3}>
          <List link>
            <Header as="h4" content="Skills" />
            {skills.map((skill, i) => {
              return (
                <List.Item key={i}>
                  <Label>
                    {skill.icon.includes("devicon") ? (
                      <i class={skill.icon} style={{ paddingRight: 8 }} />
                    ) : (
                        <Icon name={skill.icon} />
                      )}
                    {skill.name}
                  </Label>
                </List.Item>
              );
            })}
          </List>
        </Grid.Column>
      </Grid.Row>
    );
  }
}
