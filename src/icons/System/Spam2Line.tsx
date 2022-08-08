import React from "react";
import { Icon, IconProps } from "../Icon";

export type Spam2LineProps = Omit<IconProps, "name">;

export const Spam2Line = (props: Spam2LineProps) => (
  <Icon name="spam-2-line" {...props} />
);
