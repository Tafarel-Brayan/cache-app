import { Button } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { CreateUser } from "../components/CreateUser";

export const ProfilePage = () => {
  const queryClient = useQueryClient();
  const cachedUsers = queryClient.getQueryData(["users"]);
  const navigate = useNavigate();

  const handleUserClick = () => navigate("/");

  return (
    <div>
      <h2>Profile</h2>
      <Button
        variant="contained"
        type="button"
        color="secondary"
        onClick={() => handleUserClick()}
      >
        Home
      </Button>{" "}
      <CreateUser />
      <pre>{JSON.stringify(cachedUsers, null, 2)}</pre>
    </div>
  );
};
