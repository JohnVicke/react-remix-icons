import React from "react";
import { Icon, IconProps } from "../Icon";

export type InvisionFillProps = Omit<IconProps, "name">;

export const InvisionFill = (props: InvisionFillProps) => (
  <Icon name="invision-fill" {...props} />
);
