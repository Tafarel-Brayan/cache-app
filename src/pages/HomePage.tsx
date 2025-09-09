import { useState } from "react";
import { UserList } from "../components/UserList";
import { CreateUser } from "../components/CreateUser";
import { RefreshUsers } from "../components/RefreshUsers";
import { UserDetail } from "../components/UserDetail";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleUserClick = () => navigate("/profile");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
        }}
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
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
        {show && (
          <div>
            <h1>Lista de Usuários</h1>
            <UserList onSelect={setSelectedUserId} />
          </div>
        )}
        <div>
          <h1>Detalhes</h1>
          {selectedUserId ? (
            <UserDetail id={selectedUserId} />
          ) : (
            <p>Selecione um usuário na lista.</p>
          )}
        </div>
      </div>
      <div>
        <CreateUser />
        <RefreshUsers />
      </div>
    </div>
  );
};
