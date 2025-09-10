// components/UserDetail.tsx
import {
  Box,
  Typography
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

export function UserDetail({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const user = queryClient
    .getQueryData<any[]>(["users"])
    ?.find((u) => u.id === id);
  console.log(user);

  if (!user) return <p>Usuário não encontrado no cache.</p>;

  return (
    <Box>
      <Typography variant="h3">{user.name}</Typography>
      <Typography variant="body1">
        {user.username} - {user.email}
      </Typography>
      <Typography variant="body2">{user.phone}</Typography>
      <Typography variant="body2">{user.website}</Typography>
    </Box>
  );
}
