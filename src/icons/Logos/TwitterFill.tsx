import React from "react";
import { Icon, IconProps } from "../Icon";

export type TwitterFillProps = Omit<IconProps, "name">;

export const TwitterFill = (props: TwitterFillProps) => (
  <Icon name="twitter-fill" {...props} />
);
