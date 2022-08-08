import React from "react";
import { Icon, IconProps } from "../Icon";

export type Anticlockwise2LineProps = Omit<IconProps, "name">;

export const Anticlockwise2Line = (props: Anticlockwise2LineProps) => (
  <Icon name="anticlockwise-2-line" {...props} />
);
