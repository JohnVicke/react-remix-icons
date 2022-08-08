import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContactsBookUploadLineProps = Omit<IconProps, "name">;

export const ContactsBookUploadLine = (props: ContactsBookUploadLineProps) => (
  <Icon name="contacts-book-upload-line" {...props} />
);
