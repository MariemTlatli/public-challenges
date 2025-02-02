import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Challenge } from "@/types";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/helpers/axios";
import { AxiosError } from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  challenge: Omit<Challenge, "description"> | undefined;
  onRightSecretSubmitted: (challenge: Challenge) => void;
};

const SecretModal = ({
  isOpen,
  onClose,
  challenge,
  onRightSecretSubmitted,
}: Props) => {
  const [secret, setSecret] = useState("");

  const secretMutation = useMutation<Challenge, AxiosError>({
    mutationKey: ["submit-secret", challenge?.id],
    mutationFn: async () => {
      const res = await Axios.get(`/challenges/${challenge?.id}/${secret}`);
      return res?.data;
    },
    onSuccess: (data: Challenge) => {
      onClose();
      onRightSecretSubmitted(data);
    },
    onError: () => {},
  });

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open: boolean) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent className="overflow-y-auto rounded-lg bg-white p-4 shadow-md transition-all duration-300">
        <DialogHeader>
          <DialogTitle className="my-2 text-2xl font-bold text-gray-600 xl:text-3xl">
            {challenge?.name}
          </DialogTitle>
          <DialogDescription className="w-full">
            {challenge?.hint && (
              <div className=" mb-4 flex items-start gap-2">
                <div className="text-2xl font-medium">🕵 </div>
                <span className="text-lg font-medium text-gray-700">
                  {challenge?.hint}
                </span>
              </div>
            )}
            <div className="flex items-center gap-4 ">
              <Input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="🔐 Enter the secret key"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    secretMutation.mutate();
                  }
                }}
              />

              <Button
                onClick={() => {
                  secretMutation.mutate();
                }}
                disabled={secretMutation.isPending}
              >
                Submit
              </Button>
            </div>
            {secretMutation.error &&
              secretMutation.error?.response?.status === 400 && (
                <p className="mt-2 text-sm text-red-500">Wrong secret</p>
              )}
            {secretMutation.error &&
              secretMutation.error?.response?.status !== 400 && (
                <p className="mt-2 text-sm text-red-500">An Error Occured</p>
              )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SecretModal;
