import React from "react";
import { Icon, IconProps } from "../Icon";

export type AmazonFillProps = Omit<IconProps, "name">;

export const AmazonFill = (props: AmazonFillProps) => (
  <Icon name="amazon-fill" {...props} />
);
