import {
  Box,
  CircularProgress,
  Container,
  Link as MUILink,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { AddButton } from "../components/atoms/AddButton";
import { NotFound } from "../components/atoms/NotFound";
import { UserHeader } from "../components/molecules/UserHeader";
import { CreateProduct } from "../components/organisms/CreateProduct";
import { EditProduct } from "../components/organisms/EditProduct";
import { ProductsList } from "../components/organisms/ProductsList";
import { useActiveUser } from "../hooks/useActiveUser";
import { useCreateProductModal } from "../hooks/useCreateProductModal";
import { useProducts } from "../hooks/useProducts";

export function UserPage() {
  const { activeUser, isLoading, error } = useActiveUser();
  const { products, isLoading: isProductsLoading } = useProducts();
  const { open } = useCreateProductModal();

  const wrapperClassname = clsx(
    "flex",
    products.length === 0 ? "flex-col" : "flex-col-reverse"
  );

  function renderBody() {
    if (error) return <NotFound>такого пользователя нет</NotFound>;
    return (
      <Box className="flex flex-col gap-4">
        <UserHeader user={activeUser!} />
        <Typography variant="h5">Продукты:</Typography>
        <Box className={wrapperClassname}>
          <ProductsList />
          {!isProductsLoading && (
            <AddButton onClick={open}>Добавить продукт</AddButton>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <Container>
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
    </Container>
  );
}
