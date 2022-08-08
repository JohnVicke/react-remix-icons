import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrophyLineProps = Omit<IconProps, "name">;

export const TrophyLine = (props: TrophyLineProps) => (
  <Icon name="trophy-line" {...props} />
);
