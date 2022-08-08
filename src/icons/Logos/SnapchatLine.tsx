import React from "react";
import { Icon, IconProps } from "../Icon";

export type SnapchatLineProps = Omit<IconProps, "name">;

export const SnapchatLine = (props: SnapchatLineProps) => (
  <Icon name="snapchat-line" {...props} />
);
