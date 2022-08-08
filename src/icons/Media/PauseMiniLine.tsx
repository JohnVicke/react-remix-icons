import React from "react";
import { Icon, IconProps } from "../Icon";

export type PauseMiniLineProps = Omit<IconProps, "name">;

export const PauseMiniLine = (props: PauseMiniLineProps) => (
  <Icon name="pause-mini-line" {...props} />
);
