import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlashlightFillProps = Omit<IconProps, "name">;

export const FlashlightFill = (props: FlashlightFillProps) => (
  <Icon name="flashlight-fill" {...props} />
);
