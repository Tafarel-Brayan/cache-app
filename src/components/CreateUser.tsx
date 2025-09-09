// components/CreateUser.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../Services/UserService";
import { Button } from "@mui/material";

export function CreateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      // Atualiza cache manualmente sem refetch
      queryClient.setQueryData<any[]>(["users"], (old = []) => [
        ...old,
        newUser,
      ]);
    },
  });

  return (
    <Button
      variant="contained"
      color="inherit"
      onClick={() =>
        mutation.mutate({ name: "Novo Usuário", email: "novo@teste.com" })
      }
    >
      Criar usuário
    </Button>
  );
}
