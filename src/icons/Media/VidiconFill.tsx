import React from "react";
import { Icon, IconProps } from "../Icon";

export type VidiconFillProps = Omit<IconProps, "name">;

export const VidiconFill = (props: VidiconFillProps) => (
  <Icon name="vidicon-fill" {...props} />
);
