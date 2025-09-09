// Exemplo de botão para forçar refetch
import { Button } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

export function RefreshUsers() {
  const queryClient = useQueryClient();

  return (
    <Button
    variant="outlined"
    color="success"
      onClick={() => queryClient.invalidateQueries({ queryKey: ["users"] })}
    >
      Atualizar lista de usuários
    </Button>
  );
}
