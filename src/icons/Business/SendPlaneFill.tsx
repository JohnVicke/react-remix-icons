import React from "react";
import { Icon, IconProps } from "../Icon";

export type SendPlaneFillProps = Omit<IconProps, "name">;

export const SendPlaneFill = (props: SendPlaneFillProps) => (
  <Icon name="send-plane-fill" {...props} />
);
