import React from "react";
import { Icon, IconProps } from "../Icon";

export type TShirt2FillProps = Omit<IconProps, "name">;

export const TShirt2Fill = (props: TShirt2FillProps) => (
  <Icon name="t-shirt-2-fill" {...props} />
);
