import React from 'react';
import { Button } from '@mui/material';
import { QRCode } from 'react-qr-svg';

const ShowPolygonIDQR = () => {
  const qrProofRequestJson = {
    id: '99d71b23-3679-43a8-8442-7fbdf6fe6248',
    typ: 'application/iden3comm-plain-json',
    type: 'https://iden3-communication.io/credentials/1.0/offer',
    thid: '99d71b23-3679-43a8-8442-7fbdf6fe6248',
    body: {
      url: 'https://self-hosted-platform.polygonid.me/v1/agent',
      credentials: [
        {
          id: '0954e779-db63-11ed-b7df-0242c0a88005',
          description: 'EthTokyoParticipant',
        },
      ],
    },
    from: 'did:polygonid:polygon:mumbai:2qH7XAwYQzCp9VfhpNgeLtK2iCehDDrfMWUCEg5ig5',
    to: 'did:polygonid:polygon:mumbai:2qEtS9NPWCL1ZPS9z7BtgeRNJHc8GuHgz4XUQ6jXuG',
  };
  return (
    <QRCode
      level="Q"
      style={{ width: 256 }}
      value={JSON.stringify(qrProofRequestJson)}
    />
  );
};
const GetCredentialPolygonID = () => {
  const [isShow, setShow] = React.useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      <Button onClick={handleClick}>Get PolygonID Credential</Button>
      {isShow && <ShowPolygonIDQR />}
    </>
  );
};

export default GetCredentialPolygonID;
