import React from "react";
import { Icon, IconProps } from "../Icon";

export type StrikethroughProps = Omit<IconProps, "name">;

export const Strikethrough = (props: StrikethroughProps) => (
  <Icon name="strikethrough" {...props} />
);
