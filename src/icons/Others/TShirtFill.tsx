import React from "react";
import { Icon, IconProps } from "../Icon";

export type TShirtFillProps = Omit<IconProps, "name">;

export const TShirtFill = (props: TShirtFillProps) => (
  <Icon name="t-shirt-fill" {...props} />
);
