/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToolbarInfoCreateFormInputValues = {
    isVisibleInk1?: boolean;
    isVisibleInk2?: boolean;
    isVisibleInk3?: boolean;
    fontSize?: number;
    drawingMode?: string;
};
export declare type ToolbarInfoCreateFormValidationValues = {
    isVisibleInk1?: ValidationFunction<boolean>;
    isVisibleInk2?: ValidationFunction<boolean>;
    isVisibleInk3?: ValidationFunction<boolean>;
    fontSize?: ValidationFunction<number>;
    drawingMode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToolbarInfoCreateFormOverridesProps = {
    ToolbarInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isVisibleInk1?: PrimitiveOverrideProps<SwitchFieldProps>;
    isVisibleInk2?: PrimitiveOverrideProps<SwitchFieldProps>;
    isVisibleInk3?: PrimitiveOverrideProps<SwitchFieldProps>;
    fontSize?: PrimitiveOverrideProps<TextFieldProps>;
    drawingMode?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ToolbarInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: ToolbarInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ToolbarInfoCreateFormInputValues) => ToolbarInfoCreateFormInputValues;
    onSuccess?: (fields: ToolbarInfoCreateFormInputValues) => void;
    onError?: (fields: ToolbarInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToolbarInfoCreateFormInputValues) => ToolbarInfoCreateFormInputValues;
    onValidate?: ToolbarInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ToolbarInfoCreateForm(props: ToolbarInfoCreateFormProps): React.ReactElement;
