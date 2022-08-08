import React from "react";
import { Icon, IconProps } from "../Icon";

export type Anticlockwise2FillProps = Omit<IconProps, "name">;

export const Anticlockwise2Fill = (props: Anticlockwise2FillProps) => (
  <Icon name="anticlockwise-2-fill" {...props} />
);
