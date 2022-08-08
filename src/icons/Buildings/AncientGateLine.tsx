import React from "react";
import { Icon, IconProps } from "../Icon";

export type AncientGateLineProps = Omit<IconProps, "name">;

export const AncientGateLine = (props: AncientGateLineProps) => (
  <Icon name="ancient-gate-line" {...props} />
);
