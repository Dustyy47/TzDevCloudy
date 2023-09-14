import {
  Box,
  CircularProgress,
  Container,
  Link as MUILink,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AddButton } from "../components/AddButton";
import { CreateProduct } from "../components/CreateProduct";
import { EditProduct } from "../components/EditProduct";
import { NotFound } from "../components/NotFound";
import { ProductsList } from "../components/ProductsList";
import { UserHeader } from "../components/UserHeader";
import { useActiveUser } from "../hooks/useActiveUser";
import { useCreateProductModal } from "../hooks/useCreateProductModal";
import { useProducts } from "../hooks/useProducts";

export function UserScreen() {
  const { activeUser, isLoading, error } = useActiveUser();
  const { isLoading: isProductsLoading } = useProducts();
  const { open } = useCreateProductModal();

  function renderBody() {
    if (error) return <NotFound>такого пользователя нет</NotFound>;
    return (
      <Box className="flex flex-col gap-4">
        <UserHeader user={activeUser!} />
        <Typography variant="h5">Продукты:</Typography>
        <Box>
          {!isProductsLoading && (
            <AddButton onClick={open}>Добавить продукт</AddButton>
          )}
          <ProductsList />
        </Box>
      </Box>
    );
  }

  return (
    <Container>
      <>
        {!isLoading ? (
          <Box className="flex flex-col gap-2">
            <MUILink variant="subtitle1" to="/users" component={Link}>
              Назад
            </MUILink>
            {renderBody()}
          </Box>
        ) : (
          <CircularProgress />
        )}
        <CreateProduct />
        <EditProduct />
      </>
    </Container>
  );
}
