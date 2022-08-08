import React from "react";
import { Icon, IconProps } from "../Icon";

export type Speaker2LineProps = Omit<IconProps, "name">;

export const Speaker2Line = (props: Speaker2LineProps) => (
  <Icon name="speaker-2-line" {...props} />
);
