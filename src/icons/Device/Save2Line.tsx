import React from "react";
import { Icon, IconProps } from "../Icon";

export type Save2LineProps = Omit<IconProps, "name">;

export const Save2Line = (props: Save2LineProps) => (
  <Icon name="save-2-line" {...props} />
);
