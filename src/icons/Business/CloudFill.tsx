import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloudFillProps = Omit<IconProps, "name">;

export const CloudFill = (props: CloudFillProps) => (
  <Icon name="cloud-fill" {...props} />
);
