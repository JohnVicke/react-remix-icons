import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoubleQuotesRProps = Omit<IconProps, "name">;

export const DoubleQuotesR = (props: DoubleQuotesRProps) => (
  <Icon name="double-quotes-r" {...props} />
);
