import React from "react";
import { Icon, IconProps } from "../Icon";

export type PauseLineProps = Omit<IconProps, "name">;

export const PauseLine = (props: PauseLineProps) => (
  <Icon name="pause-line" {...props} />
);
