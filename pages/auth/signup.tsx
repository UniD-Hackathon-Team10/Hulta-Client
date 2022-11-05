import Button from "@components/atoms/Button";
import TextInput from "@components/atoms/TextInput";
import React, { ReactNode, useState } from "react";
import { useFormik } from "formik";
import AuthLayout from "@components/AuthLayout";
import * as Yup from "yup";

type Props = {};

const Signup = (props: Props) => {
  const [signUpData, setSignUpData] = useState({
    id: "",
    password: "",
  });

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      nickname: "",
      id: "",
      password: "",
      rePassword: "",
    },
    validationSchema: Yup.object({
      nickname: Yup.string().required("닉네임을 입력해 주세요."),
      id: Yup.string().required("아이디를 입력해 주세요."),
      password: Yup.string().min(6, "6자리 이상 비밀번호를 입력해 주세요.").required("비밀번호를 입력해 주세요."),
      rePassword: Yup.string().required("비밀번호를 한번 더 입력해 주세요."),
    }),
    validate: (value) => {
      const errors = {} as { rePassword: string };
      if (value.password) {
        value.password !== value.rePassword;
        errors.rePassword = "비밀번호가 일치하지 않습니다.";
      }
      return errors;
    },
    onSubmit: async () => {
      // TODO API 연동
      console.log("회원가입");
    },
  });

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", rowGap: "20px", width: "100%" }}>
      <TextInput name="nickname" placeholder="닉네임" onChange={handleChange} value={values.nickname} error={errors.nickname} />
      <TextInput name="id" placeholder="아이디" onChange={handleChange} value={values.id} error={errors.id} />
      <TextInput name="password" placeholder="비밀번호" onChange={handleChange} value={values.password} error={errors.password} />
      <TextInput name="rePassword" placeholder="비밀번호 확인" onChange={handleChange} value={values.rePassword} error={errors.rePassword} />
      <Button
        label="로그인"
        buttonStyle={{ width: "100%", borderRadius: "30px", height: "48px", fontSize: "18px", fontWeight: "bold" }}
        type="submit"
      />
    </form>
  );
};

Signup.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

export default Signup;
