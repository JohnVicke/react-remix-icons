import React from "react";
import { Icon, IconProps } from "../Icon";

export type SendPlaneLineProps = Omit<IconProps, "name">;

export const SendPlaneLine = (props: SendPlaneLineProps) => (
  <Icon name="send-plane-line" {...props} />
);
