import React from "react";
import { Icon, IconProps } from "../Icon";

export type SipFillProps = Omit<IconProps, "name">;

export const SipFill = (props: SipFillProps) => (
  <Icon name="sip-fill" {...props} />
);
