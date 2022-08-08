import React from "react";
import { Icon, IconProps } from "../Icon";

export type Medal2LineProps = Omit<IconProps, "name">;

export const Medal2Line = (props: Medal2LineProps) => (
  <Icon name="medal-2-line" {...props} />
);
