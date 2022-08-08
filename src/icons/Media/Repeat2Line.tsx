import React from "react";
import { Icon, IconProps } from "../Icon";

export type Repeat2LineProps = Omit<IconProps, "name">;

export const Repeat2Line = (props: Repeat2LineProps) => (
  <Icon name="repeat-2-line" {...props} />
);
