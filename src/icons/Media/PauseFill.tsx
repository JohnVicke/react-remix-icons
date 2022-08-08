import React from "react";
import { Icon, IconProps } from "../Icon";

export type PauseFillProps = Omit<IconProps, "name">;

export const PauseFill = (props: PauseFillProps) => (
  <Icon name="pause-fill" {...props} />
);
