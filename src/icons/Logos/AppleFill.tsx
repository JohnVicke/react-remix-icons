import React from "react";
import { Icon, IconProps } from "../Icon";

export type AppleFillProps = Omit<IconProps, "name">;

export const AppleFill = (props: AppleFillProps) => (
  <Icon name="apple-fill" {...props} />
);
