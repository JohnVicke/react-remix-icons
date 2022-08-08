import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContactsBookUploadFillProps = Omit<IconProps, "name">;

export const ContactsBookUploadFill = (props: ContactsBookUploadFillProps) => (
  <Icon name="contacts-book-upload-fill" {...props} />
);
