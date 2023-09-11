import {
  Box,
  CircularProgress,
  Container,
  Link as MUILink,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserHeader } from "../components/UserHeader";
import { useActiveUser } from "../hooks/useActiveUser";

export function UserScreen() {
  const { activeUser, isLoading } = useActiveUser();

  return (
    <Container>
      <>
        {!isLoading ? (
          <Box>
            <Box className="mb-2">
              <MUILink variant="subtitle1" to="/users" component={Link}>
                Назад
              </MUILink>
            </Box>
            <UserHeader user={activeUser!} />
          </Box>
        ) : (
          <CircularProgress />
        )}
      </>
    </Container>
  );
}
