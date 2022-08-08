import React from "react";
import { Icon, IconProps } from "../Icon";

export type TShirtLineProps = Omit<IconProps, "name">;

export const TShirtLine = (props: TShirtLineProps) => (
  <Icon name="t-shirt-line" {...props} />
);
