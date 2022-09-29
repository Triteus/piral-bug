import * as React from 'react';
import { PiletApi } from 'dialog-bug';
import styled from 'styled-components';

const Dialog1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: auto;
    height: 25vh;
    width:25vw;
    background: blue;
    color: white;
`;
const Dialog2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: auto;
    height: 25vh;
    width:25vw;
    background: orange;
    color: white;
`;

export function setup(app: PiletApi) {
  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 1,
  });

  app.registerModal('sample-modal1', () => <Dialog1>Modal 1</Dialog1>)
  app.registerModal('sample-modal2', () => <Dialog2>Modal 2</Dialog2>)
  const close = app.showModal('sample-modal1');
  setTimeout(() => {
    close();
    app.showModal('sample-modal2')
  }, 1000);
}
