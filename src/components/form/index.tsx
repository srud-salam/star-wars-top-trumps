import React, { useState } from "react";
import { connect } from "react-redux";
import { playGame } from "../../store/actions";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import { FormProps } from "./form.props";
import {
  Container,
  FormItems,
  FormItem,
  FormLabel,
  Button,
} from "./form.styles";

const Form = (props: FormProps) => {
  const [playerContainer, setPlayerContainer] = useState({
    players: 2,
    types: "people",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setPlayerContainer({ ...playerContainer, [e.target.name]: e.target.value });

  return (
    <Grid>
      <Container isLoading={props.loading}>
        <Row center="xs">
          <Col xs={10}>
            <FormItems>
              <FormItem>
                <FormLabel>Choose Players</FormLabel>
                <select
                  name="players"
                  onChange={handleChange}
                  value={playerContainer.players}
                >
                  <option value={2}>2 players</option>
                  <option value={3}>3 players</option>
                  <option value={4}>4 players</option>
                  <option value={5}>5 players</option>
                </select>
              </FormItem>
              <FormItem>
                <FormLabel>Choose Types</FormLabel>

                <select
                  name="types"
                  onChange={handleChange}
                  value={playerContainer.types}
                >
                  <option value="people">People</option>
                  <option value="starships">Starships</option>
                </select>
              </FormItem>
              <FormItem>
                <Button onClick={() => props.playGame(playerContainer)}>
                  Play Game
                </Button>
              </FormItem>
            </FormItems>
          </Col>
        </Row>
      </Container>
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({
  loading: state.loading,
});

const mapDispatchToProps = {
  playGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
