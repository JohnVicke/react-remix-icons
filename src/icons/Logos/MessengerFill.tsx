import React from "react";
import { Icon, IconProps } from "../Icon";

export type MessengerFillProps = Omit<IconProps, "name">;

export const MessengerFill = (props: MessengerFillProps) => (
  <Icon name="messenger-fill" {...props} />
);
