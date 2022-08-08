import React from "react";
import { Icon, IconProps } from "../Icon";

export type HandbagFillProps = Omit<IconProps, "name">;

export const HandbagFill = (props: HandbagFillProps) => (
  <Icon name="handbag-fill" {...props} />
);
