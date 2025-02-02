import { Challenge } from "@/types";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { AiOutlineNumber } from "react-icons/ai";
import ChallengeModal from "./ChallengeModal";
import SecretModal from "./SecretModal";
import clsx from "clsx";
import { CiLock } from "react-icons/ci";

type Props = {
  challenges: Challenge[] | undefined;
};

const ChallengesList = ({ challenges }: Props) => {
  const [selectedChallenge, setSelectedChallenge] = useState<
    Challenge | undefined
  >(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecretModalOpen, setIsSecretModalOpen] = useState(false);

  const modalref = useRef(null);

  useOnClickOutside(modalref, handleCloseModal);

  function handleSelectChallenge(challenge: Challenge) {
    setSelectedChallenge(challenge);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    // setSelectedChallenge(undefined);
  }

  function handleRequireSecureModal(challenge: Challenge) {
    setIsSecretModalOpen(true);
    setSelectedChallenge(challenge);
  }

  function handleRightSecretSubmitted(challenge: Challenge) {
    setSelectedChallenge(challenge);
    setIsModalOpen(true);
  }

  return (
    <motion.div className="mt-4 w-full">
      <div className=" w-full space-y-6">
        {challenges?.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            className={clsx(
              `w-full transform cursor-pointer rounded-lg border bg-white p-5 shadow-md transition-transform duration-100 `,
              {
                "shadow-xl": !challenge?.description,
              },
            )}
            layoutId={`card-container-${challenge.id}`}
            onClick={() =>
              challenge?.description
                ? handleSelectChallenge(challenge)
                : handleRequireSecureModal(challenge)
            }
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.15 * index, duration: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex w-full items-center justify-between">
              <div>
                <div className="flex items-start gap-2">
                  {!challenge?.description && <CiLock className="size-7" />}
                  <motion.h2
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="mb-2 text-2xl font-semibold text-gray-800"
                  >
                    {challenge.name}
                  </motion.h2>
                </div>
                <motion.h5 className="mt-4 w-fit rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-white">
                  Points: {challenge.points}
                </motion.h5>
              </div>
              <div
                className="flex items-end gap-1 text-gray-600"
                title={`challenge number ${challenge.number}`}
              >
                <AiOutlineNumber className="size-6" />
                <span className="text-2xl font-semibold">
                  {challenge.number}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ChallengeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        challenge={selectedChallenge as Challenge}
      />
      <SecretModal
        isOpen={isSecretModalOpen}
        onClose={() => setIsSecretModalOpen(false)}
        challenge={selectedChallenge}
        onRightSecretSubmitted={handleRightSecretSubmitted}
      />
    </motion.div>
  );
};

export default ChallengesList;
