import React from "react";
import { Icon, IconProps } from "../Icon";

export type CentosFillProps = Omit<IconProps, "name">;

export const CentosFill = (props: CentosFillProps) => (
  <Icon name="centos-fill" {...props} />
);
