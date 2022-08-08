import React from "react";
import { Icon, IconProps } from "../Icon";

export type SendPlane2FillProps = Omit<IconProps, "name">;

export const SendPlane2Fill = (props: SendPlane2FillProps) => (
  <Icon name="send-plane-2-fill" {...props} />
);
