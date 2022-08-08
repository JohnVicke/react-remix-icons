import React from "react";
import { Icon, IconProps } from "../Icon";

export type SnapchatFillProps = Omit<IconProps, "name">;

export const SnapchatFill = (props: SnapchatFillProps) => (
  <Icon name="snapchat-fill" {...props} />
);
