import React from "react";
import { Icon, IconProps } from "../Icon";

export type AppsFillProps = Omit<IconProps, "name">;

export const AppsFill = (props: AppsFillProps) => (
  <Icon name="apps-fill" {...props} />
);
