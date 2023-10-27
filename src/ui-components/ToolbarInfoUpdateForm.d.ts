/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ToolbarInfo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToolbarInfoUpdateFormInputValues = {
    isVisibleInk1?: boolean;
    isVisibleInk2?: boolean;
    isVisibleInk3?: boolean;
    fontSize?: number;
    drawingMode?: string;
};
export declare type ToolbarInfoUpdateFormValidationValues = {
    isVisibleInk1?: ValidationFunction<boolean>;
    isVisibleInk2?: ValidationFunction<boolean>;
    isVisibleInk3?: ValidationFunction<boolean>;
    fontSize?: ValidationFunction<number>;
    drawingMode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToolbarInfoUpdateFormOverridesProps = {
    ToolbarInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isVisibleInk1?: PrimitiveOverrideProps<SwitchFieldProps>;
    isVisibleInk2?: PrimitiveOverrideProps<SwitchFieldProps>;
    isVisibleInk3?: PrimitiveOverrideProps<SwitchFieldProps>;
    fontSize?: PrimitiveOverrideProps<TextFieldProps>;
    drawingMode?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ToolbarInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ToolbarInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    toolbarInfo?: ToolbarInfo;
    onSubmit?: (fields: ToolbarInfoUpdateFormInputValues) => ToolbarInfoUpdateFormInputValues;
    onSuccess?: (fields: ToolbarInfoUpdateFormInputValues) => void;
    onError?: (fields: ToolbarInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToolbarInfoUpdateFormInputValues) => ToolbarInfoUpdateFormInputValues;
    onValidate?: ToolbarInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ToolbarInfoUpdateForm(props: ToolbarInfoUpdateFormProps): React.ReactElement;
