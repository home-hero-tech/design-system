import React from 'react';

import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';
import Card from '../../components/molecule/card/Card';
import CardItem from '../../components/atom/card-item/CardItem';

import Wrapper from '../../helpers/wrapper/Wrapper';

export default {
  title: 'Card',
  component: Card
};

export const CardList = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Card>
          <CardItem value="some value" label="label" />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const mLg = () => (
  <Wrapper>
    <List mLg>
      <ListItem>
        <Card>
          <CardItem value="some value" label="label" />
        </Card>
      </ListItem>
      <ListItem>
        <Card>
          <CardItem value={new Date()} label="Última atualização" />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const mSm = () => (
  <Wrapper>
    <List mSm>
      <ListItem>
        <Card>
          <CardItem value="some value" label="label" />
        </Card>
      </ListItem>
      <ListItem>
        <Card>
          <CardItem value="value" label="label" />
          <CardItem value="value2" label="label" />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);
