import React from "react";
import { Icon, IconProps } from "../Icon";

export type RewindMiniFillProps = Omit<IconProps, "name">;

export const RewindMiniFill = (props: RewindMiniFillProps) => (
  <Icon name="rewind-mini-fill" {...props} />
);
