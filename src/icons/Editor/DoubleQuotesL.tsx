import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoubleQuotesLProps = Omit<IconProps, "name">;

export const DoubleQuotesL = (props: DoubleQuotesLProps) => (
  <Icon name="double-quotes-l" {...props} />
);
