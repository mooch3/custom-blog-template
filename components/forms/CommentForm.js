import { useState } from "react";
import classes from "./CommentForm.module.css";
import useForm from "../../hooks/use-form";
import PrettyButton from "../ui/buttons/PrettyButton";

const isNotEmpty = (value) => value.trim().length > 0;
const isEmail = (value) => value.includes("@");

const CommentForm = ({ _id, addComment}) => {
  const [status, setStatus] = useState("Submit");

  const {
    isValid: nameValid,
    hasError: nameHasError,
    valueChangedHandler: nameValueChangedHandler,
    onBlurHandler: nameBlurHandler,
    reset: nameReset,
    value: nameValue,
  } = useForm(isNotEmpty);

  const {
    isValid: emailValid,
    hasError: emailHasError,
    valueChangedHandler: emailValueChangedHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset,
    value: emailValue,
  } = useForm(isEmail);

  const {
    isValid: messageValid,
    hasError: messageHasError,
    valueChangedHandler: messageValueChangedHandler,
    onBlurHandler: messageBlurHandler,
    reset: messageReset,
    value: messageValue,
  } = useForm(isNotEmpty);

  let formIsValid = false;

  if (nameValid && emailValid && messageValid) {
    formIsValid = true;
  }

  const invalidHelper = `${classes["form-control"]} ${classes["invalid"]}`;

  const nameInputClasses = !nameHasError
    ? classes["form-control"]
    : invalidHelper;
  const emailInputClasses = !emailHasError
    ? classes["form-control"]
    : invalidHelper;
  const messageInputClasses = !messageHasError
    ? classes["form-control"]
    : invalidHelper;

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(event.target.name);

    if (!formIsValid) {
      return;
    }

    const commentObj = {
      name: nameValue,
      email: emailValue,
      text: messageValue,
      _id: _id,
    };
    console.log(commentObj);

    // make async request

    setStatus("Sending...");

    // async call is done
    addComment(commentObj);
    setStatus("Submit");

    messageReset();
    nameReset();
    emailReset();
  };

  return (
    <>
      <h1 className={classes.header}>Leave a Reply</h1>
      <p className={classes.subheader}>Your email will not be published. Required fields are marked *.</p>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes["control-group"]}>
          <div className={nameInputClasses}>
            <label htmlFor="name">Name *</label>
            <input
              required
              onBlur={nameBlurHandler}
              onChange={nameValueChangedHandler}
              value={nameValue}
              autoComplete="off"
              type="text"
              id="name"
            />
            {nameHasError && (
              <p className={classes["invalid-notif"]}>
                Please enter your name.
              </p>
            )}
          </div>
          <div className={emailInputClasses}>
            <label htmlFor="email">Email *</label>
            <input
              required
              onBlur={emailBlurHandler}
              onChange={emailValueChangedHandler}
              value={emailValue}
              autoComplete="off"
              type="email"
              id="email"
            />
            {emailHasError && (
              <p className={classes["invalid-notif"]}>
                Please enter a valid email.
              </p>
            )}
          </div>
        </div>
        <div className={messageInputClasses}>
          <label htmlFor="message">Comment *</label>
          <textarea
            required
            onBlur={messageBlurHandler}
            onChange={messageValueChangedHandler}
            value={messageValue}
            autoComplete="off"
            type="text"
            id="message"
          />
          {messageHasError && (
            <p className={classes["invalid-notif"]}>Please enter a comment.</p>
          )}
        </div>
        <div className={classes["form-actions"]}>
          <PrettyButton disabled={!formIsValid}>{status}</PrettyButton>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
