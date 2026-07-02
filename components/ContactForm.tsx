'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  TextArea,
  Select,
  Text,
} from 'grommet';

const subjects = [
  'E-commerce - Alatere ecoM',
  'Formation - Alatere forMa',
  'Domiciliation - Alatere doMo',
  'Coworking - Alatere coWo',
  'Autre demande',
];

type Values = {
  nom: string;
  societe: string;
  email: string;
  sujet: string;
  message: string;
};

const empty: Values = {
  nom: '',
  societe: '',
  email: '',
  sujet: subjects[0],
  message: '',
};

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [value, setValue] = useState<Values>(empty);
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit() {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus('success');
      setValue(empty);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <Box
        background="rgba(136,180,86,0.12)"
        round="small"
        pad="medium"
        gap="small"
        role="status"
      >
        <Text weight={700} color="forest" size="large">
          Merci, votre demande est partie ✔
        </Text>
        <Text color="text-weak">
          Nous revenons vers vous sous 48 heures à l&rsquo;adresse indiquée.
        </Text>
        <Button
          alignSelf="start"
          secondary
          label="Envoyer une autre demande"
          onClick={() => setStatus('idle')}
        />
      </Box>
    );
  }

  return (
    <Form
      value={value}
      onChange={(next) => setValue(next as Values)}
      onSubmit={handleSubmit}
      validate="submit"
    >
      <Box direction="row" gap="medium" responsive>
        <Box flex>
          <FormField label="Nom" name="nom" required htmlFor="nom">
            <TextInput id="nom" name="nom" placeholder="Votre nom" />
          </FormField>
        </Box>
        <Box flex>
          <FormField label="Société" name="societe" htmlFor="societe">
            <TextInput id="societe" name="societe" placeholder="Votre société" />
          </FormField>
        </Box>
      </Box>

      <FormField
        label="E-mail"
        name="email"
        required
        htmlFor="email"
        validate={[
          {
            regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Adresse e-mail invalide',
            status: 'error',
          },
        ]}
      >
        <TextInput id="email" name="email" type="email" placeholder="vous@exemple.com" />
      </FormField>

      <FormField label="Sujet" name="sujet" htmlFor="sujet">
        <Select id="sujet" name="sujet" options={subjects} />
      </FormField>

      <FormField label="Message" name="message" required htmlFor="message">
        <TextArea id="message" name="message" rows={5} placeholder="Décrivez votre besoin…" />
      </FormField>

      {status === 'error' && (
        <Box pad={{ vertical: 'small' }}>
          <Text color="#C0392B" weight={600}>
            Une erreur est survenue. Réessayez ou écrivez-nous directement à
            contact@alatere-web.com.
          </Text>
        </Box>
      )}

      <Box margin={{ top: 'small' }}>
        <Button
          type="submit"
          primary
          alignSelf="start"
          label={status === 'sending' ? 'Envoi…' : 'Envoyer ma demande →'}
          disabled={status === 'sending'}
        />
      </Box>
    </Form>
  );
}
