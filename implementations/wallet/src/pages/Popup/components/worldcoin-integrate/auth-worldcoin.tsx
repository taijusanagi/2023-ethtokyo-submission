import { CredentialType, IDKitWidget, ISuccessResult } from '@worldcoin/idkit';
import React from 'react';
import { Button } from '@mui/material';

interface AuthWorldCoinProps {
  onSuccess: (result: ISuccessResult) => void;
}

const AuthWorldCoin = ({ onSuccess }: AuthWorldCoinProps) => {
  const handleProof = (result: ISuccessResult) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 3000);
      // NOTE: Example of how to decline the verification request and show an error message to the user
    });
  };

  const urlParams = new URLSearchParams(window.location.search);
  const credential_types = (urlParams
    .get('credential_types')
    ?.split(',') as CredentialType[]) ?? [
    CredentialType.Orb,
    CredentialType.Phone,
  ];

  const action = urlParams.get('action') ?? '';
  const app_id = 'app_ef65ea5d4812926b8e06a76a2fcd1e98';

  return (
    <IDKitWidget
      action={action}
      signal="0x50f4c3dD6958a9f8267dA4Ded7446632F5C28D4f"
      onSuccess={onSuccess}
      handleVerify={handleProof}
      app_id={app_id}
      credential_types={credential_types}
      // walletConnectProjectId="get_this_from_walletconnect_portal"
    >
      {({ open }) => <Button onClick={open}>Verify you're human</Button>}
    </IDKitWidget>
  );
};

export default AuthWorldCoin;
