import React from "react";
import { Icon, IconProps } from "../Icon";

export type AncientGateFillProps = Omit<IconProps, "name">;

export const AncientGateFill = (props: AncientGateFillProps) => (
  <Icon name="ancient-gate-fill" {...props} />
);
