import React from 'react';
import { QRCode } from 'react-qr-svg';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const PolygonIDQR = () => {
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

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button onClick={handleOpen}>Polygon ID Credential</Button>
      <Modal
        open={isShow}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}
      > 
        <Box sx={style}>
          <h2 id="simple-modal-title">ETHTokyo Participants</h2>
          <PolygonIDQR />
          <Button variant="contained" color="secondary" onClick={handleClose} style={{ marginTop: '16px' }}>
            Close Modal
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default GetCredentialPolygonID;
