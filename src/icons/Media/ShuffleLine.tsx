import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShuffleLineProps = Omit<IconProps, "name">;

export const ShuffleLine = (props: ShuffleLineProps) => (
  <Icon name="shuffle-line" {...props} />
);
