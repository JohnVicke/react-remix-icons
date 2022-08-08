import React from "react";
import { Icon, IconProps } from "../Icon";

export type VidiconLineProps = Omit<IconProps, "name">;

export const VidiconLine = (props: VidiconLineProps) => (
  <Icon name="vidicon-line" {...props} />
);
