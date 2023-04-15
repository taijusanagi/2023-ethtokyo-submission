import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import QRCode from "react-qr-code";

export default function VerificationForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom textAlign="center">
                Scan with your Polygon Wallet
            </Typography>
            <Grid container spacing={3} textAlign="center" sx={{ mt: "1rem" }}>
                <Grid item xs={12} md={12} textAlign="center">
                    <QRCode
                        title="Polygonid"
                        value={
                            '{"id":"18e19e71-736d-407e-9c80-87663587b38e","typ":"application/iden3comm-plain-json","type":"https://iden3-communication.io/credentials/1.0/offer","thid":"18e19e71-736d-407e-9c80-87663587b38e","body":{"url":"https://self-hosted-platform.polygonid.me/v1/agent","credentials":[{"id":"29fd9b54-dbe3-11ed-b7df-0242c0a88005","description":"EthTokyoParticipant"}]},"from":"did:polygonid:polygon:mumbai:2qH7XAwYQzCp9VfhpNgeLtK2iCehDDrfMWUCEg5ig5","to":"did:polygonid:polygon:mumbai:2qEtS9NPWCL1ZPS9z7BtgeRNJHc8GuHgz4XUQ6jXuG"}'
                        }
                        bgColor={"#FFFFFF"}
                        fgColor={"#000000"}
                        size={256}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
