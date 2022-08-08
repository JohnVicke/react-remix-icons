import React from "react";
import { Icon, IconProps } from "../Icon";

export type Apps2FillProps = Omit<IconProps, "name">;

export const Apps2Fill = (props: Apps2FillProps) => (
  <Icon name="apps-2-fill" {...props} />
);
