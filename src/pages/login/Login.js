// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

// export default function Login() {
//   const [obj, setObj] = useState({});
//   useEffect(() => {
//     (async () => {
//       const res = await axios.get("/api/user/info/kim");
//       setObj(res.data);
//     })();
//   }, []);

//   return (
//     <>
//       Hello <br></br>
//       {JSON.stringify(obj)}
//     </>
//   );
// }

import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
const emailRegex = new RegExp(/\S+@\S+\.\S+/);

const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";

const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const App = () => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement
          style={{
            maxWidth: 650,
          }}
        >
          <fieldset className={"k-form-fieldset"}>
            <legend className={"k-form-legend"}>
              Please fill in the fields:
            </legend>
            <div className="mb-3">
              <Field
                name={"firstName"}
                component={Input}
                label={"First name"}
              />
            </div>

            <div className="mb-3">
              <Field name={"lastName"} component={Input} label={"Last name"} />
            </div>

            <div className="mb-3">
              <Field
                name={"email"}
                type={"email"}
                component={EmailInput}
                label={"Email"}
                validator={emailValidator}
              />
            </div>
          </fieldset>
          <div className="k-form-buttons">
            <button
              type={"submit"}
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
            </button>
          </div>
        </FormElement>
      )}
    />
  );
};

export default App;
