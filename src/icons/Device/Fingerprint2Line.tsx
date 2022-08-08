import React from "react";
import { Icon, IconProps } from "../Icon";

export type Fingerprint2LineProps = Omit<IconProps, "name">;

export const Fingerprint2Line = (props: Fingerprint2LineProps) => (
  <Icon name="fingerprint-2-line" {...props} />
);
