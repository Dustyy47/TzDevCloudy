import { Box, Button, Typography } from "@material-ui/core";
import { useDeleteProductModal } from "../../hooks/useDeleteProductModal";
import CustomModal from "../atoms/CustomModal";

export function DeleteProduct() {
  const { isOpen, close, submit } = useDeleteProductModal();

  return (
    <CustomModal open={isOpen} onClose={close}>
      <>
        <Typography>Удалить продукт?</Typography>
        <Box>
          <Button onClick={close}>Нет</Button>
          <Button onClick={submit}>Да</Button>
        </Box>
      </>
    </CustomModal>
  );
}
