import React from "react";
import { Icon, IconProps } from "../Icon";

export type SingleQuotesLProps = Omit<IconProps, "name">;

export const SingleQuotesL = (props: SingleQuotesLProps) => (
  <Icon name="single-quotes-l" {...props} />
);
