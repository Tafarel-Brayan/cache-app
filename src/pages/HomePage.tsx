import { Box, Button, Container, Divider, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { CreateUser } from "../components/CreateUser";
import { RefreshUsers } from "../components/RefreshUsers";
import { UserDetail } from "../components/UserDetail";
import { UserList } from "../components/UserList";

export const HomePage = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleUserClick = () => navigate("/profile");

  return (
    <Container maxWidth="md">
      <h1>Home Page</h1>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        marginBottom={"20px"}
      >
        <Button variant="contained" onClick={() => setShow(!show)}>
          {show ? "Unmount Users" : "Mount Users"}
        </Button>

        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleUserClick()}
        >
          Profile Page
        </Button>
        <CreateUser />
        <RefreshUsers />
      </Stack>

      <Stack spacing={2} direction="row">
        {show && (
          <Box borderRight={"1px solid black"} width={"50%"}>
            <h1>Lista de Usuários</h1>
            <UserList onSelect={setSelectedUserId} />
          </Box>
        )}
        <Box width={"50%"}>
          <h1>
            Detalhes
            <Divider />
          </h1>
          {selectedUserId ? (
            <UserDetail id={selectedUserId} />
          ) : (
            <p>Selecione um usuário na lista.</p>
          )}
        </Box>
      </Stack>
    </Container>
  );
};
