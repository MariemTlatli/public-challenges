import clsx from "clsx";
import { CardBody, CardContainer, CardItem } from "./animated/3d-card";
import { Team } from "@/types";

type Props = {
  isFirst?: boolean;
  isSecond?: boolean;
  isThird?: boolean;
  team: Team;
};

export function LeaderboardTeam({ team, isFirst, isSecond, isThird }: Props) {
  return (
    <CardContainer className="inter-var w-full md:max-w-4xl">
      <CardBody
        className={clsx(
          "group/card from- relative h-auto rounded-xl border bg-gray-50 p-2 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:p-6",
          {
            "bg-gradient-to-r from-[#855628] to-yellow-500 py-8 sm:py-16":
              isFirst,
            "bg-gradient-to-r from-[#4D4855] to-[#A399B2] py-6 sm:py-10":
              isSecond,
            "bg-gradient-to-r from-yellow-200 to-yellow-100 py-4 sm:py-8":
              isThird,
            "bg-slate-200": !isFirst && !isSecond && !isThird,
          },
        )}
      >
        <div className="flex items-center justify-between px-8">
          <CardItem
            translateZ="50"
            className={clsx(
              "text-xl font-bold text-neutral-600 dark:text-white",
              {
                "text-2xl text-white sm:text-3xl": isFirst,
                "text-lg text-white sm:text-2xl": isSecond,
                "text-yellow-700": isThird,
              },
            )}
          >
            {team.name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className={clsx(
              "mt-2 text-xl font-medium text-neutral-500 dark:text-neutral-300",
              {
                "text-2xl text-white sm:text-3xl": isFirst,
                "text-white": !isFirst && isSecond,
                "text-yellow-700": isThird,
                "text-slate-700": !isFirst && !isSecond && !isThird,
              },
            )}
          >
            {team.score}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
