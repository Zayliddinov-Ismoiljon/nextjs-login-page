"use client";

import { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/context/AuthContext";
import PublicLayout from "@/components/layout/public_layout";
import SubmitBtn from "@/components/button";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export default function Login() {
  const { login } = useAuth();
  const recaptchaRef = useRef<any>(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      captchaToken: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email noto‘g‘ri kiritilgan")
        .required("Email majburiy"),
      password: Yup.string().required("Parol majburiy"),
      captchaToken: Yup.string().required("Iltimos, robot emasligingizni tasdiqlang"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await login(values.email, values.password);
      } catch (err) {
        setErrors({ password: "Login muvaffaqiyatsiz. Qayta urinib ko‘ring." });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
        <div className="bg-white/60 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-sm">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 2c-2.667 0-8 1.333-8 4v2h16v-2c0-2.667-5.333-4-8-4z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-center text-lg font-semibold text-gray-800 mb-1">Sign in with email</h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Make a new doc to bring your words, data, and teams together. For free
          </p>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {formik.errors.captchaToken && (
              <p className="text-red-500 text-sm">{formik.errors.captchaToken}</p>
            )}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={SITE_KEY}
              onChange={(token:any) => formik.setFieldValue("captchaToken", token)}
              onExpired={() => formik.setFieldValue("captchaToken", "")}
            />

            <div className="flex justify-between text-sm text-gray-600">
              <span></span>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>

            <SubmitBtn />
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">or sign in with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
