import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import QRCode from 'react-qr-code';


export default function VerificationForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom textAlign="center">
                Scan with your Polygon Wallet
            </Typography>
            <Grid container spacing={3} textAlign="center" sx={{ mt: '1rem' }}>
                <Grid item xs={12} md={12} textAlign="center">
                    <QRCode
                        title="Polygonid"
                        value={'{"id":"99d71b23-3679-43a8-8442-7fbdf6fe6248","typ":"application/iden3comm-plain-json","type":"https://iden3-communication.io/credentials/1.0/offer","thid":"99d71b23-3679-43a8-8442-7fbdf6fe6248","body":{"url":"https://self-hosted-platform.polygonid.me/v1/agent","credentials":[{"id":"0954e779-db63-11ed-b7df-0242c0a88005","description":"EthTokyoParticipant"}]},"from":"did:polygonid:polygon:mumbai:2qH7XAwYQzCp9VfhpNgeLtK2iCehDDrfMWUCEg5ig5","to":"did:polygonid:polygon:mumbai:2qEtS9NPWCL1ZPS9z7BtgeRNJHc8GuHgz4XUQ6jXuG"}'}
                        bgColor={'#FFFFFF'}
                        fgColor={'#000000'}
                        size={256}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}