import React from "react";
import { Icon, IconProps } from "../Icon";

export type InformationLineProps = Omit<IconProps, "name">;

export const InformationLine = (props: InformationLineProps) => (
  <Icon name="information-line" {...props} />
);
