import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlignVerticallyProps = Omit<IconProps, "name">;

export const AlignVertically = (props: AlignVerticallyProps) => (
  <Icon name="align-vertically" {...props} />
);
