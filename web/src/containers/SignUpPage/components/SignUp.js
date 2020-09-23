import React, { Component, memo } from 'react';
import { Field } from 'redux-form';

class SignUp extends Component {
  onSubmit = () => {
    this.props.dispatchSignUp();
  };

  render() {
    const { handleSubmit, classes, errorMessage } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            className={classes.input}
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{errorMessage}</div>
        <button>Sign Up!</button>
      </form>
    );
  }
}

export default memo(SignUp);
