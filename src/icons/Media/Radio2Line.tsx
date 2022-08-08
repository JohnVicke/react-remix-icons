import React from "react";
import { Icon, IconProps } from "../Icon";

export type Radio2LineProps = Omit<IconProps, "name">;

export const Radio2Line = (props: Radio2LineProps) => (
  <Icon name="radio-2-line" {...props} />
);
