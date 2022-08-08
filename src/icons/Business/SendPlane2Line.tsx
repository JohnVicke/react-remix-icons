import React from "react";
import { Icon, IconProps } from "../Icon";

export type SendPlane2LineProps = Omit<IconProps, "name">;

export const SendPlane2Line = (props: SendPlane2LineProps) => (
  <Icon name="send-plane-2-line" {...props} />
);
