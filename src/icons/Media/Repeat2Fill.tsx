import React from "react";
import { Icon, IconProps } from "../Icon";

export type Repeat2FillProps = Omit<IconProps, "name">;

export const Repeat2Fill = (props: Repeat2FillProps) => (
  <Icon name="repeat-2-fill" {...props} />
);
