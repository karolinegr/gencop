import { Box, Container, Typography } from "@mui/material";

const WaitingPdfComponent = () => {
    return (
        <Box 
                sx={{
                    py: 10,
                    px: 10,
                    backgroundColor: "#B0B0B8",
                    border: "0.15rem dashed #7C7C8A"
                }}
            >
                <Container className="d-flex justify-content-center">
                    <Typography variant="body1" color="#FFECD1">
                        Aguardando geração de PDF
                    </Typography>
                </Container>
            </Box>
      );
}
 
export default WaitingPdfComponent;