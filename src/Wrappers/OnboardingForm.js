/* eslint-disable react/destructuring-assignment */
import React from 'react'
import styled from '@emotion/styled'
import ReactGA from 'react-ga'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'
import Input from '../components/Input'
import Button from '../components/Button'
import Select from '../components/Select'
import Accordition from '../components/Accordition'
import Textarea from '../components/TextArea'

const Title = styled.h2`
  font-size: var(--font-title);
`

const ContactColumn = styled(Column)`
  padding: 0 2rem;
  /* border-right: ${props => (props.bordered ? '1px solid var(--border-grey)' : 'none')}; */

  @media (max-width: 767px) {
    padding: 0;
  }
`

const LegalConsent = styled.div`
  p,
  label {
    font-size: var(--font-body);
  }

  label {
    font-weight: bold;

    input {
      margin-right: 0.5rem;
    }
  }
`

class OnboardingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    props.form.formFieldGroups.map((formField) => {
      this.state[formField.fields[0].name] = {
        value: '',
        error: null,
        required: formField.fields[0].required,
      }
    })
    this.state.legal = {
      process: false,
      error: false,
      communications: [],
    }
    const gdpr = props.form.metaData.find(m => m.name === 'legalConsentOptions')
    if (gdpr) {
      JSON.parse(gdpr.value).communicationConsentCheckboxes.map((cs) => {
        this.state.legal.communications.push({
          value: false,
          subscriptionTypeId: cs.communicationTypeId,
          text: cs.label,
        })
      })
    }
    this.state.success = false
  }

  setValue = (field, val) => {
    this.setState(ps => ({
      [field]: {
        ...ps[field],
        value: val,
      },
    }))
  }

  resetErrors = () => {
    const { state } = this

    Object.keys(state).map((key) => {
      if (state[key].error) {
        state[key].error = false
      }
    })
    this.setState(state)
  }

  submit = (e) => {
    e.preventDefault()
    // this.resetErrors();
    const gdpr = this.getGdpr()
    const { form } = this.props
    const portal = form.portalId
    const id = form.guid
    let isNotEmpty = true
    Object.keys(this.state).map((key) => {
      if (this.state[key].required && !this.state[key].value) {
        isNotEmpty = false
        this.setState(ps => ({
          [key]: {
            ...ps[key],
            error: true,
          },
        }))
      }
    })

    let legalConsentOptions

    if (gdpr && this.state.legal.process.length !== 0) {
      legalConsentOptions = {
        consent: {
          consentToProcess: this.state.legal.process,
          text: gdpr.processingConsentCheckboxLabel,
          communications: this.state.legal.communications,
        },
      }

      if (!legalConsentOptions.consent.consentToProcess) {
        return this.setState(ps => ({ legal: { ...ps.legal, error: true } }))
      }
    }

    if (!isNotEmpty) {
      return false
    }
    let fields = Object.keys(this.state).map((key) => {
      if (key !== 'legal' && key !== 'success') {
        return {
          name: key,
          value: this.state[key].value,
        }
      }
      return null
    })
    fields = fields.filter(f => f)

    const toSend = {
      submittedAt: Date.now(),
      fields,
      context: {
        pageName: document.title,
        pageUri: window.location.href,
      },
    }

    if (legalConsentOptions) {
      toSend.legalConsentOptions = legalConsentOptions
    }

    const body = JSON.stringify(toSend)

    return fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portal}/${id}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body,
      },
    ).then(res => res.json().then(json => this.handleResponse(json)))
  }

  handleResponse = (response) => {
    if (response.status === 'error') {
      this.handleError(response)
    }
    if (response.inlineMessage) {
      this.handleSuccess()
    }
  }

  handleError = (error) => {
    if (error && error.errors && error.errors.length > 0) {
      error.errors.map((e) => {
        const r = new RegExp(/'[A-Za-z]+\.([A-Za-z]+)'/)
        const field = r.exec(e.message)[1]

        this.setState(ps => ({
          [field]: {
            ...ps[field],
            error: true,
          },
        }))
      })
    }
  }

  handleSuccess = () => {
    ReactGA.event({
      category: 'lead',
      action: 'submit',
      label: 'Form',
    })
    if (window && window.fbq) {
      window.fbq('track', 'Lead')
    }
    // this.setState({ success: true })
    window.location.href = this.props.redirectTo
  }

  checkForError = () => {
    let error = false
    Object.keys(this.state).map((key) => {
      if (this.state[key].error) {
        error = true
      }
    })
    return error
  }

  getGdpr = () => {
    const {
      form: { metaData },
    } = this.props
    const gdpr = metaData.find(m => m.name === 'legalConsentOptions')
    if (gdpr) {
      const data = JSON.parse(gdpr.value)
      return data
    }
    return null
  }

  renderGdpr = () => {
    const data = this.getGdpr()
    const { legal } = this.state
    if (!data) {
      return null
    }
    return (
      <>
        <Column size="12">
          <LegalConsent>
            {legal.process !== undefined && (
              <>
                <label htmlFor="process">
                  <input
                    type="checkbox"
                    name="process"
                    value={legal.process}
                    onChange={() => this.setState(ps => ({
                      legal: { ...ps.legal, process: !ps.legal.process },
                    }))
                    }
                  />
                  {data.processingConsentCheckboxLabel}
                </label>
                {legal.error && (
                  <small style={{ color: 'red' }}>
                    Non è possibile proseguire senza aver prestato il consenso
                  </small>
                )}
              </>
            )}
            <Accordition title="Leggi la policy completa">
              <p>{data.processingConsentText}</p>
            </Accordition>
            {legal.communications
              && legal.communications.map((cb, index) => (
                <label key={index} htmlFor={cb.subscriptionTypeId}>
                  <input
                    type="checkbox"
                    name={cb.subscriptionTypeId}
                    value={cb.value}
                    onChange={() => {
                      const { communications } = legal
                      communications[index].value = !communications[index].value
                      this.setState(ps => ({
                        legal: {
                          ...ps.legal,
                          communications,
                        },
                      }))
                    }}
                  />
                  {cb.text}
                </label>
              ))}
            <Accordition title="Leggi la policy completa">
              <p>{data.communicationConsentText}</p>
              <p>{data.privacyPolicyText}</p>
            </Accordition>
          </LegalConsent>
        </Column>
      </>
    )
  }

  render() {
    const {
      form: { formFieldGroups },
      greyBg,
    } = this.props
    const { success } = this.state

    if (success) {
      return (
        <SectionContainer greyBg>
          <h2 style={{ textAlign: 'center' }}>
            Grazie per averci contattato, un nostro operatore presto ti
            contatterà!
          </h2>
        </SectionContainer>
      )
    }

    return (
      <SectionContainer greyBg={greyBg}>
        {/* <Row>
          <Column size="12" textCenterMobile>

          </Column>
        </Row> */}
        <Row>
          <Column size="6" offset="4">
            <Row>
              <Column size="12">
                <Title>Entra in Apical</Title>
                <p>
                  La tua Apical Experience può cominciare adesso! Ci vogliono
                  pochi minuti per permetterci di conoscere la tua realtà e i
                  tuoi bisogni.
                </p>
                {/* <h3>Intervista</h3>
                <p>
                  Prenota una call di 15 minuti con noi, potremo capire come
                  supportarti al meglio e quale piano consigliarti.
                </p> */}
              </Column>
              {formFieldGroups.map((formField, index) => {
                if (formField.fields[0].fieldType === 'text') {
                  return (
                    <ContactColumn size="12" bordered key={index}>
                      <Input
                        type={formField.fields[0].fieldType}
                        placeholder={formField.fields[0].label}
                        value={this.state[formField.fields[0].name].value}
                        onChange={val => this.setValue(formField.fields[0].name, val)
                        }
                        label={formField.fields[0].label}
                        required={formField.fields[0].required}
                        error={this.state[formField.fields[0].name].error}
                      />
                    </ContactColumn>
                  )
                }
                if (formField.fields[0].fieldType === 'textarea') {
                  return (
                    <ContactColumn size="12" bordered key={index}>
                      <Textarea
                        placeholder={formField.fields[0].label}
                        value={this.state[formField.fields[0].name].value}
                        onChange={val => this.setValue(formField.fields[0].name, val)
                        }
                        label={formField.fields[0].label}
                        required={formField.fields[0].required}
                        error={this.state[formField.fields[0].name].error}
                      />
                    </ContactColumn>
                  )
                }
                if (formField.fields[0].fieldType === 'select') {
                  return (
                    <ContactColumn size="12" bordered key={index}>
                      <Select
                        options={formField.fields[0].options.map(o => o.label)}
                        value={this.state[formField.fields[0].name].value}
                        onSelectChange={val => this.setValue(formField.fields[0].name, val)
                        }
                        placeholder={formField.fields[0].label}
                        required={formField.fields[0].required}
                        error={this.state[formField.fields[0].name].error}
                      />
                    </ContactColumn>
                  )
                }
                return null
              })}
              {this.renderGdpr()}
            </Row>
          </Column>
          <Column size="6" offset="4" textCenter>
            <Button
              primary
              button
              onClick={this.submit}
              style={{ textAlign: 'center', marginTop: '2rem' }}
            >
              Invia
            </Button>
            {this.checkForError() && (
              <small className="error">
                C'è qualche errore, ricontrolla i campi in rosso
              </small>
            )}
          </Column>
        </Row>
      </SectionContainer>
    )
  }
}

export default OnboardingForm
