import React from "react";
import { Icon, IconProps } from "../Icon";

export type Ticket2LineProps = Omit<IconProps, "name">;

export const Ticket2Line = (props: Ticket2LineProps) => (
  <Icon name="ticket-2-line" {...props} />
);
