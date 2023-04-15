import {
  Button,
  CardActions,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { EthersTransactionRequest } from '../../../Background/services/provider-bridge';
import { TransactionComponentProps } from '../types';

const Transaction = ({
  transaction,
  onComplete,
  onReject,
}: TransactionComponentProps) => {
  const [loader, setLoader] = React.useState<boolean>(false);

  return (
    <>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Grate Gas Grants
        </Typography>
        <Typography
          textAlign="justify"
          variant="body1"
          color="text.secondary"
          gutterBottom
        >
          Grate Gas Grants is an innovative credential-based gas grants service
          that leverages the power of Account Abstraction Paymaster to provide
          users with access to gas grants based on their credentials.
        </Typography>
        <Typography variant="h4">How it works</Typography>
        <Typography textAlign="justify" variant="body1" color="text.secondary">
          Grate Gas Grants is a groundbreaking service that allows users with
          verified credentials to access gas grants and participate in various
          on-chain activities without worrying about gas fees. By leveraging
          PolygonID and Worldcoin for credential verification and enabling
          sponsors to create gas grants, Grate Gas Grants ensures a seamless and
          inclusive experience for users.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack spacing={2} sx={{ width: '100%', maxWidth: '15rem' }}>
          <Button
            disabled={loader}
            size="large"
            variant="contained"
            onClick={() => {
              onComplete(transaction, undefined);
              setLoader(true);
            }}
          >
            Continue
            {loader && (
              <CircularProgress
                size={24}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Button>
        </Stack>
      </CardActions>
    </>
  );
};

export default Transaction;
