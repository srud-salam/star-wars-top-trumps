import React, { useContext, useState } from "react";
import { HistoryContext } from "../../containers/history";
import {
  Container,
  Content,
  Header,
} from "../../components/layout/layout.styles";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import {
  Button,
  HistoryCollection,
  HistoryContainer,
  HistoryItem,
  HistoryTitle,
  HistoryValue,
  Opponents,
} from "./history.styles";
import Card from "../../components/card";

const History: React.FC = () => {
  const [isVisible, toggleVisibility] = useState(false);
  const { history } = useContext(HistoryContext);
  const historyCollection = history.filter((x) => x.playerHands.length >= 2);

  return (
    <>
      <Header>
        <h3>History Deck</h3>
      </Header>
      <HistoryContainer>
        {historyCollection.map((x) => (
          <>
            <HistoryCollection key={x.winner.id + "_collection"}>
              <HistoryItem key={x.winner.id}>
                <HistoryTitle>Winner</HistoryTitle>
                <HistoryValue>{x.winner.name}</HistoryValue>
              </HistoryItem>
              <HistoryItem>
                <HistoryTitle>Date</HistoryTitle>
                <HistoryValue>{x.winnerDate.toDateString()}</HistoryValue>
              </HistoryItem>
              <HistoryItem>
                <HistoryTitle>Type</HistoryTitle>
                <HistoryValue>{x.winner?.__typename}</HistoryValue>
              </HistoryItem>
              <HistoryItem>
                <HistoryTitle>Players</HistoryTitle>
                <HistoryValue>{x.playerHands.length}</HistoryValue>
              </HistoryItem>
              <HistoryItem>
                <Button onClick={() => toggleVisibility(!isVisible)}>
                  {isVisible ? "Hide Opponents" : "Show Opponents"}
                </Button>
              </HistoryItem>
            </HistoryCollection>
            {
              //eslint-disable-next-line
              //@ts-ignore
              <Opponents isVisible={isVisible}>
                <Row center="xs">
                  {x.playerHands.map((card) => (
                    <Col xs={12} sm={4} key={card.id + card.__typename}>
                      <Card card={card} winner={x.winner} key={card.id}></Card>
                    </Col>
                  ))}
                </Row>
              </Opponents>
            }
          </>
        ))}
      </HistoryContainer>
    </>
  );
};

export default History;
