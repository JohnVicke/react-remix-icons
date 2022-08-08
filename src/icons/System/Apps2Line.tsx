import React from "react";
import { Icon, IconProps } from "../Icon";

export type Apps2LineProps = Omit<IconProps, "name">;

export const Apps2Line = (props: Apps2LineProps) => (
  <Icon name="apps-2-line" {...props} />
);
