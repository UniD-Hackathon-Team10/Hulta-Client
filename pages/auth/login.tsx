import Button from "@components/atoms/Button";
import TextInput from "@components/atoms/TextInput";
import AuthLayout from "@components/AuthLayout";
import React, { ChangeEvent, ReactNode, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Logo from "@components/Logo";
import { useAppDispatch } from "@store/configureStore";
import { login } from "@store/slices/userSlice";
import { useRouter } from "next/router";

type LoginProps = {};

const Login = ({}: LoginProps) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { values, errors, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues: {
      id: "",
      password: "",
    },
    validationSchema: Yup.object({
      id: Yup.string().required("아이디를 입력해 주세요."),
      password: Yup.string().min(6, "6자리 이상 비밀번호를 입력해 주세요.").required("비밀번호를 입력해 주세요."),
    }),
    onSubmit: async (values) => {
      const userInfo = localStorage.getItem("userData");
      const _userInfo = userInfo ? JSON.parse(userInfo) : [];
      console.log(_userInfo);
      const myInfo = _userInfo.find((data: { userId: string; password: string }) => data.userId === values.id && data.password === values.password);
      if (!myInfo) return;
      dispatch(login({ userId: myInfo.userId, nickname: myInfo.nickname, createdAt: myInfo.createdAt }));
      resetForm();
      console.log("로그인");
      router.push("/");
    },
  });

  return (
    <>
      <Logo style={{ position: "absolute", top: "12vh" }} />
      <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", rowGap: "20px" }}>
        <TextInput name="id" placeholder="아이디" onChange={handleChange} value={values.id} error={errors.id} />
        <TextInput type="password" name="password" placeholder="비밀번호" onChange={handleChange} value={values.password} error={errors.password} />
        <Button
          label="로그인"
          buttonStyle={{ marginTop: "30px", width: "100%", borderRadius: "30px", height: "52px", fontSize: "18px", fontWeight: "bold" }}
        />
      </form>
      <Link href="/auth/signup" passHref>
        <a style={{ margin: "20px 0" }}>회원가입</a>
      </Link>
    </>
  );
};

Login.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

export default Login;
