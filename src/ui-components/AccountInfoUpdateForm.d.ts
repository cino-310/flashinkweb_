/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AccountInfo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccountInfoUpdateFormInputValues = {
    mailAddress?: string;
};
export declare type AccountInfoUpdateFormValidationValues = {
    mailAddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountInfoUpdateFormOverridesProps = {
    AccountInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    mailAddress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccountInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    accountInfo?: AccountInfo;
    onSubmit?: (fields: AccountInfoUpdateFormInputValues) => AccountInfoUpdateFormInputValues;
    onSuccess?: (fields: AccountInfoUpdateFormInputValues) => void;
    onError?: (fields: AccountInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountInfoUpdateFormInputValues) => AccountInfoUpdateFormInputValues;
    onValidate?: AccountInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccountInfoUpdateForm(props: AccountInfoUpdateFormProps): React.ReactElement;
