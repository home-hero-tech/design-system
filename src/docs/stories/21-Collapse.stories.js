import React, { useState } from 'react';

import Button from '../../components/atom/button/Button';
import Collapse from '../../components/molecule/collapse/Collapse';
import Card from '../../components/molecule/old_card/Card';

export default {
  title: 'Collapsible',
  component: Collapse
};

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 500
};

const collapsedStyle = {
  height: 100,
  padding: '50px 0'
};

export const Collapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <div style={divStyle}>
        <Button onClick={() => setIsOpen(!isOpen)}>Click Me</Button>
        <Collapse isOpen={isOpen}>
          <div style={collapsedStyle}>
            <p>Collapse open</p>
          </div>
        </Collapse>
      </div>
    </Card>
  );
};
