import React from "react";
import { Icon, IconProps } from "../Icon";

export type Fingerprint2FillProps = Omit<IconProps, "name">;

export const Fingerprint2Fill = (props: Fingerprint2FillProps) => (
  <Icon name="fingerprint-2-fill" {...props} />
);
