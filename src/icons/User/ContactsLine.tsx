import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContactsLineProps = Omit<IconProps, "name">;

export const ContactsLine = (props: ContactsLineProps) => (
  <Icon name="contacts-line" {...props} />
);
