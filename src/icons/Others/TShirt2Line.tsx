import React from "react";
import { Icon, IconProps } from "../Icon";

export type TShirt2LineProps = Omit<IconProps, "name">;

export const TShirt2Line = (props: TShirt2LineProps) => (
  <Icon name="t-shirt-2-line" {...props} />
);
