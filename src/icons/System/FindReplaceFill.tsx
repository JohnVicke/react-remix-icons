import React from "react";
import { Icon, IconProps } from "../Icon";

export type FindReplaceFillProps = Omit<IconProps, "name">;

export const FindReplaceFill = (props: FindReplaceFillProps) => (
  <Icon name="find-replace-fill" {...props} />
);
