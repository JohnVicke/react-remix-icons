import React from "react";
import { Icon, IconProps } from "../Icon";

export type Medal2FillProps = Omit<IconProps, "name">;

export const Medal2Fill = (props: Medal2FillProps) => (
  <Icon name="medal-2-fill" {...props} />
);
