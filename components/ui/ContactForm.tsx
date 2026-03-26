'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const contactSchema = z.object({
  naam: z
    .string()
    .min(2, 'Naam moet minimaal 2 tekens bevatten')
    .max(100, 'Naam mag maximaal 100 tekens bevatten'),
  email: z
    .string()
    .email('Voer een geldig e-mailadres in'),
  telefoon: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+\d\s\-()]{7,20}$/.test(val),
      'Voer een geldig telefoonnummer in'
    ),
  bericht: z
    .string()
    .min(10, 'Bericht moet minimaal 10 tekens bevatten')
    .max(2000, 'Bericht mag maximaal 2000 tekens bevatten'),
})

type ContactFormData = z.infer<typeof contactSchema>

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [serverMessage, setServerMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')
    setServerMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setServerMessage(result.message)
        reset()
      } else {
        setSubmitStatus('error')
        setServerMessage(
          result.message ||
            'Er is een fout opgetreden. Probeer het later opnieuw.'
        )
      }
    } catch {
      setSubmitStatus('error')
      setServerMessage(
        'Verbindingsfout. Controleer uw internetverbinding en probeer opnieuw.'
      )
    }
  }

  const inputBaseClass =
    'w-full bg-zwart border rounded-lg px-4 py-3 font-body text-wit text-sm placeholder-grijs transition-all duration-200 focus:outline-none focus:ring-1'
  const inputNormalClass = `${inputBaseClass} border-groen border-opacity-20 focus:border-groen-neon focus:ring-groen-neon focus:ring-opacity-30`
  const inputErrorClass = `${inputBaseClass} border-red-500 border-opacity-60 focus:border-red-400 focus:ring-red-400 focus:ring-opacity-30`

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Naam */}
      <div>
        <label
          htmlFor="naam"
          className="block font-body text-sm font-medium text-grijs mb-1.5"
        >
          Naam <span className="text-groen-neon">*</span>
        </label>
        <input
          id="naam"
          type="text"
          autoComplete="name"
          placeholder="Uw volledige naam"
          className={errors.naam ? inputErrorClass : inputNormalClass}
          {...register('naam')}
          aria-describedby={errors.naam ? 'naam-error' : undefined}
          aria-invalid={!!errors.naam}
        />
        {errors.naam && (
          <p id="naam-error" className="mt-1.5 text-red-400 font-body text-xs flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.naam.message}
          </p>
        )}
      </div>

      {/* E-mail */}
      <div>
        <label
          htmlFor="email"
          className="block font-body text-sm font-medium text-grijs mb-1.5"
        >
          E-mailadres <span className="text-groen-neon">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="uw@email.be"
          className={errors.email ? inputErrorClass : inputNormalClass}
          {...register('email')}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-red-400 font-body text-xs flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Telefoon */}
      <div>
        <label
          htmlFor="telefoon"
          className="block font-body text-sm font-medium text-grijs mb-1.5"
        >
          Telefoonnummer{' '}
          <span className="text-grijs text-xs font-normal">(optioneel)</span>
        </label>
        <input
          id="telefoon"
          type="tel"
          autoComplete="tel"
          placeholder="Uw telefoonnummer"
          className={errors.telefoon ? inputErrorClass : inputNormalClass}
          {...register('telefoon')}
          aria-describedby={errors.telefoon ? 'telefoon-error' : undefined}
          aria-invalid={!!errors.telefoon}
        />
        {errors.telefoon && (
          <p id="telefoon-error" className="mt-1.5 text-red-400 font-body text-xs flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.telefoon.message}
          </p>
        )}
      </div>

      {/* Bericht */}
      <div>
        <label
          htmlFor="bericht"
          className="block font-body text-sm font-medium text-grijs mb-1.5"
        >
          Bericht <span className="text-groen-neon">*</span>
        </label>
        <textarea
          id="bericht"
          rows={5}
          placeholder="Vertel ons over uw project of stel uw vraag..."
          className={`${errors.bericht ? inputErrorClass : inputNormalClass} resize-none`}
          {...register('bericht')}
          aria-describedby={errors.bericht ? 'bericht-error' : undefined}
          aria-invalid={!!errors.bericht}
        />
        {errors.bericht && (
          <p id="bericht-error" className="mt-1.5 text-red-400 font-body text-xs flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.bericht.message}
          </p>
        )}
      </div>

      {/* Privacy notice */}
      <p className="font-body text-grijs text-xs leading-relaxed">
        Door dit formulier in te dienen, gaat u akkoord met ons{' '}
        <a href="/privacy" className="text-groen-neon underline">
          privacybeleid
        </a>
        . Wij verwerken uw gegevens uitsluitend om uw vraag te beantwoorden.
      </p>

      {/* Submit button */}
      <button
        type="submit"
        disabled={submitStatus === 'loading' || submitStatus === 'success'}
        className="w-full flex items-center justify-center gap-2 font-body font-semibold text-sm bg-groen-neon text-white px-6 py-3.5 rounded-lg border border-groen-neon disabled:opacity-60 disabled:cursor-not-allowed hover:bg-groen-helder transition-all duration-300 hover:scale-[1.02] hover:shadow-groen-glow active:scale-[0.98]"
        aria-label="Verstuur contactformulier"
      >
        {submitStatus === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Verzenden...
          </>
        ) : submitStatus === 'success' ? (
          <>
            <CheckCircle size={18} />
            Verzonden!
          </>
        ) : (
          <>
            <Send size={18} />
            Verstuur bericht
          </>
        )}
      </button>

      {/* Server response message */}
      {submitStatus === 'success' && serverMessage && (
        <div
          className="flex items-start gap-3 p-4 bg-groen bg-opacity-10 border border-groen border-opacity-30 rounded-xl"
          role="alert"
        >
          <CheckCircle size={18} className="text-groen-neon flex-shrink-0 mt-0.5" />
          <p className="font-body text-groen-neon text-sm leading-relaxed">
            {serverMessage}
          </p>
        </div>
      )}

      {submitStatus === 'error' && serverMessage && (
        <div
          className="flex items-start gap-3 p-4 bg-red-50 border border-red-300 rounded-xl"
          role="alert"
        >
          <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
          <p className="font-body text-red-400 text-sm leading-relaxed">
            {serverMessage}
          </p>
        </div>
      )}
    </form>
  )
}
