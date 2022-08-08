import React from "react";
import { Icon, IconProps } from "../Icon";

export type PauseMiniFillProps = Omit<IconProps, "name">;

export const PauseMiniFill = (props: PauseMiniFillProps) => (
  <Icon name="pause-mini-fill" {...props} />
);
