import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Challenge } from "@/types";
import { motion } from "framer-motion";
import Markdown from "@uiw/react-markdown-preview";
import remarkGfm from "remark-gfm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  challenge: Challenge | undefined;
};

const ChallengeModal = ({ isOpen, onClose, challenge }: Props) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open: boolean) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent className="mx-auto h-[75vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-md transition-all duration-300 md:h-[90vh] md:max-w-5xl xl:max-w-6xl">
        <DialogHeader>
          <DialogTitle className="my-2 mb-4 border-b pb-4">
            <h3 className="text-xl font-bold text-gray-600 md:text-3xl xl:text-4xl">
              {challenge?.name}
            </h3>
            <div className="mb-3 ml-2 mt-2 text-3xl tracking-wide text-blue-800">
              #{challenge?.number}
            </div>
            <div className="mb-3 w-fit rounded-full bg-green-500 px-2 py-1 text-[1.2rem] font-semibold text-white">
              Points: {challenge?.points}
            </div>
          </DialogTitle>
          <DialogDescription className="w-full md:px-6 ">
            {/* <h3 className="mb-2 text-2xl font-semibold text-gray-800">
              Description
            </h3> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-full text-lg text-gray-700 lg:max-w-4xl"
              data-color-mode="light"
            >
              <Markdown
                source={challenge?.description}
                remarkPlugins={[remarkGfm]}
              />
            </motion.div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ChallengeModal;
