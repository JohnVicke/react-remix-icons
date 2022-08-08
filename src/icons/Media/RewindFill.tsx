import React from "react";
import { Icon, IconProps } from "../Icon";

export type RewindFillProps = Omit<IconProps, "name">;

export const RewindFill = (props: RewindFillProps) => (
  <Icon name="rewind-fill" {...props} />
);
