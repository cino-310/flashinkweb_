/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { AccountInfo } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AccountInfoUpdateForm(props) {
  const {
    id: idProp,
    accountInfo: accountInfoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    mailAddress: "",
  };
  const [mailAddress, setMailAddress] = React.useState(
    initialValues.mailAddress
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = accountInfoRecord
      ? { ...initialValues, ...accountInfoRecord }
      : initialValues;
    setMailAddress(cleanValues.mailAddress);
    setErrors({});
  };
  const [accountInfoRecord, setAccountInfoRecord] =
    React.useState(accountInfoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(AccountInfo, idProp)
        : accountInfoModelProp;
      setAccountInfoRecord(record);
    };
    queryData();
  }, [idProp, accountInfoModelProp]);
  React.useEffect(resetStateValues, [accountInfoRecord]);
  const validations = {
    mailAddress: [{ type: "Required" }],
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
          mailAddress,
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
          await DataStore.save(
            AccountInfo.copyOf(accountInfoRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AccountInfoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Mail address"
        isRequired={true}
        isReadOnly={false}
        value={mailAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mailAddress: value,
            };
            const result = onChange(modelFields);
            value = result?.mailAddress ?? value;
          }
          if (errors.mailAddress?.hasError) {
            runValidationTasks("mailAddress", value);
          }
          setMailAddress(value);
        }}
        onBlur={() => runValidationTasks("mailAddress", mailAddress)}
        errorMessage={errors.mailAddress?.errorMessage}
        hasError={errors.mailAddress?.hasError}
        {...getOverrideProps(overrides, "mailAddress")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || accountInfoModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || accountInfoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
