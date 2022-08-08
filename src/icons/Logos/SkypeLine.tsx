import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkypeLineProps = Omit<IconProps, "name">;

export const SkypeLine = (props: SkypeLineProps) => (
  <Icon name="skype-line" {...props} />
);
