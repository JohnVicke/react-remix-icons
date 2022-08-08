import React from "react";
import { Icon, IconProps } from "../Icon";

export type HandbagLineProps = Omit<IconProps, "name">;

export const HandbagLine = (props: HandbagLineProps) => (
  <Icon name="handbag-line" {...props} />
);
