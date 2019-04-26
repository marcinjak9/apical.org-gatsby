import React, { Component } from 'react'
// import OnboardingForm from './OnboardingForm'

export default class FormSection extends Component {
  state = {
    form: {},
  }

  componentDidMount() {
    this.getForm()
    console.log(process.env)
  }

  getForm = async () => {
    const res = await fetch(process.env.BACKEND_URL)
    // const data = await res.json()
    console.log(res)
    // return { form: data }
  }

  render() {
    const { form, title, body } = this.props
    return (
      <div>
        {/* <OnboardingForm form={form} title={title} body={body} /> */}
      </div>
    )
  }
}
