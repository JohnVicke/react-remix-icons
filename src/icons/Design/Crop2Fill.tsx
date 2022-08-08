import React from "react";
import { Icon, IconProps } from "../Icon";

export type Crop2FillProps = Omit<IconProps, "name">;

export const Crop2Fill = (props: Crop2FillProps) => (
  <Icon name="crop-2-fill" {...props} />
);
