import React, { Component } from 'react'
import OnboardingForm from './OnboardingForm'

export default class FormSection extends Component {
  state = {
    form: null,
  }

  componentDidMount() {
    this.getForm()
    console.log(process.env)
  }

  getForm = async () => {
    const res = await fetch(process.env.BACKEND_URL)
    const data = await res.json()
    this.setState({ form: data })
  }

  render() {
    const { title, body } = this.props
    const { form } = this.state
    return (
      <div>
        {form && <OnboardingForm form={form} title={title} body={body} />}
      </div>
    )
  }
}
