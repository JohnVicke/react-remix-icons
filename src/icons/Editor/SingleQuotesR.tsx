import React from "react";
import { Icon, IconProps } from "../Icon";

export type SingleQuotesRProps = Omit<IconProps, "name">;

export const SingleQuotesR = (props: SingleQuotesRProps) => (
  <Icon name="single-quotes-r" {...props} />
);
