import React, { useState } from "react"
import styled from "styled-components"
import { login } from "../Misc/Api"
import { useHistory } from "react-router-dom"

// material ui components
import {
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
} from "@material-ui/core"

// custom components
import AuthDialog from "../Misc/AuthDialog"
import { Button, PasswordTextField } from "lib"
import { useQuery } from "../Misc/Hooks"
import { useToastContext, ADD } from "../Misc/ToastContext"

export default ({ routeTo }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [params, setParams] = useQuery()
  const [error, setError] = useState(null)
  const { dispatchToast } = useToastContext()

  let history = useHistory()

  const handleLogin = async e => {
    e.preventDefault()
    const response = await login({ email, password })

    switch (response.name) {
      case "LOGIN_OK":
        setEmail("")
        setPassword("")

        if (routeTo) {
          history.push(routeTo)
        } else {
          history.push("/browse")
        }

        dispatchToast({
          type: ADD,
          payload: {
            message: "You logged in successfully!",
            severity: "success",
            duration: 5000,
          },
        })

        break
      case "INVALID_CREDENTIALS":
        // TODO: use backend error message?
        setError("Wrong password and/or email address.")
        break
      default:
        setError("Something went wrong, please try again.")
    }
  }

  return (
    <AuthDialog
      open={params.get("modal") === "login" ? true : false}
      setOpen={() => setParams(("modal": null))}
      onSubmit={handleLogin}
    >
      <Typography variant="h2" color="primary" style={{ textAlign: "center" }}>
        Log In
      </Typography>
      <TextField
        id="email"
        value={email}
        error={error ? true : false}
        disabled={disabled}
        helperText={error}
        label="Email Address"
        onChange={e => setEmail(e.target.value)}
      />
      <PasswordTextField
        id="password"
        value={password}
        error={error ? true : false}
        disabled={disabled}
        helperText={error}
        label="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <HelperBar>
        <FormControlLabel
          control={<Checkbox color="primary" disabled={disabled} />}
          label="Remember me"
        />
        <Link
          onClick={() => {
            setParams("modal", "forgotpw")
          }}
          style={{ cursor: "pointer" }}
        >
          <Typography variant="body1">Forgot Password</Typography>
        </Link>
      </HelperBar>
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        disabled={disabled}
      >
        Log in
      </Button>
      <Typography variant="body1" style={{ paddingTop: "30px" }}>
        Don't have an account?
        <Link
          onClick={() => {
            setParams("modal", "signup")
          }}
          style={{ paddingLeft: "10px", cursor: "pointer" }}
        >
          Sign Up
        </Link>
      </Typography>
    </AuthDialog>
  )
}

const HelperBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    max-height: 32px;
  }
`
