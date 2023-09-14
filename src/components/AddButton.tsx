import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

export function AddButton({
  onClick,
  children,
}: {
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}) {
  return (
    <Button onClick={onClick} className="flex items-center max-w-fit p-2">
      <Typography color="primary" className="h-full leading-none">
        {children}
      </Typography>
      <AddIcon color="primary" className="-translate-y-0.5" />
    </Button>
  );
}
