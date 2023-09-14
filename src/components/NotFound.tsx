import { Box, Typography } from "@material-ui/core";
import React from "react";

export function NotFound({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Typography variant="h3" className="text-gray-500">
        404
      </Typography>
      {children}
    </Box>
  );
}
