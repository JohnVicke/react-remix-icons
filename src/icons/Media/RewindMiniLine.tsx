import React from "react";
import { Icon, IconProps } from "../Icon";

export type RewindMiniLineProps = Omit<IconProps, "name">;

export const RewindMiniLine = (props: RewindMiniLineProps) => (
  <Icon name="rewind-mini-line" {...props} />
);
