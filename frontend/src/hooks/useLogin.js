import { useQueryClient, useMutation } from "@tanstack/react-query"
import { login } from "../lib/api";

export const useLogin = () => {
   const queryClient = useQueryClient();

   const {mutate, error,isPending} = useMutation({
        mutationFn: login,
        onSuccess : () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
        
   })
   return {isPending , error , loginMutation: mutate }
   
}