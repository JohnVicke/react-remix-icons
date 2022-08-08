import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContactsBookLineProps = Omit<IconProps, "name">;

export const ContactsBookLine = (props: ContactsBookLineProps) => (
  <Icon name="contacts-book-line" {...props} />
);
