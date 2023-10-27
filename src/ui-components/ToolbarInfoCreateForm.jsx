/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ToolbarInfo } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ToolbarInfoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    isVisibleInk1: false,
    isVisibleInk2: false,
    isVisibleInk3: false,
    fontSize: "",
    drawingMode: "",
  };
  const [isVisibleInk1, setIsVisibleInk1] = React.useState(
    initialValues.isVisibleInk1
  );
  const [isVisibleInk2, setIsVisibleInk2] = React.useState(
    initialValues.isVisibleInk2
  );
  const [isVisibleInk3, setIsVisibleInk3] = React.useState(
    initialValues.isVisibleInk3
  );
  const [fontSize, setFontSize] = React.useState(initialValues.fontSize);
  const [drawingMode, setDrawingMode] = React.useState(
    initialValues.drawingMode
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIsVisibleInk1(initialValues.isVisibleInk1);
    setIsVisibleInk2(initialValues.isVisibleInk2);
    setIsVisibleInk3(initialValues.isVisibleInk3);
    setFontSize(initialValues.fontSize);
    setDrawingMode(initialValues.drawingMode);
    setErrors({});
  };
  const validations = {
    isVisibleInk1: [],
    isVisibleInk2: [],
    isVisibleInk3: [],
    fontSize: [],
    drawingMode: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          isVisibleInk1,
          isVisibleInk2,
          isVisibleInk3,
          fontSize,
          drawingMode,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new ToolbarInfo(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ToolbarInfoCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Is visible ink1"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isVisibleInk1}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isVisibleInk1: value,
              isVisibleInk2,
              isVisibleInk3,
              fontSize,
              drawingMode,
            };
            const result = onChange(modelFields);
            value = result?.isVisibleInk1 ?? value;
          }
          if (errors.isVisibleInk1?.hasError) {
            runValidationTasks("isVisibleInk1", value);
          }
          setIsVisibleInk1(value);
        }}
        onBlur={() => runValidationTasks("isVisibleInk1", isVisibleInk1)}
        errorMessage={errors.isVisibleInk1?.errorMessage}
        hasError={errors.isVisibleInk1?.hasError}
        {...getOverrideProps(overrides, "isVisibleInk1")}
      ></SwitchField>
      <SwitchField
        label="Is visible ink2"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isVisibleInk2}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isVisibleInk1,
              isVisibleInk2: value,
              isVisibleInk3,
              fontSize,
              drawingMode,
            };
            const result = onChange(modelFields);
            value = result?.isVisibleInk2 ?? value;
          }
          if (errors.isVisibleInk2?.hasError) {
            runValidationTasks("isVisibleInk2", value);
          }
          setIsVisibleInk2(value);
        }}
        onBlur={() => runValidationTasks("isVisibleInk2", isVisibleInk2)}
        errorMessage={errors.isVisibleInk2?.errorMessage}
        hasError={errors.isVisibleInk2?.hasError}
        {...getOverrideProps(overrides, "isVisibleInk2")}
      ></SwitchField>
      <SwitchField
        label="Is visible ink3"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isVisibleInk3}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isVisibleInk1,
              isVisibleInk2,
              isVisibleInk3: value,
              fontSize,
              drawingMode,
            };
            const result = onChange(modelFields);
            value = result?.isVisibleInk3 ?? value;
          }
          if (errors.isVisibleInk3?.hasError) {
            runValidationTasks("isVisibleInk3", value);
          }
          setIsVisibleInk3(value);
        }}
        onBlur={() => runValidationTasks("isVisibleInk3", isVisibleInk3)}
        errorMessage={errors.isVisibleInk3?.errorMessage}
        hasError={errors.isVisibleInk3?.hasError}
        {...getOverrideProps(overrides, "isVisibleInk3")}
      ></SwitchField>
      <TextField
        label="Font size"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={fontSize}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              isVisibleInk1,
              isVisibleInk2,
              isVisibleInk3,
              fontSize: value,
              drawingMode,
            };
            const result = onChange(modelFields);
            value = result?.fontSize ?? value;
          }
          if (errors.fontSize?.hasError) {
            runValidationTasks("fontSize", value);
          }
          setFontSize(value);
        }}
        onBlur={() => runValidationTasks("fontSize", fontSize)}
        errorMessage={errors.fontSize?.errorMessage}
        hasError={errors.fontSize?.hasError}
        {...getOverrideProps(overrides, "fontSize")}
      ></TextField>
      <SelectField
        label="Drawing mode"
        placeholder="Please select an option"
        isDisabled={false}
        value={drawingMode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isVisibleInk1,
              isVisibleInk2,
              isVisibleInk3,
              fontSize,
              drawingMode: value,
            };
            const result = onChange(modelFields);
            value = result?.drawingMode ?? value;
          }
          if (errors.drawingMode?.hasError) {
            runValidationTasks("drawingMode", value);
          }
          setDrawingMode(value);
        }}
        onBlur={() => runValidationTasks("drawingMode", drawingMode)}
        errorMessage={errors.drawingMode?.errorMessage}
        hasError={errors.drawingMode?.hasError}
        {...getOverrideProps(overrides, "drawingMode")}
      >
        <option
          children="Text"
          value="TEXT"
          {...getOverrideProps(overrides, "drawingModeoption0")}
        ></option>
        <option
          children="Pen"
          value="PEN"
          {...getOverrideProps(overrides, "drawingModeoption1")}
        ></option>
        <option
          children="Eraser"
          value="ERASER"
          {...getOverrideProps(overrides, "drawingModeoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
