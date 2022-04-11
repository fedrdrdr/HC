import { ReactElement } from "react";
export interface FooterProps {
    contactsInfo?: ReactElement;
    productInfo?: ReactElement;
    companyInfo?: ReactElement;
    rightsInfo?: ReactElement;
    className?: string;
}
declare const Footer: ({ contactsInfo, companyInfo, productInfo, rightsInfo, className }: FooterProps) => JSX.Element;
export default Footer;
