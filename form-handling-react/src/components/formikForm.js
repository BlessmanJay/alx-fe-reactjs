import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  // Validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik Submitted:", values);
        alert("User registered successfully!");
        resetForm();
      }}
    >
      {() => (
        <Form className="p-4 border rounded w-80 mx-auto mt-6">
          <h2 className="text-lg font-bold mb-3">Register (Formik)</h2>

          <div className="mb-2">
            <Field
              name="username"
              placeholder="Username"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-2">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-2">
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white p-2 w-full rounded"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
