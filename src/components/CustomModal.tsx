import { Box, Modal, ModalProps } from "@material-ui/core";

interface ICustomModalProps extends ModalProps {}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "white",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  transition: ".3s",
};

export function CustomModal({ children, ...props }: ICustomModalProps) {
  return (
    <Modal {...props}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}

export default CustomModal;
