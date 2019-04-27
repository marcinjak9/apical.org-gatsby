import React, { Component } from 'react'
import OnboardingForm from './OnboardingForm'

export default class FormSection extends Component {
  state = {
    form: null,
    error: false,
  }

  componentDidMount() {
    this.getForm()
  }

  getForm = async () => {
    const { formId } = this.props
    if (formId) {
      try {
        const res = await fetch(
          `${process.env.GATSBY_BACKEND_URL}/hubspot/forms/${formId}`,
        )
        const { data } = await res.json()
        this.setState({ form: data })
      } catch (error) {
        console.log(error)
        this.setState({ error: true })
      }
    }
  }

  render() {
    const { title, body } = this.props
    const { form, error } = this.state
    return (
      <div>
        {form && <OnboardingForm form={form} title={title} body={body} />}
        {error && <p>Nessun form trovato</p>}
      </div>
    )
  }
}
