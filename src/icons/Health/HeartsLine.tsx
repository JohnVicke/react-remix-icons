import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeartsLineProps = Omit<IconProps, "name">;

export const HeartsLine = (props: HeartsLineProps) => (
  <Icon name="hearts-line" {...props} />
);
