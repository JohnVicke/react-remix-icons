import React from "react";
import { Icon, IconProps } from "../Icon";

export type FindReplaceLineProps = Omit<IconProps, "name">;

export const FindReplaceLine = (props: FindReplaceLineProps) => (
  <Icon name="find-replace-line" {...props} />
);
