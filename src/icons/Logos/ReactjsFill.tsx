import React from "react";
import { Icon, IconProps } from "../Icon";

export type ReactjsFillProps = Omit<IconProps, "name">;

export const ReactjsFill = (props: ReactjsFillProps) => (
  <Icon name="reactjs-fill" {...props} />
);
