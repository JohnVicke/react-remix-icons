import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlashlightLineProps = Omit<IconProps, "name">;

export const FlashlightLine = (props: FlashlightLineProps) => (
  <Icon name="flashlight-line" {...props} />
);
