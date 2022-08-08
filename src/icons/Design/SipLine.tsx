import React from "react";
import { Icon, IconProps } from "../Icon";

export type SipLineProps = Omit<IconProps, "name">;

export const SipLine = (props: SipLineProps) => (
  <Icon name="sip-line" {...props} />
);
