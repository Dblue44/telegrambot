import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Container from "@mui/material/Container";

export const CasesSkeleton = () => {
    return (
        <>
            <Container maxWidth="xs">
                <Skeleton
                    variant="text" width={390} height={20}
                />
                <Skeleton
                    variant="rounded" width={390} height={360}
                />
            </Container>
        </>
    );
};

export default CasesSkeleton;