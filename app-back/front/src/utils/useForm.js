import { useState } from "react";

const useForm = (schema, updateJobs) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = validate();
    if (!error) {
      const url = "/offers/create";
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      }).then((res) => {
        if (res.status === 200) updateJobs(inputs);
        else console.error(error);
      });
    } else {
      console.error(error);
      setErrors(error);
    }
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const validate = () => {
    return schema.validate(inputs);
  };

  return { handleSubmit, handleInputChange, errors };
};

export default useForm;
