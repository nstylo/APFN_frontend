import React, { useContext, useState } from "react"
import styled from "styled-components"

// material ui components
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Input,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Link,
  RadioGroup,
  Radio,
  useTheme,
} from "@material-ui/core"

// custom components
import DialogContext from "../Misc/DialogContext"
import AuthDialog from "../Misc/AuthDialog"
import { Button } from "../Basic/Basics"

// icons
import { Visibility, VisibilityOff } from "@material-ui/icons"

export default () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [role, setRole] = useState("")
  const [mail, setMail] = useState("")
  const [mailConf, setMailConf] = useState("")
  const [isVisible, setVisible] = useState(false)
  const [isConfVisible, setConfVisible] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  const { activeModal, setActiveModal } = useContext(DialogContext)
  const theme = useTheme()

  return (
    <AuthDialog
      open={activeModal === "signup" ? true : false}
      setOpen={setActiveModal}
    >
      <Typography variant="h3" color="primary" style={{ textAlign: "center" }}>
        Sign Up
      </Typography>
      <FormBody>
        <NameWrapper>
          <TextField
            label="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            style={{ width: "58%" }}
          />
        </NameWrapper>
        <RadioGroup
          aria-label="role"
          value={role}
          onChange={e => setRole(e.target.value)}
        >
          <div
            style={{
              padding: "20px 0 0 0",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" style={{ color: theme.palette.grey[500] }}>
              I want to be a:
            </Typography>
            <FormControlLabel
              value="tentant"
              label={
                <Typography variant="h4" color="primary">
                  Tentant
                </Typography>
              }
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="host"
              label={
                <Typography variant="h4" color="secondary">
                  Host
                </Typography>
              }
              control={<Radio color="secondary" />}
            />
          </div>
        </RadioGroup>
        <TextField
          label="Email Address"
          value={mail}
          onChange={e => setMail(e.target.value)}
        />
        <TextField
          label="Email Confirmation"
          value={mailConf}
          onChange={e => setMailConf(e.target.value)}
        />
        <FormControl variant="outlines">
          <InputLabel htmlFor="password-form">Password</InputLabel>
          <Input
            id="password-form"
            value={password}
            type={isVisible ? "text" : "password"}
            onChange={e => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setVisible(!isVisible)}
                  onMouseDown={e => e.preventDefault()}
                  style={{ marginBottom: "16px" }}
                >
                  {isVisible ? (
                    <Visibility
                      style={{
                        width: "26px",
                        height: "26px",
                      }}
                    />
                  ) : (
                    <VisibilityOff
                      style={{
                        width: "26px",
                        height: "26px",
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="outlines">
          <InputLabel htmlFor="password-conf-form">
            Password Confirmation
          </InputLabel>
          <Input
            id="password-conf-form"
            value={passwordConf}
            type={isConfVisible ? "text" : "password"}
            onChange={e => setPasswordConf(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password confirmation visibility"
                  onClick={() => setConfVisible(!isConfVisible)}
                  onMouseDown={e => e.preventDefault()}
                  style={{ marginBottom: "16px" }}
                >
                  {isConfVisible ? (
                    <Visibility
                      style={{
                        width: "26px",
                        height: "26px",
                      }}
                    />
                  ) : (
                    <VisibilityOff
                      style={{
                        width: "26px",
                        height: "26px",
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={
            <>
              {"Accept "}
              <Link
                onClick={() => {
                  alert("hey")
                }}
                style={{ fontSize: "20px", cursor: "pointer" }}
              >
                terms and conditions
              </Link>
            </>
          }
        />
        <Button>Create Account</Button>
        <Typography variant="body1" style={{ paddingTop: "30px" }}>
          Already have an account?
          <Link
            onClick={() => {
              setActiveModal("login")
            }}
            style={{ paddingLeft: "10px", cursor: "pointer" }}
          >
            Log In
          </Link>
        </Typography>
      </FormBody>
    </AuthDialog>
  )
}

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding-top: 20px;

  & > * {
    padding: 10px 0;
  }
`
