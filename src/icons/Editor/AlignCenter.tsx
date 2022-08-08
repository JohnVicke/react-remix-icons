import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlignCenterProps = Omit<IconProps, "name">;

export const AlignCenter = (props: AlignCenterProps) => (
  <Icon name="align-center" {...props} />
);
