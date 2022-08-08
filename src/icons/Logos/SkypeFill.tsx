import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkypeFillProps = Omit<IconProps, "name">;

export const SkypeFill = (props: SkypeFillProps) => (
  <Icon name="skype-fill" {...props} />
);
