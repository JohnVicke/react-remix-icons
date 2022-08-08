import React from "react";
import { Icon, IconProps } from "../Icon";

export type Crop2LineProps = Omit<IconProps, "name">;

export const Crop2Line = (props: Crop2LineProps) => (
  <Icon name="crop-2-line" {...props} />
);
