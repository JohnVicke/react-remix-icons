import React from "react";
import { Icon, IconProps } from "../Icon";

export type InformationFillProps = Omit<IconProps, "name">;

export const InformationFill = (props: InformationFillProps) => (
  <Icon name="information-fill" {...props} />
);
