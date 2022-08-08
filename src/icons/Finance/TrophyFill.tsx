import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrophyFillProps = Omit<IconProps, "name">;

export const TrophyFill = (props: TrophyFillProps) => (
  <Icon name="trophy-fill" {...props} />
);
