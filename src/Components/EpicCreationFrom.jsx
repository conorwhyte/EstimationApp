import React from 'react'
import { Input, Select, Header, Button } from 'semantic-ui-react'

const estimationOptions = [
  {
    key: 'WAG',
    text: 'WAG',
    value: 'WAG',
  },
]

export const EpicCreationForm = props => {
  return (
    <div className="Home-body-section">
      <Header
        as="h2"
        content="Account Settings"
        subheader="Manage your account settings and set email preferences"
      />
      <br />
      <Input />
      <br />
      <Select placeholder="Select your option" options={estimationOptions} />

      <br />
      <Button primary onClick={props.onCreate}>
        Primary
      </Button>
    </div>
  )
}
