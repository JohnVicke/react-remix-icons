import React from "react";
import { Icon, IconProps } from "../Icon";

export type TicketLineProps = Omit<IconProps, "name">;

export const TicketLine = (props: TicketLineProps) => (
  <Icon name="ticket-line" {...props} />
);
