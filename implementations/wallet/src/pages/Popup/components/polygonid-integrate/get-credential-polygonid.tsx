import React from 'react';
import { Button } from '@mui/material';
import { QRCode } from 'react-qr-svg';

const ShowPolygonIDQR = () => {
  const deployedContractAddress = '0x8689BFaF640410fF9bc0F79b8a864C337CA587bc';

  const qrProofRequestJson = {
    id: '7f38a193-0918-4a48-9fac-36adfdb8b542',
    typ: 'application/iden3comm-plain-json',
    type: 'https://iden3-communication.io/proofs/1.0/contract-invoke-request',
    thid: '7f38a193-0918-4a48-9fac-36adfdb8b542',
    body: {
      reason: 'airdrop participation',
      transaction_data: {
        contract_address: deployedContractAddress,
        method_id: 'b68967e2',
        chain_id: 80001,
        network: 'polygon-mumbai',
      },
      scope: [
        {
          id: 1,
          circuitId: 'credentialAtomicQuerySigV2OnChain',
          query: {
            allowedIssuers: ['*'],
            context:
              'https://raw.githubusercontent.com/taijusanagi/2023-ethtokyo-submission/main/data/eth-tokyo-participant/eth-tokyo-participant.jsonld',
            credentialSubject: {
              isAttended: {
                $eq: true,
              },
            },
            type: 'EthTokyoParticipant',
          },
        },
      ],
    },
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
