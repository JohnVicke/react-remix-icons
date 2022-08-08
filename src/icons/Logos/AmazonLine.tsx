import React from "react";
import { Icon, IconProps } from "../Icon";

export type AmazonLineProps = Omit<IconProps, "name">;

export const AmazonLine = (props: AmazonLineProps) => (
  <Icon name="amazon-line" {...props} />
);
